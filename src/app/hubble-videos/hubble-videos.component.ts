import { Component, OnInit } from '@angular/core';
import { HubbleVideosService } from './hubble-videos.service';

@Component({
  selector: 'app-hubble-videos',
  templateUrl: './hubble-videos.component.html',
  styleUrls: ['./hubble-videos.component.css']
})
export class HubbleVideosComponent implements OnInit {

  hubbleVideosService: HubbleVideosService;

  page = 1;
  collections: [];
  totalImages: number;

  constructor(hubbleVideosService: HubbleVideosService) {
    this.hubbleVideosService = hubbleVideosService;
  }

  ngOnInit(): void {
  }

  truncate(value: string, limit = 25, completeWords = true, ellipsis = '…') {
    let lastindex = limit;
    if (completeWords) {
      lastindex = value.substr(0, limit).lastIndexOf(' ');
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }

}
