import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OnwerService } from 'src/app/_services/Onwers/onwer.service';
import { ApartmentService } from 'src/app/_services/apartments/apartment.service';

@Component({
  selector: 'app-inquire-edit',
  templateUrl: './inquire-edit.component.html',
  styleUrls: ['./inquire-edit.component.css']
})
export class InquireEditComponent implements OnInit {
  generalInfoForm!: FormGroup;

  apt_UUID: any;

  constructor(public _ApartmentService: ApartmentService, public _ActivatedRoute: ActivatedRoute,
    public _OnwerService :OnwerService,private sanitizer: DomSanitizer)
   {
    this.apt_UUID = _ActivatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.bindCreateGeneral();
    this. getApartmentDetails();
  }
  showSide: string = '';

  addItem(value: string): void {
    this.showSide = value
  }
  bindCreateGeneral(): void {
    this.generalInfoForm = new FormGroup({

       'apt_Price': new FormControl('', [Validators.required]),
      'apt_SecuirtyDep': new FormControl('', [Validators.required]),

      'apt_MaxGuest': new FormControl('', [Validators.required]),


    });
  }
  aprt_details:any
  getApartmentDetails() {

    this._ApartmentService.getApartDetail(this.apt_UUID).subscribe((res) => {
      this.aprt_details = res["general_Info"]
      debugger
      this.generalInfoForm.get("apt_Price")?.setValue(res["general_Info"].apt_Price)
      this.generalInfoForm.get("apt_SecuirtyDep")?.setValue(res["general_Info"].apt_SecuirtyDep)
      this.generalInfoForm.get("apt_MaxGuest")?.setValue(res["general_Info"].apt_MaxGuest)

    })
  }
}
