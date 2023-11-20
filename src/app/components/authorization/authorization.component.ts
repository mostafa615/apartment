import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UploadFileService } from 'src/app/_services/UploadFile/upload-file.service';
import { AdminsService } from 'src/app/_services/admins/admins.service';
import { RolesService } from 'src/app/_services/roles/roles.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  param:any
  constructor(
    private viewportScroller: ViewportScroller,
    private uploadfile: UploadFileService,
    private messageService: MessageService,
    public router: Router,
    public _rolesService:RolesService, public _adminservices:AdminsService,
    public _ActivatedRoute: ActivatedRoute,private uploadFile: UploadFileService)
    {
        this.param = _ActivatedRoute.snapshot.paramMap.get('id');
}

  ngOnInit() {
    this.GetRolePermission();
  }
  showSide: string = '';

  addItem(value: string): void {
    this.showSide = value
  }
  Permission:any=[]
  GetRolePermission() {
    this.Permission=[]
     this._rolesService.GetRolePermission(this.param).subscribe((res) => {
      this.Permission = res;
     }, (error) => {
       console.error('Error fetching owners:', error);
    })
  }

  UpdateRolePerm() {
      this._rolesService.UpdateRolePerm(this.Permission).subscribe((res) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'  Successfully'}` });

      }, (error) => {
       console.error('Error fetching owners:', error);
       this.messageService.add({ severity: 'success', summary: 'Success', detail: `${error}` });

    })
  }
}
