import { RolesService } from './../../_services/roles/roles.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {


  /** roles */
   roles!: Array<any>;
  /** fullRespone */
  fullRespone: any = [];
  /** selectedroles */
   selectedroles: Array<object> = [];
  /** headerData */
   headerData: Array<any> = [];
  /** pagePerson */
  // @Input() pagePerson: string = '';
  /** dataSelectionKey */
  // @Input() dataSelectionKey: string = '';
  /** onPageChange */
  // @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();
  /** searchTextChange */
searchTextChange: EventEmitter<string> = new EventEmitter<string>();
  /** searchTextChange */
  // @Output() deleteItemDetails: EventEmitter<string> = new EventEmitter<string>();
  /** showEdit */
  showEdit: Array<boolean> = [];
  /** search  */
  search: boolean = false;
  /** searchText  */
  searchText: string = '';
  /**dropdownOption */
  dropdownOption: Array<any> = [];
  listDropDown:Array<object>=[{name:'Today'},{name:'Last week'},{name:'This month'},{name:'This year'}]


  spinner: boolean = false;
numberRoles=0;
display1="none"
display2="none"

  constructor( public _rolesService:RolesService,    private messageService: MessageService,
    ) { }
  ngOnInit() {
    this.getAllRolles();
  }
  getAllRolles() {
    this.roles=[]
    this.numberRoles=0
    this._rolesService.getAllRolles().subscribe((res) => {
      this.roles = res;
      this.numberRoles = res.length;
      this.spinner = true;
    }, (error) => {
      this.spinner = true;
      console.error('Error fetching owners:', error);
    })
  }
  data:any
  createRole() {

    this._rolesService.createRole(this.data).subscribe((res) => {
      debugger
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'Images Upload Successfully'}` });
      debugger
      this.getAllRolles();
      this.data="";
      this.display2="none"
    }, (error) => {
      this.spinner = true;
      console.error('Error fetching owners:', error);
    })
  }
  DeleteRole(id:any) {
    debugger
    this._rolesService.deleteRole(id).subscribe((res) => {
      this.getAllRolles();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'Deleted Successfuly'}` });

    }, (error) => {
       console.error('Error fetching owners:', error);
    })
  }
  onCloseModal1(){
    this.display1="none"
  }
  onCloseModal2(){
    this.display2="none"
  }
  updataRoleName:any=""
  UpdateOpenRole(role:any){
    this.updataRoleName=role.name

    this.display1="block"

  }
  addOpenRole(){
    this.display2="block"
  }
  selectedfromDropDown(value:any){
    console.log(value)
  }
  showSide: string = '';

  addItem(value: string): void {
    this.showSide = value
  }

  initDropdown() {
    this.dropdownOption = [
      { label: 'Edit', value: 'edit' },
      { label: 'Delete', value: 'delete' },
    ]
  }

  onActionSelected(action: any) {
    console.log('Selected Action:', action.value);
    // Handle the selected action here
  }

  openDropdown(event: Event) {
    event.stopPropagation(); // Prevents the dropdown from closing when clicking the button
  }



  searchAction() {
    this.searchTextChange.emit(this.searchText);
    this.search = false;
  }



  detailperson(id: number): void {
    this.showEdit[id] == true ? this.showEdit[id] = false : this.showEdit[id] = true

  }



}
