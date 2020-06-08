import { TestBed } from '@angular/core/testing';

import { HubbleSiteService } from './hubble-site.service';

describe('HubbleSiteService', () => {
  let service: HubbleSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HubbleSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
