import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApartmentService } from 'src/app/_services/apartments/apartment.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  showSide:string = '';
  value:any=''
  activePerson:boolean=true

  constructor(private apartmentSer: ApartmentService,public router: Router) {
    this.checkRole();
  }

  StatisticsRole:any
 is_Super:any
 checkRole(){
   const data = localStorage.getItem("user");
    if (data !== null) {

     let parsedData = JSON.parse(data);
      this.is_Super=parsedData.is_Super
     if(parsedData.is_Super==false) {
 for(let i=0; i<parsedData.permissions.length;i++){
   if(parsedData.permissions[i].page_Name=="Messages"){
     this.StatisticsRole=parsedData.permissions[i];
   }
 }
 if(this.StatisticsRole.p_Add==false &&this.is_Super==false) {
  let url: string = "unlegal";
  this.router.navigateByUrl(url); }
}


   }
 }
  addItem(value:any){
    this.showSide=value
  }
}
