import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HubbleVideos } from './hubble-videos';
import { HubbleVideosDetail } from './hubble-videos-detail';

@Injectable({
  providedIn: 'root'
})
export class HubbleVideosService {

  private apiRoot = '//hubblesite.org/api/v3/';
  private dbRoot = '';
  private page = 1;
  private pageSize = 4;
  totalItems;
  totalPages;

  hubbleVideosIndex: HubbleVideos[];
  hubbleVideosDetailArray: HubbleVideosDetail[];

  constructor(private httpClient: HttpClient) {
    this.hubbleVideosIndex = [];
    this.hubbleVideosDetailArray = [];
    this.getVideosIndex();
  }


  // getAllVideosFromDB(page: any): Observable<HubbleVideos[]> {
  //   const response = this.httpClient.get<HubbleVideos[]>('https://spacestuffbackend.herokuapp.com/api/videos');
  //   console.log(response);
  //   console.log("response from db");
  //   return response;
  // }

  getVideos(id: number): Observable<HubbleVideosDetail> {
    const response =  this.httpClient.jsonp<HubbleVideosDetail>(this.apiRoot + 'video/' + id.toString(), 'callback');
    // console.log(response);
    return response;
  }

  getAllVideos(page: any): Observable<HubbleVideos[]> {
    const response = this.httpClient.jsonp<HubbleVideos[]>(this.apiRoot + 'videos?page=' + page, 'callback');
    // console.log(response);
    return response;
  }

  getVideosIndex() {
    // this.getAllVideosFromDB('all').subscribe (
      this.getAllVideos('all').subscribe (
        (response: HubbleVideos[]) => {
        this.hubbleVideosIndex = response;

        this.totalItems = this.hubbleVideosIndex.length;
        this.totalPages = Math.trunc(this.totalItems / this.pageSize);

        // console.log('Hubble Index');
        // console.log(this.hubbleVideosIndex);
        this.loadVideos(this.getPageCollection(1));
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

    const pageCollection = this.hubbleVideosIndex.slice(startIndex, endIndex);

    return pageCollection;
  }

  loadVideos(collection) {
    collection.forEach(
      (videos) => {
        this.getVideos(videos.id).subscribe (

          (response: HubbleVideosDetail) => {
            this.hubbleVideosDetailArray.push(response);
            console.log(response);

          }
        );
       }
    );
  }







}
