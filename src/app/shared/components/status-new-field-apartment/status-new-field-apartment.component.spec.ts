import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusNewFieldApartmentComponent } from './status-new-field-apartment.component';

describe('StatusNewFieldApartmentComponent', () => {
  let component: StatusNewFieldApartmentComponent;
  let fixture: ComponentFixture<StatusNewFieldApartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusNewFieldApartmentComponent]
    });
    fixture = TestBed.createComponent(StatusNewFieldApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
