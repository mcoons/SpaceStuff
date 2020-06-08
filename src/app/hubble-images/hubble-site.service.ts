import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HubbleImage } from './hubble-image';
import { HubbleImageDetail } from './hubble-image-detail';

@Injectable({
  providedIn: 'root'
})
export class HubbleSiteService {

  // private apiRoot = '//hubblesite.org/api/v3/';
  // private dbRoot = '';
  // private page = 1;
  // private pageSize = 25;
  // totalItems;
  // totalPages;

  // hubbleImageIndex: HubbleImage[];
  // hubbleImagesDetailArray: HubbleImageDetail[];

  // constructor(private httpClient: HttpClient) {
  //   this.hubbleImageIndex = [];
  //   this.hubbleImagesDetailArray = [];
  //   this.getImageIndex();
  //  }

  // // getAllImages(page: any): Observable<HubbleImage[]> {
  // //   const response = this.httpClient.jsonp<HubbleImage[]>(this.apiRoot + 'images?page=' + page, 'callback');
  // //   // console.log(response);
  // //   return response;
  // // }

  // getAllImagesFromDB(page: any): Observable<HubbleImage[]> {
  //   const response = this.httpClient.get<HubbleImage[]>('https://spacestuffbackend.herokuapp.com/api/images');
  //   console.log(response);
  //   console.log("response from db");
  //   return response;
  // }

  // getImage(id: number): Observable<HubbleImageDetail> {
  //   const response =  this.httpClient.jsonp<HubbleImageDetail>(this.apiRoot + 'image/' + id.toString(), 'callback');
  //   // console.log(response);
  //   return response;
  // }

  // getImageIndex() {
  //     this.getAllImagesFromDB('all').subscribe (
  //       (response: HubbleImage[]) => {
  //       this.hubbleImageIndex = response;

  //       this.totalItems = this.hubbleImageIndex.length;
  //       this.totalPages = Math.trunc(this.totalItems / this.pageSize);

  //       console.log('Hubble Index');
  //       console.log(this.hubbleImageIndex);
  //       this.loadImages(this.getPageCollection(2));
  //     });
  // }

  // getPageCollection(page) {

  //   if (page > this.totalPages) {
  //     page = 1;
  //   }
  //   const startIndex = (page - 1) * this.pageSize;
  //   let endIndex = startIndex + this.pageSize;
  //   if (endIndex > this.totalItems) {
  //     endIndex = this.totalItems;
  //   }

  //   const pageCollection = this.hubbleImageIndex.slice(startIndex, endIndex);

  //   return pageCollection;
  // }

  // loadImages(collection) {
  //   collection.forEach(
  //     (image) => {
  //       this.getImage(image.id).subscribe (

  //         (response: HubbleImageDetail) => {
  //           this.hubbleImagesDetailArray.push(response);
  //         }
  //       );
  //      }
  //   );
  // }

}
