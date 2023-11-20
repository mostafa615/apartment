import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewApartmentsComponent } from './add-new-apartments.component';

describe('AddNewApartmentsComponent', () => {
  let component: AddNewApartmentsComponent;
  let fixture: ComponentFixture<AddNewApartmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewApartmentsComponent]
    });
    fixture = TestBed.createComponent(AddNewApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
