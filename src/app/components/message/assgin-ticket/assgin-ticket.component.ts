import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AdminsService } from 'src/app/_services/admins/admins.service';

@Component({
  selector: 'app-assgin-ticket',
  templateUrl: './assgin-ticket.component.html',
  styleUrls: ['./assgin-ticket.component.css']
})
export class AssginTicketComponent implements OnInit {

  showEdit: Array<boolean> = [];
 showSide: string = '';
 products!: Array<object>;
 selectedProducts: Array<object> = [];
 headerData: Array<any> = [];
 loading: boolean = true;
 search:boolean=false
 paramid:any
 listDropDown:Array<object>=[{name:'All'},{name:'Today'},{name:'Last Week'},{name:'This month'},{name:'This year'}]

 constructor(public router: Router, private _ActivatedRoute:ActivatedRoute,public _adminservices:AdminsService ,private messageService: MessageService,) {
  this.paramid = _ActivatedRoute.snapshot.paramMap.get('id');

 }

 ngOnInit() {
   this.getAllworkers(  )
   this.checkRole();
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
   this.gotopage2( )
 }
 }


   }
 }
 gotopage2( ){
   let url: string = "unlegal";
     this.router.navigateByUrl(url);
 }
  /**
  * selectedfromDropDown
  * @param $event string
  * @returns void
  */
 selectedfromDropDown(value:any){

   this.Date=value.name;
   // this.getAllworkers()
   console.log(value)
 }
 /**
  * addItem
  * @param value string
  * @returns void
  */
 addItem(value: string): void {
   this.showSide = value
 }
 idworkerassigin:any=""
 handleChange(evt:any,idworker:any) {

  this.idworkerassigin=idworker
  var target = evt.target;
  if (target.checked) {
   } else {
   }
}

 statusTenant:any=""
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
   // this.getAllworkers( );
 }
 decreamentPage(){
   this.pageNumber-=1;
   if(this.pageNumber<1){
     this.pageNumber=1;

   }
   // this.getAllworkers( );

 }
workers=[]
totalRecords=0
tiggerPageChange(event: any) {

     const calcPageNumber = Math.floor(event.first / event.rows) + 1;
     this.pageNumber=calcPageNumber;
     console.log(calcPageNumber);
     this.getAllworkers(  )
    }
 numberworkers=0;
 Date:any="All"

  getAllworkers(  ) {
   this.workers=[]
   this.numberworkers=0
   this._adminservices.GetAllEmp( this.pageNumber,this.pagesize ).subscribe((res:any) => {
     this.workers = res["data"];
     this.totalRecords=res["totalRecords"]

     this.numberworkers = this.workers.length;
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

gotopage( ){
  let url: string = "messages";
    this.router.navigateByUrl(url);
}
AssignWorker(  ) {
  debugger
  this._adminservices.AssignTicket( this.paramid,this.idworkerassigin ).subscribe((res) => {
    debugger
    this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'The Tickets was Assigned  '}` });

    this.gotopage( );

  }, (err: any) => {
    debugger
    this.messageService.add({ severity: 'error', summary: 'Error', detail: `${ err.error.message[0]}` });

  })


 }
}