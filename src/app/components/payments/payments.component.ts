import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initFakeData();
  }
  initFakeData(): void {
    this.paymentFillterLists = ["All Payments", "Rent", "Security Deposit","Other payments"];
    this.paymentFillterSelected = [true];
   }
  payments=[{
    Name:"apartment 41 spalt lake city apartment 1050",Date:"April 28, 2023",Amount:"€45,00.00",WhatsApp:"visa",job:"$65,00.00",user_type:"Failed"
  },
  {Name:"apartment 41 spalt lake city apartment 1050",Date:"April 28, 2023",Amount:"€45,00.00",WhatsApp:"visa",job:"$65,00.00",user_type:"paid"
},  {Name:"apartment 41 spalt lake city apartment 1050",Date:"April 28, 2023",Amount:"€45,00.00",WhatsApp:"visa",job:"$65,00.00",user_type:"paid"
},  {Name:"apartment 41 spalt lake city apartment 1050",Date:"April 28, 2023",Amount:"€45,00.00",WhatsApp:"visa",job:"$65,00.00",user_type:"paid"
}, {Name:"apartment 41 spalt lake city apartment 1050",Date:"April 28, 2023",Amount:"€45,00.00",WhatsApp:"visa",job:"$65,00.00",user_type:"paid"
},  {Name:"apartment 41 spalt lake city apartment 1050",Date:"April 28, 2023",Amount:"€45,00.00",WhatsApp:"visa",job:"$65,00.00",user_type:"paid"
}];
dropdownOption: Array<any> = [];
  listDropDown:Array<object>=[{name:'Today'},{name:'Last week'},{name:'This month'},{name:'This year'}]

  paymentFillterLists: Array<any> = [];
  paymentFillterSelected: Array<any> = [];

  showSide: string = '';

  addItem(value: string): void {
    this.showSide = value
  }
  showEdit: Array<boolean> = [];

  detailperson(event:any, id: any){
    this.showEdit=[]
event.stopPropagation()

    this.showEdit[id] == true ? this.showEdit[id] = false : this.showEdit[id] = true





   }
   pageNumber=1;
  pagesize=10;
  totalofPages=1 ;
  totalRecords=10;
  tiggerPageChange(event: any) {
    debugger
        const calcPageNumber = Math.floor(event.first / event.rows) + 1;
        this.pageNumber=calcPageNumber;
        console.log(calcPageNumber);
       }
       selectedfromDropDown(value:any){
        console.log(value)
      }
}
