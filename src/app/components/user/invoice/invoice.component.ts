import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { MessageService } from 'primeng/api';
import { UploadFileService } from 'src/app/_services/UploadFile/upload-file.service';
import { AdminsService } from 'src/app/_services/admins/admins.service';
import { InquiresService } from 'src/app/_services/inquires/inquires.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  showSide: string = '';
  value: string = '';
  cities: Array<object> = [];
  selectedCity: Object = {};
  available: boolean = true;
  link: Array<boolean> = [true];

   titlePage: string = '';
   changeImageUrl:any;
  imageUrl: string = '';
  loadingButton: boolean = false;
   ngOnInit() {
     this.GetINVDetails(  );
    this. checkRole();
  }

   param:any
  constructor(private uploadFile: UploadFileService, public _adminservices:AdminsService ,private viewportScroller: ViewportScroller,private _inquiresService:InquiresService,private _ActivatedRoute:ActivatedRoute,private messageService: MessageService,public router: Router) {
    this.param = _ActivatedRoute.snapshot.paramMap.get('id');

  }
  TantsRole:any
  is_Super:any
  checkRole(){
    const data = localStorage.getItem("user");
     if (data !== null) {

      let parsedData = JSON.parse(data);
       this.is_Super=parsedData.is_Super
      if(parsedData.is_Super==false) {
  for(let i=0; i<parsedData.permissions.length;i++){
    if(parsedData.permissions[i].page_Name=="Users"){
      this.TantsRole=parsedData.permissions[i];
    }
  }
  if(this.TantsRole.p_Update==false &&this.is_Super==false) {
    this.gotopage( )
  }
}


    }
  }
  gotopage( ){
    let url: string = "unlegal";
      this.router.navigateByUrl(url);
  }
  gotopage2( ){
    let url: string = "users";
      this.router.navigateByUrl(url);
  }
  /**
   * initCities
   * @return void
   */

  _details:any={}
  GetINVDetails(  ) {
    this._adminservices.GetINVDetails(this.param).subscribe((res) => {
    this._details = res ;

    }, (error) => {
     console.error('Error fetching owners:', error);
  })
}

  /**
   * addItem
   * @param value
   */
  addItem(value: string) {
    this.showSide = value
  }
  OnPrint() {

    window.print();
  }


  exportAsPDF(divId:any)
  {

      let data = document.getElementById(divId)!;
      html2canvas(data,{useCORS: true}).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/jpeg')  // 'image/jpeg' for lower quality output.
      let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
      pdf.save('Filename.pdf');
    });
  }
}
