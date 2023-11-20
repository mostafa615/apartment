import { Component, ViewEncapsulation } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InquiresService } from 'src/app/_services/inquires/inquires.service';
import { AdminsService } from 'src/app/_services/admins/admins.service';
import { UploadFileService } from 'src/app/_services/UploadFile/upload-file.service';
@Component({
  selector: 'app-edite-user-details',
  templateUrl: './edite-user-details.component.html',
  styleUrls: ['./edite-user-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditeUserDetailsComponent {
  showSide: string = '';
  value: string = '';
  cities: Array<object> = [];
  selectedCity: Object = {};
  available: boolean = true;
  link: Array<boolean> = [true];
  listAnchors: any = [
    { id: 'Generalinfo', link: 'General info' },
    { id: 'OtherDetails', link: 'Other Details' },
    { id: 'Documentdetails', link: 'Document details' },
    { id: 'Rentalhistory', link: 'Rental history' },
    { id: 'userinformation', link: 'user information' },
  ]
   titlePage: string = '';
   changeImageUrl:any;
  imageUrl: string = '';
  loadingButton: boolean = false;
  products:any=[{ Invoice:"invoice435",date:"April 27 - May 27, 2023",Amount:"$35,00",Behaviour:true},
  { Invoice:"invoice435",date:"April 27 - May 27, 2023",Amount:"$35,00",Behaviour:true},
  { Invoice:"invoice435",date:"April 27 - May 27, 2023",Amount:"$35,00",Behaviour:true},{ Invoice:"invoice435",date:"April 27 - May 27, 2023",Amount:"$35,00",Behaviour:true}]
  ngOnInit() {
    this.initCities();
    this.GetRequestDetails(  );
  }

   param:any
  constructor(private uploadFile: UploadFileService, public _adminservices:AdminsService ,private viewportScroller: ViewportScroller,private _inquiresService:InquiresService,private _ActivatedRoute:ActivatedRoute,private messageService: MessageService,) {
    this.param = _ActivatedRoute.snapshot.paramMap.get('id');

  }
  /**
   * initCities
   * @return void
   */
  initCities(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
  Tenant_details:any={}
  GetRequestDetails(  ) {
    this._adminservices.TenantDetails(this.param).subscribe((res) => {
    this.Tenant_details = res ;
    this.FName=res["tenant_FName"]
    this.LName=res["tenant_LName"]
    this.PassportID=res["tenant_PassportID"]
    this.About=res["tenant_About"]

    }, (error) => {
     console.error('Error fetching owners:', error);
  })
}
User_ID: any;
 FName: any;
 LName:any;
 PassportID:any;
 About:any;
 image:any
UpdateTenantInfo() {
  this._adminservices.UpdateTenantInfo(this.param,this.FName,this.LName,this.PassportID,this.About, this.formData2).subscribe((res) => {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'User    Insered or Updated Successfuly'}` });

  }, (error) => {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: `${'error'}` });
  })
}
  /**
   * addItem
   * @param value
   */
  addItem(value: string) {
    this.showSide = value
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  changeAnchor(index: number): void {
    this.link = this.link.map(el => el == true ? false : false)
    this.link[index] = true
  }
  formData2 = new FormData();
  uploadPic(event: any) {
    debugger
    this.loadingButton = true;
    if (event != 'delete') {
      const selectedFile = event.target.files[0];
      const formData = new FormData();
      formData.append('fileData', selectedFile, selectedFile.name);
      this.formData2.append('User_Img', selectedFile);
      console.log(formData);

      this.uploadFile.uploadSingleFile(formData).subscribe((img: any) => {
        this.imageUrl = img[0].file_Path;
        this.changeImageUrl.emit(img[0].file_Path);
        this.loadingButton = false;
      })
    } else if (event == 'delete') {
      this.imageUrl = '';
      this.changeImageUrl.emit(this.defaultImageUrl());
      this.loadingButton = false;
    }
  }

  /**
   * defaultImageUrl
   * @returns string
   */
  defaultImageUrl(): string {
    return 'https://t4.ftcdn.net/jpg/05/50/60/49/360_F_550604961_BZT4vo52ysIku2cQ3Zn8sAQg1rXHBKv0.jpg'
  }
}
