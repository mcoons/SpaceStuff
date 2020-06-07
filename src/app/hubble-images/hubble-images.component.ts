import { Component, OnInit } from '@angular/core';
import { HubbleSiteService } from '../hubble-site.service';
import { HubbleImage } from '../hubble-image';
import { HubbleImageDetail } from '../hubble-image-detail';

@Component({
  selector: 'app-hubble-images',
  templateUrl: './hubble-images.component.html',
  styleUrls: ['./hubble-images.component.css']
})
export class HubbleImagesComponent implements OnInit {

  hubbleIndex: HubbleImage[];
  hubbleImageDetail: HubbleImageDetail;
  hubbleImagesDetailArray: HubbleImageDetail[];

  page = 1;
  collections: [];
  totalImages: number;

  constructor( private hubbleSiteService: HubbleSiteService ) {
    this.hubbleImagesDetailArray = [];
  }

  ngOnInit(): void {
    this.getImageIndex();


    // setTimeout(
    //   () => { console.log(this.hubbleImagesDetailArray); }
    //   , 5000) ;

  }

  getImageIndex() {
    this.hubbleSiteService.getAllImages(1).subscribe (
      (response: HubbleImage[]) => {
        this.hubbleIndex = response;
        console.log('Hubble Index');
        console.log(this.hubbleIndex);
        this.loadImages(this.hubbleIndex, this.page);

      });
  }

  // loadImages(page: number) {
  //   this.hubbleSiteService.getAllImages(page).subscribe (
  //     (response: HubbleImage[]) => {
  //       response.forEach(
  //         (image) => {
  //           this.hubbleSiteService.getImage(image.id).subscribe (
  //             (response2: HubbleImageDetail) => {
  //               this.hubbleImagesDetailArray.push(response2);
  //             }
  //           );
  //         }
  //       );
  //     }
  //   );
  // }

  showIndex() {

  }

  loadImages(collection, page) {

    collection.forEach(
      (image) => {
        this.hubbleSiteService.getImage(image.id).subscribe (

          (response: HubbleImageDetail) => {
            this.hubbleImagesDetailArray.push(response);
          }
        );
       }
    );
  }


  truncate(value: string, limit = 25, completeWords = true, ellipsis = '…') {
    let lastindex = limit;
    if (completeWords) {
      lastindex = value.substr(0, limit).lastIndexOf(' ');
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }
}
