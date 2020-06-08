import { Component, OnInit } from '@angular/core';
import { HubbleImagesService } from './hubble-images.service';
// import { HubbleImage } from '../hubble-image';
// import { HubbleImageDetail } from '../hubble-image-detail';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hubble-images',
  templateUrl: './hubble-images.component.html',
  styleUrls: ['./hubble-images.component.css']
})
export class HubbleImagesComponent implements OnInit {
  hubbleImagesService: HubbleImagesService;

  page = 1;
  collections: [];
  totalImages: number;
  // pageList = [...Array(this.hubbleImagesService.totalPages).keys()]





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







  constructor(hubbleImagesService: HubbleImagesService) {
    this.hubbleImagesService = hubbleImagesService;
  }

  ngOnInit(): void {
  }

  // getImageIndex() {
  //   this.hubbleImagesService.getAllImages(1).subscribe (
  //     (response: HubbleImage[]) => {
  //       this.hubbleIndex = response;
  //       console.log('Hubble Index');
  //       console.log(this.hubbleIndex);
  //       this.loadImages(this.hubbleIndex, this.page);

  //     });
  // }

  // loadImages(page: number) {
  //   this.hubbleImagesService.getAllImages(page).subscribe (
  //     (response: HubbleImage[]) => {
  //       response.forEach(
  //         (image) => {
  //           this.hubbleImagesService.getImage(image.id).subscribe (
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
  //       this.hubbleImagesService.getImage(image.id).subscribe (

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
