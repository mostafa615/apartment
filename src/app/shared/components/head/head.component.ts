import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/_services/UploadFile/upload-file.service';
import { AdminsService } from 'src/app/_services/admins/admins.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent {
  value: string = '';
  show: string = 'false';
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() titleModule = '';

  constructor(
    private uploadFile: UploadFileService,
    private http: HttpClient,
    private _adminservices: AdminsService
  ) {}
  ngOnInit() {
    this.PushNotification();
    this.PushNotificationCount();
  }
  showSidebar(): void {
    this.show == 'false' ? (this.show = 'true') : (this.show = 'false');
    this.newItemEvent.emit(this.show);
  }

  detailperson(event: any, id: any): void {
    this.showEdit = [];
    event.stopPropagation();

    this.showEdit[id] == true
      ? (this.showEdit[id] = false)
      : (this.showEdit[id] = true);
  }

  showEdit: Array<boolean> = [];
  hidecard(id: any) {
    this.showEdit = [];
  }
  display1 = 'none';
  shownot() {
    //this. PushNotification()
    this.display1 = 'block';
  }
  //    onLikeClicked(event:any){
  //     // event.stopPropagation();
  //  this.display1="none"

  //    }
  NotifiList: any = [];
  NotiCount: any;
  NotiCount10: any;

  PushNotification() {
    this._adminservices.PushNotification().subscribe(
      (res: any) => {
        debugger;
        this.NotifiList = res;
      },
      (error) => {
        // this.messageService.add({   severity: 'error', summary: 'error', detail: 'error' });
      }
    );
  }
  PushNotificationCount() {
    this._adminservices.PushNotificationCount().subscribe(
      (res: any) => {
        debugger;
        this.NotiCount = res;
        if (this.NotiCount.count > 10) {
          this.NotiCount10 = 10 + '+';
        } else {
          this.NotiCount10 = this.NotiCount.count;
        }
      },
      (error) => {
        // this.messageService.add({   severity: 'error', summary: 'error', detail: 'error' });
      }
    );
  }
  closenotifaction() {
    this.display1 = 'none';
  }
  ClickedOut(event: any) {
    // debugger
    // if(event.target.className != "cfresda") {
    this.display1 = 'none';
    // }
  }
}
