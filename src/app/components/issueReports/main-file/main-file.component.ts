import { Component } from '@angular/core';

@Component({
  selector: 'app-main-file',
  templateUrl: './main-file.component.html',
  styleUrls: ['./main-file.component.scss']
})
export class MainFileComponent {
  showSide: string = '';
  products!: Array<object>;
  selectedProducts: Array<object> = [];
  headerData: Array<any> = [];
  loading: boolean = true;
  search:boolean=false
  listDropDown:Array<object>=[{name:'Today'},{name:'Last week'},{name:'This month'},{name:'This year'}]

  constructor() { }

  ngOnInit() {
    this.products = this.initFakeDate();
    this.headerData = this.initHeadersData();
  }
 
  /**
   * addItem
   * @param value string
   * @returns void
   */
  addItem(value: string): void {
    this.showSide = value
  }

  /**
   * addItem
   * @param value string
   * @returns void
   */
  initHeadersData(): Array<object> {
    return [
      { Name: '', SortableColumn: '', tableHeaderCheckbox: true, sortIcon: false },
      { Name: 'Report ID', SortableColumn: 'Report_ID', tableHeaderCheckbox: false, sortIcon: false},
      { Name: 'Requested by', SortableColumn: 'Requested_by', tableHeaderCheckbox: false,sortIcon: false },
      { Name: 'Table header', SortableColumn: 'Table_header', tableHeaderCheckbox: false ,sortIcon: false},
      { Name: 'Date Reported', SortableColumn: 'Date_Reported', tableHeaderCheckbox: false, sortIcon: true },
      { Name: 'Descriptions', SortableColumn: 'Descriptions', tableHeaderCheckbox: false, sortIcon: false },
      { Name: 'Status', SortableColumn: 'Status', tableHeaderCheckbox: false, sortIcon: true },
      { Name: 'Actions', SortableColumn: 'Actions', tableHeaderCheckbox: false, sortIcon: false },
      { Name: '', SortableColumn: '', tableHeaderCheckbox: false,sortIcon: false}
     
    ]
  }

  /**
   * selectedfromDropDown
   * @param $event string
   * @returns void
   */
  selectedfromDropDown(value:any){
    console.log(value)
  }

  /**
   * initFakeDate
   * @returns array of products
   */
  initFakeDate(): Array<object> {
    return [
      {
        id:1,
        Report_ID:'0012345',
        Requested_by: 'Bamboo Watch',
        Table_header:"assets/images/person.svg",
        Date_Reported: 'sara',
        Descriptions: 'Accessories',
        Status:'Scheduled',
   
     
      },
      {
        id:2,
        Report_ID:'0012345',
        Requested_by: 'Bamboo Watch',
        Table_header:"assets/images/person.svg",
        Date_Reported: 'sara',
        Descriptions: 'Accessories',
        Status:'In Progress',

     
      },
      {
        id:3,
        Report_ID:'0012345',
        Requested_by: 'Bamboo Watch',
        Table_header:"assets/images/person.svg",
        Date_Reported: 'sara',
        Descriptions: 'Accessories',
        Status:'Completed',

     
      },
      {
        id:4,
        Report_ID:'0012345',
        Requested_by: 'Bamboo Watch',
        Table_header:"assets/images/person.svg",
        Date_Reported: 'sara',
        Descriptions: 'Accessories',
        Status:'Scheduled',

     
      },
      {
        id:5,
        Report_ID:'0012345',
        Requested_by: 'Bamboo Watch',
        Table_header:"assets/images/person.svg",
        Date_Reported: 'sara',
        Descriptions: 'Accessories',
        Status:'Completed',

     
      },
     
     
    ];
  }
 
}
