import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HubbleNewsComponent } from './hubble-news.component';

describe('HubbleNewsComponent', () => {
  let component: HubbleNewsComponent;
  let fixture: ComponentFixture<HubbleNewsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HubbleNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubbleNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
