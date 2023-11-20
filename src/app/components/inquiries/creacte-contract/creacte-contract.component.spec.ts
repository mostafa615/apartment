/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreacteContractComponent } from './creacte-contract.component';

describe('CreacteContractComponent', () => {
  let component: CreacteContractComponent;
  let fixture: ComponentFixture<CreacteContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacteContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacteContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
