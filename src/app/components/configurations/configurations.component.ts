import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AdminsService } from 'src/app/_services/admins/admins.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {

  showEdit: Array<boolean> = [];
 showSide: string = '';
 products!: Array<object>;
 selectedProducts: Array<object> = [];
 headerData: Array<any> = [];
 loading: boolean = true;
 search:boolean=false
 listDropDown:Array<object>=[{name:'All'},{name:'Today'},{name:'Last Week'},{name:'This month'},{name:'This year'}]

 constructor( public _adminservices:AdminsService ,public router: Router,private messageService: MessageService,) { }

 ngOnInit() {

   this.getAllFAQ(  )
   this.checkRole();
 }

  /**
  * selectedfromDropDown
  * @param $event string
  * @returns void
  */
 selectedfromDropDown(value:any){

   this.Date=value.name;
   // this.getAllpartners()
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


 statusTenant:any=""
 pageNumber=1;
 pagesize=10;
 totalofPages=0;;
 disablenext=false;
 disableperv=false;

 FAQ=[]
totalRecords=0
tiggerPageChange(event: any) {

     const calcPageNumber = Math.floor(event.first / event.rows) + 1;
     this.pageNumber=calcPageNumber;
     console.log(calcPageNumber);
     this.getAllFAQ(  )
    }
 numberFAQ=0;
 Date:any="All"
  getAllFAQ(  ) {
   this.FAQ=[]
   this.numberFAQ=0
   this._adminservices.GetFAQ(  ).subscribe((res:any) => {
     this.FAQ = res ;
     this.totalRecords=this.FAQ.length

     this.numberFAQ = this.FAQ.length;
     this.totalofPages=(this.FAQ.length/10)


    }, (error) => {
      console.error('Error fetching owners:', error);
   })
 }
 // DeleteUser(id :any){
 //   this._adminservices.DeleteTenant( id).subscribe((res:any) => {
 //     this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'Deleted Successfuly'}` });

 //     this.getAllpartners( );

 //    }, (error) => {
 //     this.messageService.add({ severity: 'error', summary: 'Error', detail: `${'error'}` });
 //   })

 // }
 // SuspendUser(id:any){
 //   this._adminservices.SuspendTenant( id).subscribe((res:any) => {
 //     this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'Suspended Successfuly'}` });

 //     this.getAllpartners( );

 //    }, (error) => {
 //     this.messageService.add({ severity: 'error', summary: 'Error', detail: `${'error'}` });
 //   })
 // }
 detailperson(event:any,id: any): void {
   this.showEdit=[]
   event.stopPropagation()

   this.showEdit[id] == true ? this.showEdit[id] = false : this.showEdit[id] = true



  }
  hidecard( ){
   this.showEdit=[]

}
deletepartner( id:any) {

 this._adminservices.DeletePartners(id ).subscribe((res) => {
   this.messageService.add({ severity: 'success', summary: 'Success', detail: `${' partner has been Successfully deleted into DB  '}` });



 }, (err: any) => {

   this.messageService.add({ severity: 'error', summary: 'Error', detail: `${ err.error.message[0]}` });

 })


}
partnersRole:any
is_Super:any
checkRole(){
 const data = localStorage.getItem("user");
  if (data !== null) {

   let parsedData = JSON.parse(data);
    this.is_Super=parsedData.is_Super
   if(parsedData.is_Super==false) {
for(let i=0; i<parsedData.permissions.length;i++){
 if(parsedData.permissions[i].page_Name=="partners"){
   this.partnersRole=parsedData.permissions[i];
 }
}
if(this.partnersRole.p_View==false &&this.is_Super==false) {
 this.gotopage( )
}
}


 }
}
gotopage( ){
 let url: string = "unlegal";
   this.router.navigateByUrl(url);
}
}
