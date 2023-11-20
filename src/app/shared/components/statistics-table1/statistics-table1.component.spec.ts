import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsTable1Component } from './statistics-table1.component';

describe('StatisticsTable1Component', () => {
  let component: StatisticsTable1Component;
  let fixture: ComponentFixture<StatisticsTable1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsTable1Component]
    });
    fixture = TestBed.createComponent(StatisticsTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
