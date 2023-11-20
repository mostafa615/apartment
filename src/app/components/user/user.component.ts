import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AdminsService } from 'src/app/_services/admins/admins.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  showSide: string = '';
  products!: Array<object>;
  selectedProducts: Array<object> = [];
  headerData: Array<any> = [];
  loading: boolean = true;
  search:boolean=false
  listDropDown:Array<object>=[{name:'All'},{name:'Today'},{name:'Last Week'},{name:'This month'},{name:'This year'}]

  constructor( public _adminservices:AdminsService ,private messageService: MessageService,) { }

  ngOnInit() {
    this.getAllTenants(  )
  }

   /**
   * selectedfromDropDown
   * @param $event string
   * @returns void
   */
  selectedfromDropDown(value:any){
    debugger
    this.Date=value.name;
    this.getAllTenants()
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
    this.getAllTenants( );
  }
  decreamentPage(){
    this.pageNumber-=1;
    if(this.pageNumber<1){
      this.pageNumber=1;

    }
    this.getAllTenants( );

  }
  Tenants=[]
  numberTenants=0;
  totalRecords=0;
  Date:any="All"
   getAllTenants(  ) {
    this.Tenants=[]
    this.numberTenants=0
    this._adminservices.TenantList( this.pageNumber,this.pagesize,this.Date).subscribe((res:any) => {
      this.Tenants = res["data"];
      this.numberTenants = this.Tenants.length;
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
        this.getAllTenants()
      }
  DeleteUser(id :any){
    this._adminservices.DeleteTenant( id).subscribe((res:any) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'Deleted Successfuly'}` });

      this.getAllTenants( );

     }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${'error'}` });
    })

  }
  SuspendUser(id:any){
    this._adminservices.SuspendTenant( id).subscribe((res:any) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'Suspended Successfuly'}` });

      this.getAllTenants( );

     }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${'error'}` });
    })
  }
  detailperson(id: any): void {

    this.showEdit[id] == true ? this.showEdit[id] = false : this.showEdit[id] = true



   }

    showEdit: Array<boolean> = [];

}
