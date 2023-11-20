import { Component ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  showSide: string = '';
  apartmentsRentedDial: number = 15;
  headTableList:Array<string>=['Apartment name','Locations','Admin','Amount','Status']
  rowDatalist:Array<any>=[{img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'Alt-Moabit',admin:'Ben Ten',amount:'@€25,00/Mo',status:'Rented'},
  {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'Alt-Moabit',admin:'Ben Ten',amount:'@€25,00/Mo',status:'Rented'},
  {img:'assets/images/Avatar.svg',name:'Willow Creek Apartments',title:'Alt-Moabit',location:'Alt-Moabit',admin:'Ben Ten',amount:'@€25,00/Mo',status:'Rented'}
]
  RecentActivitiesList:Array<any>=[
    {img:'assets/images/Avatar.svg',status:'Paid rent',name:'James Tobias',message:'Rental has been booked'},
    {img:'assets/images/Avatar.svg',status:'Paid rent',name:'James Tobias',message:'Rental has been booked'},
    {img:'assets/images/Avatar.svg',status:'Paid rent',name:'James Tobias',message:'Rental has been booked'}
  ]
  listDropDown:Array<object>=[{name:'Today'},{name:'Last week'},{name:'This month'},{name:'This year'}]

  addItem(value: any) {
    this.showSide = value
    console.log(value)
  }
  selectedfromDropDownPopularApartments(value:any){
    console.log(value)
  }
  selectedfromDropDownApartmentsRentedFree(value:any){
    console.log(value)
  }
  selectedfromDropDown(value:any){
    console.log(value)
  }
  selectedfromDropDownPopularApartmentstable(value:any){
    console.log(value)
  }
}
