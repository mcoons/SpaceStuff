import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HubbleNews } from './hubble-news';
import { HubbleNewsDetail } from './hubble-news-detail';

@Injectable({
  providedIn: 'root'
})
export class HubbleNewsService {


  private apiRoot = '//hubblesite.org/api/v3/';
  private dbRoot = '';
  private page = 1;
  private pageSize = 25; // 25
  totalItems;
  totalPages;

  hubbleNewsIndex: HubbleNews[];
  hubbleNewsDetailArray: HubbleNewsDetail[];

  constructor(private httpClient: HttpClient) {
    this.hubbleNewsIndex = [];
    this.hubbleNewsDetailArray = [];
    this.getNewsIndex();
   }

  getAllnews(page: 1): Observable<HubbleNews[]> {
    // const response = this.httpClient.jsonp<HubbleNews[]>(this.apiRoot + 'news?page=' + page, 'callback');
    const response = this.httpClient.jsonp<HubbleNews[]>(this.apiRoot + 'news?page=1', 'callback');
    // console.log(response);
    return response;
  }

  // getAllNewsFromDB(page: any): Observable<HubbleNews[]> {
  //   const response = this.httpClient.get<HubbleNews[]>('https://spacestuffbackend.herokuapp.com/api/news');
  //   console.log(response);
  //   console.log("response from db");
  //   return response;
  // }

  getNews(id: number): Observable<HubbleNewsDetail> {
    const response =  this.httpClient.jsonp<HubbleNewsDetail>(this.apiRoot + 'news_release/' + id.toString(), 'callback');
    // console.log(response);
    return response;
  }

  getNewsIndex() {
    // this.getAllNewsFromDB('all').subscribe (
      this.getAllnews(1).subscribe (
        (response: HubbleNews[]) => {
        this.hubbleNewsIndex = response;

        this.totalItems = this.hubbleNewsIndex.length;
        this.totalPages = Math.trunc(this.totalItems / this.pageSize);

        console.log('Hubble Index');
        console.log(this.hubbleNewsIndex);
        this.loadNews(this.getPageCollection(1));
      });
  }

  getPageCollection(page) {

    if (page > this.totalPages) {
      page = 1;
    }
    const startIndex = (page - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    if (endIndex > this.totalItems) {
      endIndex = this.totalItems;
    }

    const pageCollection = this.hubbleNewsIndex.slice(startIndex, endIndex);

    return pageCollection;
  }

  loadNews(collection) {
    collection.forEach(
      (news) => {
        this.getNews(news.news_id).subscribe (

          (response: HubbleNewsDetail) => {
            this.hubbleNewsDetailArray.push(response);
          }
        );
       }
    );
  }
}
