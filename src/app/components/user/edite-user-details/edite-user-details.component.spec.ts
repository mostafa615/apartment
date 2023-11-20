import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeUserDetailsComponent } from './edite-user-details.component';

describe('EditeUserDetailsComponent', () => {
  let component: EditeUserDetailsComponent;
  let fixture: ComponentFixture<EditeUserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeUserDetailsComponent]
    });
    fixture = TestBed.createComponent(EditeUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
