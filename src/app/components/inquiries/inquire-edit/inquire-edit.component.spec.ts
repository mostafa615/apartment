/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InquireEditComponent } from './inquire-edit.component';

describe('InquireEditComponent', () => {
  let component: InquireEditComponent;
  let fixture: ComponentFixture<InquireEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquireEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquireEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
