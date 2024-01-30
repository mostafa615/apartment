import { Component ,ViewEncapsulation,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@microsoft/signalr';
import { MessageService } from 'primeng/api';
import { ApartmentService } from 'src/app/_services/apartments/apartment.service';
import { environment } from 'src/environments/environment';

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
  DashboardRole:any
  is_Super:any
  constructor(private apartmentSer: ApartmentService,public router: Router,private messageService: MessageService,) {
    // this.checkRole();

  }
  ngOnInit(): void {
    const connection = new signalR.HubConnectionBuilder()

    .withUrl(environment.apiUrl + '/notify',{ withCredentials: false})
    .build();

  connection.start().then(function () {
  }).catch(function (err) {
    return console.error(err.toString());
  });

  connection.on("PublicNotification", (result: any) => {
    this.playAudio();
    this.messageService.add({ severity: 'info', detail: result.noti_Name });

  });
  }
  playAudio(){
    let audio = new Audio();
    audio.src = "http://dev.studiflats.com/assets/bell.wav";

    let audio2: HTMLAudioElement = new Audio("http://dev.studiflats.com/assets/bell.wav");
    audio2.play();


  }
  checkRole(){
    const data = localStorage.getItem("user");
     if (data !== null) {

      let parsedData = JSON.parse(data);
       this.is_Super=parsedData.is_Super
      if(parsedData.is_Super==false) {
  for(let i=0; i<parsedData.permissions.length;i++){
    if(parsedData.permissions[i].page_Name=="Dashboard"){
      this.DashboardRole=parsedData.permissions[i];
    }
  }
  if(this.DashboardRole.p_View==false &&this.is_Super==false) {
    this.gotopage( )
  }
}


    }
  }
  gotopage( ){
    let url: string = "unlegal";
      this.router.navigateByUrl(url);
  }
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
