import { TestBed } from '@angular/core/testing';

import { HubbleNewsService } from './hubble-news.service';

describe('HubbleNewsService', () => {
  let service: HubbleNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HubbleNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
