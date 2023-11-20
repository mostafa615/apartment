/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InquireOfferComponent } from './inquire-offer.component';

describe('InquireOfferComponent', () => {
  let component: InquireOfferComponent;
  let fixture: ComponentFixture<InquireOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquireOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquireOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
