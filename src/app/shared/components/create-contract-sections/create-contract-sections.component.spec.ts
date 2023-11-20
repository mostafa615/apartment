import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContractSectionsComponent } from './create-contract-sections.component';

describe('CreateContractSectionsComponent', () => {
  let component: CreateContractSectionsComponent;
  let fixture: ComponentFixture<CreateContractSectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateContractSectionsComponent]
    });
    fixture = TestBed.createComponent(CreateContractSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
