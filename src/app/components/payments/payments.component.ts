import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    this.initFakeData();
    this.checkRole();
  }
  PaymentsRole:any
  is_Super:any
  checkRole(){
    const data = localStorage.getItem("user");
     if (data !== null) {

      let parsedData = JSON.parse(data);
       this.is_Super=parsedData.is_Super
      if(parsedData.is_Super==false) {
  for(let i=0; i<parsedData.permissions.length;i++){
    if(parsedData.permissions[i].page_Name=="Payments"){
      this.PaymentsRole=parsedData.permissions[i];
    }
  }
  if(this.PaymentsRole.p_View==false &&this.is_Super==false) {
    this.gotopage( )
  }
}


    }
  }
  gotopage( ){
    let url: string = "unlegal";
      this.router.navigateByUrl(url);
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

        const calcPageNumber = Math.floor(event.first / event.rows) + 1;
        this.pageNumber=calcPageNumber;
        console.log(calcPageNumber);
       }
       selectedfromDropDown(value:any){
        console.log(value)
      }
}
