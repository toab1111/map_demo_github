import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMapComponent } from './layout-map.component';

describe('LayoutMapComponent', () => {
  let component: LayoutMapComponent;
  let fixture: ComponentFixture<LayoutMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
