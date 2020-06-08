import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HubbleImage } from './hubble-image';
import { HubbleImageDetail } from './hubble-image-detail';


@Injectable({
  providedIn: 'root'
})
export class HubbleSiteService {

  private apiRoot = '//hubblesite.org/api/v3/';
  private dbRoot = '';
  private page = 1;
  private pageSize = 25;
  totalItems;
  totalPages;

  hubbleIndex: HubbleImage[];
  hubbleImagesDetailArray: HubbleImageDetail[];


  constructor(private httpClient: HttpClient) {
    this.hubbleIndex = [];
    this.hubbleImagesDetailArray = [];
    this.getImageIndex();
   }


  getAllImages(page: any): Observable<HubbleImage[]> {
    const response = this.httpClient.jsonp<HubbleImage[]>(this.apiRoot + 'images?page=' + page, 'callback');
    // console.log(response);
    return response;
  }



  getAllImagesFromDB(page: any): Observable<HubbleImage[]> {
    const response = this.httpClient.get<HubbleImage[]>('http://localhost:8080/api/images');
    console.log(response);
    console.log("response from db");
    return response;
  }




  getImage(id: number): Observable<HubbleImageDetail> {
    const response =  this.httpClient.jsonp<HubbleImageDetail>(this.apiRoot + 'image/' + id.toString(), 'callback');
    // console.log(response);
    return response;
  }

  getImageIndex() {
    // this.getAllImages('all').subscribe (
      this.getAllImagesFromDB('all').subscribe (
        (response: HubbleImage[]) => {
        this.hubbleIndex = response;

        this.totalItems = this.hubbleIndex.length;
        this.totalPages = Math.trunc(this.totalItems / this.pageSize);

        console.log('Hubble Index');
        console.log(this.hubbleIndex);
        this.loadImages(this.getPageCollection(2));
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

    const pageCollection = this.hubbleIndex.slice(startIndex, endIndex);

    return pageCollection;
  }

  loadImages(collection) {
    collection.forEach(
      (image) => {
        this.getImage(image.id).subscribe (

          (response: HubbleImageDetail) => {
            this.hubbleImagesDetailArray.push(response);
          }
        );
       }
    );
  }

}
