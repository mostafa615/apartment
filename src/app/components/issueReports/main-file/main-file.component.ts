import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AdminsService } from 'src/app/_services/admins/admins.service';

@Component({
  selector: 'app-main-file',
  templateUrl: './main-file.component.html',
  styleUrls: ['./main-file.component.scss']
})
export class MainFileComponent {
  showSide: string = '';
  showEdit: Array<boolean> = [];

  products!: Array<object>;
  issues:any=[];
  selectedProducts: Array<object> = [];
  headerData: Array<any> = [];
  loading: boolean = true;
  search:boolean=false
  listDropDown:Array<object>=[{name:'Today'},{name:'Last week'},{name:'This month'},{name:'This year'}]

  constructor(public _adminservices:AdminsService , private messageService: MessageService,public router: Router) { }
  totalofPages=0;
  ngOnInit() {

    this.getAllIssues(  )
    this.checkRole()
   }
   IssueRole:any
   is_Super:any
   checkRole(){
     const data = localStorage.getItem("user");
      if (data !== null) {

       let parsedData = JSON.parse(data);
        this.is_Super=parsedData.is_Super
       if(parsedData.is_Super==false) {
   for(let i=0; i<parsedData.permissions.length;i++){
     if(parsedData.permissions[i].page_Name=="Issue Reports"){
       this.IssueRole=parsedData.permissions[i];
     }
   }
   if(this.IssueRole.p_View==false &&this.is_Super==false) {
     this.gotopage( )
   }
   }


     }
   }
   gotopage( ){
     let url: string = "unlegal";
       this.router.navigateByUrl(url);
   }
   Date=""

   getAllIssues(  ) {
    this.issues=[]
    this.numberissues=0
    this._adminservices.ListAllIssues( this.pageNumber,this.pagesize,this.Date).subscribe((res:any) => {
      this.issues = res["data"];
      this.totalRecords=res["totalRecords"]

      this.numberissues = this.issues.length;
      this.totalofPages=res["totalPages"]


     }, (error) => {
       console.error('Error fetching owners:', error);
    })
  }
  detailperson(event:any,id: any): void {
    this.showEdit=[]
    event.stopPropagation()

    this.showEdit[id] == true ? this.showEdit[id] = false : this.showEdit[id] = true



   }
   hidecard( ){
    this.showEdit=[]

 }
 totalRecords=0
 pageNumber=1;
 numberissues=0;
 pagesize=10;
tiggerPageChange(event: any) {

      const calcPageNumber = Math.floor(event.first / event.rows) + 1;
      this.pageNumber=calcPageNumber;
      console.log(calcPageNumber);
      this.getAllIssues();
      }

  addItem(value: string): void {
    this.showSide = value
  }


  selectedfromDropDown(value:any){

    this.Date=value.name;
    this.getAllIssues()
    console.log(value)
  }
  cancelissue(id:any){
    this._adminservices.CancelIssue(id ).subscribe((res) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'The Issue Canceled '}` });
      this.getAllIssues()



    }, (err: any) => {

      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${ err.error.message[0]}` });

    })


  }

  MarkasProgress( ){
    this._adminservices.MarkasProgress(this.paramid ,this.Apointment).subscribe((res) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'Mark as Progress Successfuly '}` });
      this.getAllIssues()
      this.onCloseModal1();



    }, (err: any) => {

      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${ err.error.message[0]}` });

    })

  }
  appointement:any=[]
  display1="none";
  display2="none";
  paramid:any
  Apointment:any
  onCloseModal1(){
    this.display1="none";

  }
  onCloseModal2(){
    this.display2="none";

  }
  OpenModal1(id:any){
    this.Apointment=[]
    this.paramid=id

    this.GetIssueByid( )
    this.display1="block";

  }
  idmodel2:any
  OpenModal2(idmodel:any){
    this.idmodel2=idmodel
     this.who_will_pay="";this.worker_cost="";this.Total_cost="";this.Company_gain="";this.discerption=""
    this.display2="block";

  }
  GetIssueByid( ) {

    this._adminservices.GetIssueDetails(this.paramid).subscribe((res) => {
       this.appointement=res["appointement"]

      //  this.createissue.patchValue(res);
      //  this.createissue.get('issue_Images')?.setValue(res["issue_Images"]);
     }, (err: any) => {

      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${ err.error.message[0]}` });
    })


  }
  handleChange(item:any) {
    this.Apointment=item.appo_Date +item.appo_Time
  }
  who_will_pay:any="studiflats"
  handleChange2(item:any){
    debugger
    this.who_will_pay= item
  }
   Company_gain:any
  worker_cost:any
  Total_cost:any
  discerption:any
  MarkAsSolved( ){
    this._adminservices.MarkAsSolved(this.idmodel2,this.who_will_pay,this.worker_cost,this.Total_cost,this.Company_gain,this.discerption).subscribe((res) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'The Issue was marked as Solved'}` });
      this.getAllIssues()

this.onCloseModal2();

    }, (err: any) => {

      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${ err.error.message[0]}` });

    })

  }
}
