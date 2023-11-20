import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ApartmentService } from 'src/app/_services/apartments/apartment.service';
import { InquiresService } from 'src/app/_services/inquires/inquires.service';

@Component({
  selector: 'app-inquire-offer',
  templateUrl: './inquire-offer.component.html',
  styleUrls: ['./inquire-offer.component.css']
})
export class InquireOfferComponent implements OnInit {

  Inquires:any=[]
  headerData: Array<any> = [];
  showEdit: Array<boolean> = [];

  numberInquires=0;
  constructor(private _inquiresService:InquiresService ,private apartmentSer: ApartmentService,private messageService: MessageService) { }

  ngOnInit() {
     this. getAllApartment();
  }
  statusinquire:any=""
  pageNumber=1;
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
  apartmentList:any=[]
  getAllApartment(): void {
    this.apartmentList=[];
    this.apartmentSer.FilterApartmentsFront("",this.pageNumber, 10,"All").subscribe((res) => {
       this.apartmentList = res["data"];
       this.numberInquires = this.Inquires.length;
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
     })
  }
  // getAllInquires(  statusinquires:any) {
  //   this.Inquires=[]
  //   this.numberInquires=0
  //   this._inquiresService.getAllInquires(statusinquires,this.pageNumber).subscribe((res:any) => {
  //     this.Inquires = res["data"];
  //     this.numberInquires = this.Inquires.length;
  //     this.totalofPages=res["totalPages"]
  //     if(this.totalofPages==this.pageNumber){
  //       this.disablenext=true
  //     }else{
  //       this.disablenext=false

  //     }
  //     if(this.pageNumber==1){
  //       this.disableperv=true
  //     }else{
  //       this.disableperv=false

  //     }

  //    }, (error) => {
  //      console.error('Error fetching owners:', error);
  //   })
  // }
  showSide: string = '';

  addItem(value: string): void {
    this.showSide = value
  }
  detailperson(id: number): void {
    this.showEdit[id] == true ? this.showEdit[id] = false : this.showEdit[id] = true

  }

  display1="none";
  onCloseModal1(){
    this.display1="none";

  }
  openModel1(){
    this.display1="block";

  }
}
