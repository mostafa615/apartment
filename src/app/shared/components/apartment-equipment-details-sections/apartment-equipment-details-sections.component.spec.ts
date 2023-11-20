import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentEquipmentDetailsSectionsComponent } from './apartment-equipment-details-sections.component';

describe('ApartmentEquipmentDetailsSectionsComponent', () => {
  let component: ApartmentEquipmentDetailsSectionsComponent;
  let fixture: ComponentFixture<ApartmentEquipmentDetailsSectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentEquipmentDetailsSectionsComponent]
    });
    fixture = TestBed.createComponent(ApartmentEquipmentDetailsSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
