import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UploadFileService } from 'src/app/_services/UploadFile/upload-file.service';
import { AdminsService } from 'src/app/_services/admins/admins.service';
import { RolesService } from 'src/app/_services/roles/roles.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  createAdmin!: FormGroup;

  constructor(  private viewportScroller: ViewportScroller,
    private uploadfile: UploadFileService,
    private messageService: MessageService,
    public router: Router,
    public _rolesService:RolesService, public _adminservices:AdminsService,
    public _ActivatedRoute: ActivatedRoute,private uploadFile: UploadFileService) {
    this.listAnchors = [
      { id: 'Generalinfo', link: 'General info' },
      { id: 'OtherDetails', link: 'Other Details' },
      { id: 'passwords', link: 'password' }
    ]
   }

  ngOnInit() {
    this.bindCreateAdmin()
    this.getAllRolles()
    this.checkRole();
  }
  gotopage2( ){
    let url: string = "admins";
      this.router.navigateByUrl(url);
  }
  AdminRole:any
  is_Super:any
  checkRole(){
    const data = localStorage.getItem("user");
     if (data !== null) {

      let parsedData = JSON.parse(data);
       this.is_Super=parsedData.is_Super
      if(parsedData.is_Super==false) {
  for(let i=0; i<parsedData.permissions.length;i++){
    if(parsedData.permissions[i].page_Name=="Settings"){
      this.AdminRole=parsedData.permissions[i];
    }
  }
  if(this.AdminRole.p_Add==false &&this.is_Super==false) {
    this.gotopage( )
  }
  }


    }
  }
  gotopage( ){
    let url: string = "unlegal";
      this.router.navigateByUrl(url);
  }
  listAnchors: any = [];

  showSide: string = '';

  addItem(value: string): void {
    this.showSide = value
  }

  roles:any=[]
  getAllRolles() {
    this.roles=[]
     this._rolesService.getAllRolles().subscribe((res) => {
      this.roles = res;
     }, (error) => {
       console.error('Error fetching owners:', error);
    })
  }
  bindCreateAdmin(): void {
    this.createAdmin = new FormGroup({
      'full_Name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'phone': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'confirm_Password': new FormControl('', [Validators.required]),
       'user_Img': new FormControl('', [Validators.required]),
      'role': new FormControl('', [Validators.required]),
      'wA_Number': new FormControl('', [Validators.required]),
      'about': new FormControl('', [Validators.required]),

    });
  }
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  link: Array<boolean> = [true];

  changeAnchor(index: number): void {
    this.link = this.link.map(el => el == true ? false : false)
    this.link[index] = true
  }
 titlePage: string = '';
  // @Output() changeImageUrl: EventEmitter<string> = new EventEmitter<string>();
  imageUrl: string = '';
  loadingButton: boolean = false;
  uploadPic(event: any) {

    this.loadingButton = true;
    if (event != 'delete') {
      const selectedFile = event.target.files[0];
      const formData = new FormData();
      formData.append('fileData', selectedFile);
      console.log(formData);

      this.uploadFile.uploadSingleFile(formData).subscribe((img: any) => {
        this.imageUrl = img[0].file_Path;
        // this.changeImageUrl.emit(img[0].file_Path);
        this.loadingButton = false;
      })
    } else if (event == 'delete') {
      this.imageUrl = '';
      // this.changeImageUrl.emit(this.defaultImageUrl());
      this.loadingButton = false;
    }
  }
  CreateAdmin(data: any) {
    if(    this.createAdmin.get('password')?.value == this.createAdmin.get('confirm_Password')?.value   ){

      this.showEror="false"
      data.value.wA_Number = String(data.value.wA_Number);
      data.value.phone = String(data.value.phone);
      data.value.user_Img=this.imageUrl ;
      this.loadingButton = true;
         this._adminservices.createAdmin({
          ...data.value
        }).subscribe((res) => {
          this.loadingButton = false;
          this.messageService.add({ severity: 'success', summary: 'success', detail: ` Admin Added` });

          this.router.navigate(['/admins']);
        }, (err) => {
          this.loadingButton = false;
          console.error('Error fetching CreateOwner:', err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: `${ err.error.message[0]}` });
        })

    }
    else{
      this.showEror="true"
    }
    /** conver number to string while backend fix this */



  }
  /**
   * defaultImageUrl
   * @returns string
   */
  defaultImageUrl(): string {
    return 'https://t4.ftcdn.net/jpg/05/50/60/49/360_F_550604961_BZT4vo52ysIku2cQ3Zn8sAQg1rXHBKv0.jpg'
  }
  showEror="false"
  checkConfirm(){

    if(    this.createAdmin.get('password')?.value == this.createAdmin.get('confirm_Password')?.value   ){

      this.showEror="false"
    }
    else{
      this.showEror="true"
    }
  }
}
