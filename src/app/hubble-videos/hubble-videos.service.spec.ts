import { TestBed } from '@angular/core/testing';

import { HubbleVideosService } from './hubble-videos.service';

describe('HubbleVideosService', () => {
  let service: HubbleVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HubbleVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
