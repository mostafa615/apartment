import { Component, OnInit,ViewEncapsulation } from '@angular/core';

import { ApartmentService } from 'src/app/_services/apartments/apartment.service';
import { IApartments } from 'src/app/models/apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApartmentsComponent implements OnInit {

  showSide: string = '';
  apartmentFillterLists: Array<any> = [];
  apartmentFillterSelected: Array<any> = [];
  available: boolean = true;
  spinner: boolean = true;
  listDropDown: Array<object> = [];
  apartmentList: IApartments[] = [];

  constructor(private apartmentSer: ApartmentService) { }

  ngOnInit() {
    this.getAllApartment();
    this.initFakeData();
    this.clearAllCookie();
  }
  clearAllCookie() {
    const keysToRemove = ['generalInfoForm', 'PostBackupInfo', 'create_Apart_Equ', 'contract','imagesAPT','imagesAPT12','imagesAPT11'];

    for (const key of keysToRemove) {
      localStorage.removeItem(key);
    }
  }

  initFakeData(): void {
    this.apartmentFillterLists = ["All Apartment", "Rented Apartment", "Available Apartment" ];
    // this.apartmentFillterLists = ["All ", "Rented Apartment", "Available Apartment","Pending Apartment","Delete Apartment","Draft Apartment"];

    this.apartmentFillterSelected = [true];
    this.listDropDown = [{ name: 'Today' }, { name: 'Last week' }, { name: 'This month' }, { name: 'This year' }];
  }

  /**
   * getAllApartment
   * @returns void
   */
  fullRespone:any;
  pageNumber: number = 1;
  filterStatus:any="All"
  /** itemsPerPage */
  itemsPerPage: number = 10 ;

   pagesize=10;
  totalofPages=0;;
  disablenext=false;
  disableperv=false;
  incrementpage(){

    this.pageNumber+=1;
    if(this.pageNumber<1){
      this.pageNumber=1;

    }
    if(this.pageNumber>= this.totalofPages){
      this.pageNumber=this.totalofPages;

    }
    this.getAllApartment();
  }
  decreamentPage(){
    this.pageNumber-=1;
    if(this.pageNumber<1){
      this.pageNumber=1;

    }
    this.getAllApartment();

  }
  getAllApartment(): void {
    this.apartmentList=[];
    this.apartmentSer.FilterApartmentsFront("",this.pageNumber, this.itemsPerPage,this.filterStatus).subscribe((res) => {
      this.fullRespone=res;
      this.apartmentList = res["data"];
      this.totalofPages=res["totalPages"]
      if(this.totalofPages==this.pageNumber){
        this.disablenext=true
      }else{
        this.disablenext=false

      }
      if(this.pageNumber==1){
        this.disableperv=true
      }else{
        this.disableperv=false

      }
      this.spinner = false;
    })
  }
  tiggerPageChange(event: any) {
debugger
    const calcPageNumber = Math.floor(event.first / event.rows) + 1;
    this.pageNumber=calcPageNumber;
    console.log(calcPageNumber);
    this.getAllApartment()
  }
  // clickApartmentList(index: number) {
  //   this.apartmentFillterSelected = this.apartmentFillterSelected.map((data) => data == true ? false : false)
  //   this.apartmentFillterSelected[index] = true
  // }

  addItem(value: any) {
    this.showSide = value
  }

  selectedfromDropDown(value: any) {
    console.log(value)
  }
  checkindex=0;
  clickApartmentList(index:any){
    this.checkindex=index;
    this.apartmentFillterSelected = this.apartmentFillterSelected.map((data) => data == true ? false : false)
    this.apartmentFillterSelected[index] = true
    this.itemsPerPage=10;
    this.pageNumber=1;
    if(index == 0){
      this.filterStatus="All"
      this.getAllApartment();
    }
    if(index == 1){
      this.filterStatus="Rented"

      this.getAllApartment();
    }

    if(index == 2){
      this.filterStatus="Available"

      this.getAllApartment();

    }
    if(index == 3){
      this.filterStatus="Pending"

      this.getAllApartment();

    }
    if(index == 4){
      this.filterStatus="Delete"

      this.getAllApartment();

    }
    if(index == 5){
      this.filterStatus="Draft"

      this.getAllApartment();

    }
  }
}

