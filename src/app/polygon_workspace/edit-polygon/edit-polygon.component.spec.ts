import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPolygonComponent } from './edit-polygon.component';

describe('EditPolygonComponent', () => {
  let component: EditPolygonComponent;
  let fixture: ComponentFixture<EditPolygonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPolygonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
