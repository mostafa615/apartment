import { Component } from '@angular/core';
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

  constructor(public _adminservices:AdminsService , private messageService: MessageService,) { }
  totalofPages=0;
  ngOnInit() {

    this.getAllIssues(  )
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
  debugger
      const calcPageNumber = Math.floor(event.first / event.rows) + 1;
      this.pageNumber=calcPageNumber;
      console.log(calcPageNumber);
      this.getAllIssues();
      }

  addItem(value: string): void {
    this.showSide = value
  }


  selectedfromDropDown(value:any){
    debugger
    this.Date=value.name;
    this.getAllIssues()
    console.log(value)
  }
  cancelissue(id:any){
    this._adminservices.CancelIssue(id ).subscribe((res) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'The Issue Canceled '}` });
      this.getAllIssues()



    }, (err: any) => {
      debugger
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${err.error.detail}` });

    })


  }

}
