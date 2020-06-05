import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubbleImagesComponent } from './hubble-images.component';

describe('HubbleImagesComponent', () => {
  let component: HubbleImagesComponent;
  let fixture: ComponentFixture<HubbleImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubbleImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubbleImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
