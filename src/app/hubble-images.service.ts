
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HubbleImage } from './hubble-image';
import { HubbleImageDetail } from './hubble-image-detail';


@Injectable({
  providedIn: 'root'
})
export class HubbleImagesService {

  constructor( private httpClient: HttpClient) {}

  // collection - 
  // page - 
   getAllImages(): Observable<HubbleImage[]> {
    return this.httpClient.jsonp<HubbleImage[]>('//hubblesite.org/api/v3/images?page=2', 'callback');
   }

   getImage(id: number): Observable<HubbleImageDetail>  {
    return this.httpClient.jsonp<HubbleImageDetail>('//hubblesite.org/api/v3/image/' + id.toString(), 'callback');
   }

}
