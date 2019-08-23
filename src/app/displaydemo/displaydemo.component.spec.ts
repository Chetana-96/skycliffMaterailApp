import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydemoComponent } from './displaydemo.component';

describe('DisplaydemoComponent', () => {
  let component: DisplaydemoComponent;
  let fixture: ComponentFixture<DisplaydemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
