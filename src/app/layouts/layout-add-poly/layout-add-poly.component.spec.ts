import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAddPolyComponent } from './layout-add-poly.component';

describe('LayoutAddPolyComponent', () => {
  let component: LayoutAddPolyComponent;
  let fixture: ComponentFixture<LayoutAddPolyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutAddPolyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAddPolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
