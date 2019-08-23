import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainDragndropComponent } from './main-dragndrop.component';

describe('MainDragndropComponent', () => {
  let component: MainDragndropComponent;
  let fixture: ComponentFixture<MainDragndropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDragndropComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDragndropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
