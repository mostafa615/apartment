import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApartmentService } from '../../../_services/apartments/apartment.service'
import { ActivatedRoute } from '@angular/router';
import { OnwerService } from 'src/app/_services/Onwers/onwer.service';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ApartmentDetailsComponent implements OnInit {

  /** showSide */
  showSide: string = '';
  /** value */
  value: number = 3;
  /** RentedSuccessfully */
  RentedSuccessfully: boolean = false;
  /** markAvailable */
  markAvailable: boolean = false;
  /** aprt_details */
  aprt_details: any;
  /** apt_UUID */
  apt_UUID: any;

  constructor(public _ApartmentService: ApartmentService, public _ActivatedRoute: ActivatedRoute,
    public _OnwerService :OnwerService,private sanitizer: DomSanitizer)
   {
    this.apt_UUID = _ActivatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getApartmentDetails();

    this.scrollTop();
  }

  /**
   * getApartmentDetails
   */
  trasponrts:any=[]
  roomsBedRoom:any=[]
  roomsLiving:any=[]
  roomsLivingTool:any=[]
  roomsBedRoomTool:any=[]
   OwnerDtail:any
  rent_Rules:any
  features:any
  facilities:any
  contract_Main:any
  bath_Room:any
  backup_Info:any
  kitchen_Tools:any=[]
  getApartmentDetails() {
    this._ApartmentService.getApartDetail(this.apt_UUID).subscribe((res) => {
      this._OnwerService.getOwner(res.general_Info["apt_Owner"]).subscribe((res) => {
        this.OwnerDtail=res ;
      })
      this.aprt_details = res.general_Info
      this.trasponrts=res.trasponrts
      this.rent_Rules=res.rent_Rules
      this.features=res.features
      this.facilities=res.facilities
      this.contract_Main=res.contract_Main
      this.bath_Room=res.bath_Room
      this.backup_Info=res.backup_Info
      this.center={
        lat: this.aprt_details["apt_Lat"],
        lng: this.aprt_details["apt_Long"]
      }
      this.kitchen_Tools=res.kitchen_Tools

       this.transform(res.general_Info["apt_VideoLink"])
      for(let i=0;i<res.rooms.length;i++){
        if(res.rooms[i].room_Type=="Bedroom"){
          this.roomsBedRoom.push(res.rooms[i])
         }else{
          this.roomsLiving.push(res.rooms[i])

        }
      }


    })
  }
  transform(videoURL: string) {
    let srclink = videoURL;

    if (srclink?.startsWith('https://www.youtube.com/watch?v=')) {

      let embedlink = srclink?.replace('watch?v=', 'embed/')
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedlink);

    } else if (srclink?.startsWith('https://youtu.be')) {

      let embedlink = srclink?.replace('https://youtu.be', 'https://www.youtube.com/embed/')
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedlink);

    }
    else {

      return this.sanitizer.bypassSecurityTrustResourceUrl(srclink);

    }
  }
  transform2(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
     }
  /**
   * addItem
   * @param value
   */
  addItem(value: any) {
    this.showSide = value;
  }

  /**
   * scrollTop
   * to make screen scroll to top
   * @return void
   */
  scrollTop(): void {
    window.scrollTo(0, 0);
  }

  display1: any;
  center : any;
  zoom = 10;
  moveMap(event: google.maps.MapMouseEvent) {
    debugger
      if (event.latLng != null) this.display1 = (event.latLng.toJSON());
      this.center.lat=this.display1.lat
      this.center.lng=this.display1.lng


  }
  imageSize:any
  viewImage(image:any){
    this.aprt_details["apt_ThumbImg"]=image;
  }
  viewimageinModel(image:any){
    this.display22="block"
    this.imageSize=image
  }
  display22="none"

  oncloseModal() {
this.display22="none"

  }
}