import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDetailDashboardComponent } from './total-detail-dashboard.component';

describe('TotalDetailDashboardComponent', () => {
  let component: TotalDetailDashboardComponent;
  let fixture: ComponentFixture<TotalDetailDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalDetailDashboardComponent]
    });
    fixture = TestBed.createComponent(TotalDetailDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
