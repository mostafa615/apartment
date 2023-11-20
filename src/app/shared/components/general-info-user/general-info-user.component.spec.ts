import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoUserComponent } from './general-info-user.component';

describe('GeneralInfoUserComponent', () => {
  let component: GeneralInfoUserComponent;
  let fixture: ComponentFixture<GeneralInfoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralInfoUserComponent]
    });
    fixture = TestBed.createComponent(GeneralInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
