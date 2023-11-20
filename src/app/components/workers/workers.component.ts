import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AdminsService } from 'src/app/_services/admins/admins.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

   showEdit: Array<boolean> = [];
  showSide: string = '';
  products!: Array<object>;
  selectedProducts: Array<object> = [];
  headerData: Array<any> = [];
  loading: boolean = true;
  search:boolean=false
  listDropDown:Array<object>=[{name:'All'},{name:'Today'},{name:'Last Week'},{name:'This month'},{name:'This year'}]

  constructor( public _adminservices:AdminsService ,private messageService: MessageService,) { }

  ngOnInit() {
    // this.getAllworkers(  )
  }

   /**
   * selectedfromDropDown
   * @param $event string
   * @returns void
   */
  selectedfromDropDown(value:any){
    debugger
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
  workers=[{
    Name:"Jean Pha",Email:"s@gmail.com",Phone_number:"0124545454",WhatsApp:"0124545454",job:"developer",user_type:"individual "
  },
  {Name:"Jean Pha",Email:"s@gmail.com",Phone_number:"0124545454",WhatsApp:"0124545454",job:"developer",user_type:"individual "
},  {Name:"Jean Pha",Email:"s@gmail.com",Phone_number:"0124545454",WhatsApp:"0124545454",job:"developer",user_type:"individual "
},  {Name:"Jean Pha",Email:"s@gmail.com",Phone_number:"0124545454",WhatsApp:"0124545454",job:"developer",user_type:"individual "
}, {Name:"Jean Pha",Email:"s@gmail.com",Phone_number:"0124545454",WhatsApp:"0124545454",job:"developer",user_type:"individual "
},  {Name:"Jean Pha",Email:"s@gmail.com",Phone_number:"0124545454",WhatsApp:"0124545454",job:"developer",user_type:"individual "
},
]
totalRecords=0
tiggerPageChange(event: any) {
  debugger
      const calcPageNumber = Math.floor(event.first / event.rows) + 1;
      this.pageNumber=calcPageNumber;
      console.log(calcPageNumber);
     }
  numberworkers=0;
  Date:any="All"
  //  getAllworkers(  ) {
  //   this.workers=[]
  //   this.numberworkers=0
  //   this._adminservices.TenantList( this.pageNumber,this.pagesize,this.Date).subscribe((res:any) => {
  //     this.workers = res["data"];
  //     this.numberworkers = this.workers.length;
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
  // DeleteUser(id :any){
  //   this._adminservices.DeleteTenant( id).subscribe((res:any) => {
  //     this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'Deleted Successfuly'}` });

  //     this.getAllworkers( );

  //    }, (error) => {
  //     this.messageService.add({ severity: 'error', summary: 'Error', detail: `${'error'}` });
  //   })

  // }
  // SuspendUser(id:any){
  //   this._adminservices.SuspendTenant( id).subscribe((res:any) => {
  //     this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'Suspended Successfuly'}` });

  //     this.getAllworkers( );

  //    }, (error) => {
  //     this.messageService.add({ severity: 'error', summary: 'Error', detail: `${'error'}` });
  //   })
  // }
  detailperson(id: any): void {

    this.showEdit[id] == true ? this.showEdit[id] = false : this.showEdit[id] = true



   }
}
