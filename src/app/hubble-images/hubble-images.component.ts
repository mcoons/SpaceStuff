import { Component, OnInit } from '@angular/core';
import { HubbleImagesService } from '../hubble-images.service';
import { HubbleImage } from '../hubble-image';
import { HubbleImageDetail } from '../hubble-image-detail';

@Component({
  selector: 'app-hubble-images',
  templateUrl: './hubble-images.component.html',
  styleUrls: ['./hubble-images.component.css']
})
export class HubbleImagesComponent implements OnInit {

  hubbleImages: HubbleImage[];
  hubbleImage: HubbleImageDetail;
  hubbleImagesDetailArray: HubbleImageDetail[];

  constructor( private hubbleImagesService: HubbleImagesService ) {
    this.hubbleImagesDetailArray = [];
  }

  ngOnInit(): void {
    this.hubbleImagesService.getAllImages().subscribe (
      (response: HubbleImage[]) => {
        response.forEach(
          (image) => {
            this.hubbleImagesService.getImage(image.id).subscribe (
              (response2: HubbleImageDetail) => {
                this.hubbleImagesDetailArray.push(response2);
              }
            );
          }
        );
      }
    );

    setTimeout(
      () => { console.log(this.hubbleImagesDetailArray); }
      , 5000) ;

  }

}
