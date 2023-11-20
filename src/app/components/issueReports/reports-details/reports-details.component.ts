import { Component ,ViewEncapsulation } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-reports-details',
  templateUrl: './reports-details.component.html',
  styleUrls: ['./reports-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportsDetailsComponent {

  

  showSide: string = '';

  value: string = '';
  cities: Array<object> = [];
  selectedCity: Object = {};
  available: boolean = true;
  link: Array<boolean> = [true];
  param:any
  listAnchors: any = [
    { id: 'Generalinfo', link: 'General info' },
    { id: 'OtherDetails', link: 'Other Details' },
    { id: 'Documentdetails', link: 'Document details' },
    { id: 'Rentalhistory', link: 'Rental history' },
    { id: 'userinformation', link: 'user information' },
  ]

  ngOnInit() {
    this.initCities();
  }

  constructor(private viewportScroller: ViewportScroller) { 
    this.param = window.location.pathname ; 
    if (this.param == "/Reports_View") this.param = "Reports View"
    else if(this.param == "/Edit_Reports_View") this.param = "Edit Reports View"
    else this.param = "Report Details"
   
  }
  /**
   * initCities
   * @return void
   */
  initCities(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  /**
   * addItem
   * @param value 
   */
  addItem(value: string) {
    this.showSide = value
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  
  changeAnchor(index: number): void {
    this.link = this.link.map(el => el == true ? false : false)
    this.link[index] = true
  }

  submitForm():void{

  }
}
