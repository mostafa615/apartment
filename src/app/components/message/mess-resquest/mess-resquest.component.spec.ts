/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MessResquestComponent } from './mess-resquest.component';

describe('MessResquestComponent', () => {
  let component: MessResquestComponent;
  let fixture: ComponentFixture<MessResquestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessResquestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessResquestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
