import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubbleVideosComponent } from './hubble-videos.component';

describe('HubbleVideosComponent', () => {
  let component: HubbleVideosComponent;
  let fixture: ComponentFixture<HubbleVideosComponent>;

  beforeEach(async(() => {
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
