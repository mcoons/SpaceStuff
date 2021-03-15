import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HubbleVideosComponent } from './hubble-videos.component';

describe('HubbleVideosComponent', () => {
  let component: HubbleVideosComponent;
  let fixture: ComponentFixture<HubbleVideosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HubbleVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubbleVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
