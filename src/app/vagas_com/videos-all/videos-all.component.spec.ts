import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosAllComponent } from './videos-all.component';

describe('VideosAllComponent', () => {
  let component: VideosAllComponent;
  let fixture: ComponentFixture<VideosAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
