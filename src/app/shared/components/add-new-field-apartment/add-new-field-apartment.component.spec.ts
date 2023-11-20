import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFieldApartmentComponent } from './add-new-field-apartment.component';

describe('AddNewFieldApartmentComponent', () => {
  let component: AddNewFieldApartmentComponent;
  let fixture: ComponentFixture<AddNewFieldApartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewFieldApartmentComponent]
    });
    fixture = TestBed.createComponent(AddNewFieldApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
