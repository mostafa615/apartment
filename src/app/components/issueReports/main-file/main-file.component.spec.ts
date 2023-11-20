import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFileComponent } from './main-file.component';

describe('MainFileComponent', () => {
  let component: MainFileComponent;
  let fixture: ComponentFixture<MainFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFileComponent]
    });
    fixture = TestBed.createComponent(MainFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
