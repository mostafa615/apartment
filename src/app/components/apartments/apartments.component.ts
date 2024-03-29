import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

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

  constructor(private apartmentSer: ApartmentService,public router: Router,private messageService: MessageService,) { }

  ngOnInit() {
    this.getAllApartment();
    this.initFakeData();
    this.clearAllCookie();
    this.checkRole()
  }
  ApartmentsRole:any
is_Super:any
checkRole(){
  const data = localStorage.getItem("user");
   if (data !== null) {

    let parsedData = JSON.parse(data);
     this.is_Super=parsedData.is_Super
    if(parsedData.is_Super==false) {
for(let i=0; i<parsedData.permissions.length;i++){
  if(parsedData.permissions[i].page_Name=="Apartments"){
    this.ApartmentsRole=parsedData.permissions[i];
  }
}
if(this.ApartmentsRole.p_View==false &&this.is_Super==false) {
  this.gotopage( )
}
}


  }
}
gotopage( ){
  let url: string = "unlegal";
    this.router.navigateByUrl(url);
}
  clearAllCookie() {
    const keysToRemove = ['generalInfoForm', 'PostBackupInfo', 'create_Apart_Equ', 'contract','imagesAPT','imagesAPT12','imagesAPT11'];

    for (const key of keysToRemove) {
      localStorage.removeItem(key);
    }
  }
  Date=""
  selectedfromDropDown(value:any){

    this.Date=value.name;
    this.getAllApartment()
    console.log(value)
  }
  initFakeData(): void {
    this.apartmentFillterLists = ["All Apartment", "Rented Apartment", "Available Apartment","Pending",'Draft',"Rent EndSoon" ];
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
  itemsPerPage: number = 8 ;

   pagesize=8;
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
  messagemessage:any
  AddtoBest(apt_UUID:any) {
    this.apartmentSer.AddtoBest( apt_UUID).subscribe((res) => {
      this.messagemessage=res["message"]
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `${this.messagemessage}` });

    }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${'error'}` });
    })
  }
  messagemessage2:any
  RemoveBest(apt_UUID:any) {
    this.apartmentSer.RemoveBest( apt_UUID).subscribe((res) => {
      this.messagemessage2=res["message"]
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `${this.messagemessage2}` });

    }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${'error'}` });
    })
  }
  DeleteApartment(apt_UUID:any) {
    this.apartmentSer.DeleteApartment( apt_UUID).subscribe((res:any) => {
       this.messageService.add({ severity: 'success', summary: 'Success', detail:res["message"]  });
       this.getAllApartment();

    }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${'error'}` });
    })
  }

  getAllApartment(): void {
    this.apartmentList=[];
    this.apartmentSer.FilterApartmentsFront(this.Date,this.pageNumber, this.itemsPerPage,this.filterStatus).subscribe((res) => {
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

    if(index == 5){
      this.filterStatus="RentEndSoon"

      this.getAllApartment();

    }

    if(index == 4){
      this.filterStatus="Draft"

      this.getAllApartment();

    }
  }
  xx:any
  showEdit: Array<boolean> = [];
   detailperson(event:any,id: any): void {
    this.xx=id;
    this.showEdit=[]
    event.stopPropagation()

    this.showEdit[id] == true ? this.showEdit[id] = false : this.showEdit[id] = true



   }
   hidecard( ){
    this.xx=""
    this.showEdit=[]

 }
}

