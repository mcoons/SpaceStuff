import { Component, OnInit } from '@angular/core';
import { HubbleNewsService } from './hubble-news.service';

@Component({
  selector: 'app-hubble-news',
  templateUrl: './hubble-news.component.html',
  styleUrls: ['./hubble-news.component.css']
})
export class HubbleNewsComponent implements OnInit {
  hubbleNewsService: HubbleNewsService;

  page = 1;
  collections: [];
  totalImages: number;

  constructor(hubbleNewsService: HubbleNewsService) {
    this.hubbleNewsService = hubbleNewsService;
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
