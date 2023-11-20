import { Component, OnInit } from '@angular/core';
import {InquiresService} from '../../_services/inquires/inquires.service'
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent implements OnInit {
  Inquires:any=[]
  headerData: Array<any> = [];
  showEdit: Array<boolean> = [];

  numberInquires=0;
  constructor(private _inquiresService:InquiresService ,private messageService: MessageService) { }

  ngOnInit() {
    this.initFakeData();
    this. getAllInquires(this.statusinquire);
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
    this.getAllInquires(this.statusinquire);
  }
  decreamentPage(){
    this.pageNumber-=1;
    if(this.pageNumber<1){
      this.pageNumber=1;

    }
    this.getAllInquires(this.statusinquire);

  }
  date=""
  totalRecords=0;
  getAllInquires(  statusinquires:any) {
    this.Inquires=[]
    this.numberInquires=0
    this._inquiresService.getAllInquires(statusinquires,this.pageNumber,this.pagesize,this.date).subscribe((res:any) => {
      this.Inquires = res["data"];
      this.numberInquires = this.Inquires.length;
      this.totalofPages=res["totalPages"]
      this.totalRecords=res["totalRecords"]

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

     }, (error) => {
       console.error('Error fetching owners:', error);
    })
  }
  tiggerPageChange(event: any) {
    debugger
        const calcPageNumber = Math.floor(event.first / event.rows) + 1;
        this.pageNumber=calcPageNumber;
        console.log(calcPageNumber);
        this.getAllInquires(this.statusinquire);
      }
  detailperson(id: any): void {

    this.showEdit[id] == true ? this.showEdit[id] = false : this.showEdit[id] = true



   }
  showSide: string = '';

  addItem(value: string): void {
    this.showSide = value
  }
  dropdownOption: Array<any> = [];
  listDropDown:Array<object>=[{name:'Today'},{name:'Last week'},{name:'This month'},{name:'This year'}]
  Inquiries=[]
  InquireFillterLists: Array<any> = [];
  InquireFillterSelected: Array<any> = [];
  initFakeData(): void {
    this.InquireFillterLists = ["All Inquiries", "Waiting for approve", "Waiting list","confirmed inquiries"];
    this.InquireFillterSelected = [true];
   }
   selectedfromDropDown(value:any){
    console.log(value)
  }
  checkindex=0;
  clickIquires(index:any){
    this.checkindex=index;
    this.InquireFillterSelected = this.InquireFillterSelected.map((data) => data == true ? false : false)

    this.InquireFillterSelected[index] = true
    if(index == 0){
      this.statusinquire=""
      this.getAllInquires(this.statusinquire);
    }
    if(index == 1){
      this.statusinquire="Waiting"

      this.getAllInquires(this.statusinquire);
    }
    if(index == 2){
      this.statusinquire="Waiting"

      this.getAllInquires(this.statusinquire);

    }
    if(index == 3){
      this.statusinquire="Acepting"

      this.getAllInquires(this.statusinquire);

    }
  }
  AddWaitingList(id:any){
    this._inquiresService.AddWaitingList(id).subscribe((res) => {
      this.messageService.add({   severity: 'success', summary: 'Success', detail: 'Add Successfuly' });

      this.clickIquires( this.checkindex) ;

     }, (error) => {
      this.messageService.add({   severity: 'error', summary: 'error', detail: 'error' });
    })
  }
  display1="none";
  onCloseModal1(){
    this.display1="none"
  }
  idRequest:any
  onOpenModal1(id:any){
    this.Reason="";
    this.idRequest=id;
    this.display1="block"
  }
  Reason=""
  CancelRequest( ){
    this._inquiresService.CancelRequest(this.idRequest,this.Reason).subscribe((res) => {
      this.clickIquires( this.checkindex) ;
      this.display1="none"
      this.messageService.add({   severity: 'success', summary: 'Success', detail: 'Cancel Request Successfuly' });


     }, (error) => {
      this.messageService.add({   severity: 'error', summary: 'error', detail: 'error' });
    })
  }
}
