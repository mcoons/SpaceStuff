import { TestBed } from '@angular/core/testing';

import { HubbleImagesService } from './hubble-images.service';

describe('HubbleImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HubbleImagesService = TestBed.get(HubbleImagesService);
    expect(service).toBeTruthy();
  });
});
