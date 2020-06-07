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

  constructor(private httpClient: HttpClient) { }

  // getAllImages(): Observable<HubbleImage[]> {
  //   return this.httpClient.jsonp<HubbleImage[]>(this.apiRoot + 'images', 'callback');
  // }

  getAllImages(page: number): Observable<HubbleImage[]> {
    const response = this.httpClient.jsonp<HubbleImage[]>(this.apiRoot + 'images?page=' + page, 'callback');
    // console.log(response);
    return response;
  }

  getImage(id: number): Observable<HubbleImageDetail> {
    const response =  this.httpClient.jsonp<HubbleImageDetail>(this.apiRoot + 'image/' + id.toString(), 'callback');
    // console.log(response);
    return response;
  }

}
