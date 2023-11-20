import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewButtonComponent } from './add-new-button.component';

describe('AddNewButtonComponent', () => {
  let component: AddNewButtonComponent;
  let fixture: ComponentFixture<AddNewButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewButtonComponent]
    });
    fixture = TestBed.createComponent(AddNewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
