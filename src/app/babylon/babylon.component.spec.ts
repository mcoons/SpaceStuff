import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BabylonComponent } from './babylon.component';

describe('BabylonComponent', () => {
  let component: BabylonComponent;
  let fixture: ComponentFixture<BabylonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BabylonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabylonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
