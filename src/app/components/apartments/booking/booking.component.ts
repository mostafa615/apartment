import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AdminsService } from 'src/app/_services/admins/admins.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  search: boolean = false;
  /** searchText  */
  searchText: string = '';
  showSide:string = '';
  value:any=''
  booking:any=[]
  activePerson:boolean=true
  apt_UUID:any=""
  constructor(private _bookService:AdminsService ,private messageService: MessageService,public router: Router, public _ActivatedRoute: ActivatedRoute) {
    this.apt_UUID = _ActivatedRoute.snapshot.paramMap.get('id');

   }

  ngOnInit() {
      this.getAllbokk();
  }
  StatisticsRole:any
 is_Super:any
 searchTextChange: EventEmitter<string> = new EventEmitter<string>();
 onPageChange: EventEmitter<number> = new EventEmitter<number>();
  addItem(value:any){
    this.showSide=value
  }
  openDropdown(event: Event) {
    event.stopPropagation(); // Prevents the dropdown from closing when clicking the button
  }
  searchAction() {
    this.searchTextChange.emit(this.searchText);
    this.search = false;
  }
  GetSelectedItem(): void {
    console.log(this.selectedProducts);
  }
    bokk:any=[]
    headerData: Array<any> = [];
    showEdit: Array<boolean> = [];
    selectedProducts: Array<object> = [];
    numberbokk=0;
    dataSelectionKey: string = '';

    bokkRole:any


    statusinquire:any=""
    pageNumber=1;
    pagesize=10;
    totalofPages=0;;
    disablenext=false;
    disableperv=false;

    date=""
    totalRecords=0;
    getAllbokk(   ) {
      this.booking=[]
      this.numberbokk=0
      this._bookService.GetBookingHistory(this.apt_UUID,this.pageNumber,this.pagesize,this.searchText).subscribe((res:any) => {
        this.booking = res["data"];
        this.numberbokk = this.booking.length;
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

          const calcPageNumber = Math.floor(event.first / event.rows) + 1;
          this.pageNumber=calcPageNumber;
          console.log(calcPageNumber);
          this.getAllbokk();
        }
        ids:any=[]
    detailperson(event:any, id: any){
      this.showEdit=[]
  event.stopPropagation()

      this.showEdit[id] == true ? this.showEdit[id] = false : this.showEdit[id] = true

     }

    dropdownOption: Array<any> = [];
    listDropDown:Array<object>=[{name:'Today'},{name:'Last week'},{name:'This month'},{name:'This year'}]
    Inquiries=[]
    InquireFillterLists: Array<any> = [];
    InquireFillterSelected: Array<any> = [];

     selectedfromDropDown(value:any){
      this.date=value.name;
      this.getAllbokk();
      console.log(value)
    }



    hidecard(id:any){
       this.showEdit=[]

    }
  }
