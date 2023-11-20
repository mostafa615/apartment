import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadPDFButtonComponent } from './download-pdfbutton.component';

describe('DownloadPDFButtonComponent', () => {
  let component: DownloadPDFButtonComponent;
  let fixture: ComponentFixture<DownloadPDFButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadPDFButtonComponent]
    });
    fixture = TestBed.createComponent(DownloadPDFButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
