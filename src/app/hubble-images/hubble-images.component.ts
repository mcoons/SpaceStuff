import { Component, OnInit } from '@angular/core';
import { HubbleSiteService } from '../hubble-site.service';
// import { HubbleImage } from '../hubble-image';
// import { HubbleImageDetail } from '../hubble-image-detail';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hubble-images',
  templateUrl: './hubble-images.component.html',
  styleUrls: ['./hubble-images.component.css']
})
export class HubbleImagesComponent implements OnInit {
  hubbleSiteService: HubbleSiteService;

  page = 1;
  collections: [];
  totalImages: number;
  // pageList = [...Array(this.hubbleSiteService.totalPages).keys()]





  // websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']

  // form = new FormGroup({
  //   website: new FormControl('', Validators.required)
  // });

  // get f() {
  //   return this.form.controls;
  // }

  // submit() {
  //   console.log(this.form.value);
  // }
  // changeWebsite(e) {
  //   console.log(e.target.value);
  // }







  constructor(hubbleSiteService: HubbleSiteService) {
    this.hubbleSiteService = hubbleSiteService;
  }

  ngOnInit(): void {
  }

  // getImageIndex() {
  //   this.hubbleSiteService.getAllImages(1).subscribe (
  //     (response: HubbleImage[]) => {
  //       this.hubbleIndex = response;
  //       console.log('Hubble Index');
  //       console.log(this.hubbleIndex);
  //       this.loadImages(this.hubbleIndex, this.page);

  //     });
  // }

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

  // showIndex() {
  // }

  // loadImages(collection, page) {

  //   collection.forEach(
  //     (image) => {
  //       this.hubbleSiteService.getImage(image.id).subscribe (

  //         (response: HubbleImageDetail) => {
  //           this.hubbleImagesDetailArray.push(response);
  //         }
  //       );
  //      }
  //   );
  // }


  truncate(value: string, limit = 25, completeWords = true, ellipsis = '…') {
    let lastindex = limit;
    if (completeWords) {
      lastindex = value.substr(0, limit).lastIndexOf(' ');
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }
}
