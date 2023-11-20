import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFieldApartmentButtonComponent } from './add-new-field-apartment-button.component';

describe('AddNewFieldApartmentButtonComponent', () => {
  let component: AddNewFieldApartmentButtonComponent;
  let fixture: ComponentFixture<AddNewFieldApartmentButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewFieldApartmentButtonComponent]
    });
    fixture = TestBed.createComponent(AddNewFieldApartmentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
