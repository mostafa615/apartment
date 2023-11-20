import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  showSide: string = '';
  listDropDown:Array<object>=[{name:'Today'},{name:'Last week'},{name:'This month'},{name:'This year'}]
  headTitleRating:string='Apartment ratings'
  headTitleRequests:string='Apartments requests'
  headTitleTenantpaymenthistory:string='Tenant payment history'
  headTitleApartmentsizes:string='Apartment sizes'
  headTitleUserreportproblems:string='User report problems'
  headTitleApartmentdemands:string='Apartment demands'
  headTableListRating:Array<string>=['Name','Locations','Ratings']
  headTableListUserreportproblems:Array<string>=['User name','Apartments name','No. of problem reports']
  headTableListTenantpaymenthistory:Array<string>=['Name','Duration','Behaviour']
  headTableListApartmentdemands:Array<string>=['Name']
  headTableListRequests:Array<any>=['Name','Requests']

  listDropDownRating:Array<object> =[{name:'Highest'},{name:'Medium'},{name:'Lowest'},{name:'None'}]
  listDropDownTenantpaymenthistory:Array<object> =[{name:'Poor'},{name:'Good'},{name:'Average'},{name:'Bad'}]
  listDropDownRequests:Array<object> =[{name:'Highest'},{name:'Medium'},{name:'Lowest'},{name:'None'}]
  listDropDownApartmentsizes:Array<object> =[{name:'Popular'},{name:'Least popular'},{name:'Edit'},{name:'All'}]
  listDropDownApartmentdemands:Array<object> =[{name:'Highest'},{name:'Medium'},{name:'Lowest'},{name:'None'}]


  rowDatalistRating:Array<any>=[{img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'Alt-Moabit',rating:'4.5'},
  {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'Alt-Moabit',rating:'4.5'},
  {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'Alt-Moabit',rating:'4.5'}
]
  rowDatalistTenantpaymenthistory:Array<any>=[{img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'April 27 - May 27, 2023',rating:'Poor'},
  {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'April 27 - May 27, 2023',rating:'Poor'},
  {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'April 27 - May 27, 2023',rating:'Poor'}
  ]
  rowDatalistUserreportproblems:Array<any>=[
    {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'Alt-Moabit',rating:'4.5'},
    {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'Alt-Moabit',rating:'4.5'},
    {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'Alt-Moabit',rating:'4.5'}
  ]
  rowDatalistRequests:Array<any>=[{img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'23'},
  {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'23'},
  {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'23'},]
  
  rowDatalistApartmentdemands:Array<any>=[{img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit'},
  {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit'},
  {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit'},]

  rowdataListUserreportproblems:Array<any>=[
    {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',img1:'assets/images/Avatar.svg',name1:'Willow Creek Apartments',title:'Alt-Moabit',numberofproblem:'22'},
    {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',img1:'assets/images/Avatar.svg',name1:'Willow Creek Apartments',title:'Alt-Moabit',numberofproblem:'22'},
    {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',img1:'assets/images/Avatar.svg',name1:'Willow Creek Apartments',title:'Alt-Moabit',numberofproblem:'22'},
    
  ]

  

  addItem(value: any) {
    this.showSide = value
    console.log(value)
  }
  selectedfromDropDown(value:any){
    console.log(value)
  }
}
