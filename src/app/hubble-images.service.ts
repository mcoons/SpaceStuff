// project.service in tutorial

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';

// import { Observable } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HubbleImage } from './hubble-image';
import { HubbleImageDetail } from './hubble-image-detail';


@Injectable({
  providedIn: 'root'
})
export class HubbleImagesService {

  constructor( 
    private httpClient: HttpClient
     ) {}

   getAllImages(): Observable<HubbleImage[]> {
    return this.httpClient.jsonp<HubbleImage[]>('http://hubblesite.org/api/v3/images?page=2', 'callback');
   }

   getImage(id: number): Observable<HubbleImageDetail>  {
    return this.httpClient.jsonp<HubbleImageDetail>('http://hubblesite.org/api/v3/image/' + id.toString(), 'callback');
   }

}
