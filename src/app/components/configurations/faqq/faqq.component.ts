import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AdminsService } from 'src/app/_services/admins/admins.service';

@Component({
  selector: 'app-faqq',
  templateUrl: './faqq.component.html',
  styleUrls: ['./faqq.component.css'],
})
export class FaqqComponent implements OnInit {
  showEdit: Array<boolean> = [];
  showEdit2: Array<boolean> = [];
  home: any;
  showSide: string = '';
  products!: Array<object>;
  selectedProducts: Array<object> = [];
  headerData: Array<any> = [];
  loading: boolean = true;
  search: boolean = false;
  listDropDown: Array<object> = [
    { name: 'All' },
    { name: 'Today' },
    { name: 'Last Week' },
    { name: 'This month' },
    { name: 'This year' },
  ];

  constructor(
    public _adminservices: AdminsService,
    public router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.home = { icon: 'pi pi-home', routerLink: ['/dashboard'] };
    this.getAllFAQ();
    //  this.GetAds();
  }
  selectppdd: any;
  /**
   * selectedfromDropDown
   * @param $event string
   * @returns void
   */
  selectedfromDropDown(value: any) {
    this.Date = value.name;
    // this.getAllpartners()
    console.log(value);
  }
  /**
   * addItem
   * @param value string
   * @returns void
   */
  addItem(value: string): void {
    this.showSide = value;
  }

  statusTenant: any = '';
  pageNumber = 1;
  pagesize = 10;
  pagesize2 = 10;

  totalofPages = 0;
  disablenext = false;
  disableperv = false;
  pageNumber2 = 1;
  FAQ = [];
  totalRecords = 0;
  tiggerPageChange(event: any) {
    const calcPageNumber = Math.floor(event.first / event.rows) + 1;
    this.pageNumber = calcPageNumber;
    console.log(calcPageNumber);
    this.getAllFAQ();
  }
  tiggerPageChange2(event: any) {
    const calcPageNumber = Math.floor(event.first / event.rows) + 1;
    this.pageNumber2 = calcPageNumber;
    console.log(calcPageNumber);
    this.GetAds();
  }
  numberFAQ = 0;
  Date: any = 'All';
  getAllFAQ() {
    this.FAQ = [];
    this.numberFAQ = 0;
    this._adminservices.GetFAQ().subscribe(
      (res: any) => {
        this.FAQ = res;
        this.totalRecords = this.FAQ.length;

        this.numberFAQ = this.FAQ.length;
        this.totalofPages = this.FAQ.length / 10;
      },
      (error) => {
        console.error('Error fetching owners:', error);
      }
    );
  }
  Ads: any = [];
  numberAds = 0;
  totalRecordsAds = 0;
  totalofPagesAds = 0;
  GetAds() {
    this.Ads = [];
    this.numberAds = 0;
    this._adminservices.GetAds().subscribe(
      (res: any) => {
        this.FAQ = res;
        this.totalRecordsAds = this.Ads.length;

        this.numberAds = this.Ads.length;
        this.totalofPagesAds = this.Ads.length / 10;
      },
      (error) => {
        console.error('Error fetching owners:', error);
      }
    );
  }
  // DeleteUser(id :any){
  //   this._adminservices.DeleteTenant( id).subscribe((res:any) => {
  //     this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'Deleted Successfuly'}` });

  //     this.getAllpartners( );

  //    }, (error) => {
  //     this.messageService.add({ severity: 'error', summary: 'Error', detail: `${'error'}` });
  //   })

  // }
  // SuspendUser(id:any){
  //   this._adminservices.SuspendTenant( id).subscribe((res:any) => {
  //     this.messageService.add({ severity: 'success', summary: 'Success', detail: `${'Suspended Successfuly'}` });

  //     this.getAllpartners( );

  //    }, (error) => {
  //     this.messageService.add({ severity: 'error', summary: 'Error', detail: `${'error'}` });
  //   })
  // }
  detailperson(event: any, id: any): void {
    this.showEdit = [];
    event.stopPropagation();

    this.showEdit[id] == true
      ? (this.showEdit[id] = false)
      : (this.showEdit[id] = true);
  }
  detailperson2(event: any, id: any): void {
    this.showEdit2 = [];
    event.stopPropagation();

    this.showEdit2[id] == true
      ? (this.showEdit2[id] = false)
      : (this.showEdit2[id] = true);
  }
  hidecard() {
    this.showEdit = [];
  }
  hidecard2() {
    this.showEdit2 = [];
  }

  deletepartner(id: any) {
    this._adminservices.DeletePartners(id).subscribe(
      (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `${' partner has been Successfully deleted into DB  '}`,
        });
      },
      (err: any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `${err.error.message[0]}`,
        });
      }
    );
  }
  DeleteAds(id: any) {
    this._adminservices.DeleteAds(id).subscribe(
      (res: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res['message'],
        });
        this.GetAds();
      },
      (err: any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `${err.error.message[0]}`,
        });
      }
    );
  }
  Question_title: any = '';
  question_answer: any = '';
  display1: any = 'none';
  openmodelcreatefaq() {
    this.display1 = 'block';
  }
  onCloseModal1() {
    this.display1 = 'none';
  }
  CreateFAQ() {
    this._adminservices
      .CreateFAQ(this.Question_title, this.question_answer)
      .subscribe(
        (res: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: res['message'],
          });
          this.display1 = 'none';
          this.Question_title = '';
          this.question_answer = '';
          this.getAllFAQ();

          this.Question_title = '';
          this.question_answer = '';
        },
        (err: any) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `${err.error.message[0]}`,
          });
        }
      );
  }
  Question_title_update: any = '';
  question_answer_update: any = '';
  display2: any = 'none';
  idfaq_updat: any;
  openmodel2updatefaq(item: any) {
    this.idfaq_updat = ' ';
    this.Question_title_update = '';
    this.question_answer_update = '';
    this.display2 = 'block';

    this.idfaq_updat = item.faq_ID;
    this.Question_title_update = item.faq_Quest;
    this.question_answer_update = item.faq_Ans;
  }
  onCloseModal2() {
    this.display2 = 'none';
  }
  UpdateFAQ() {
    this._adminservices
      .UpdateFAQ(
        this.idfaq_updat,
        this.Question_title_update,
        this.question_answer_update
      )
      .subscribe(
        (res: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: res['message'],
          });
          this.display1 = 'none';
          this.getAllFAQ();

          this.onCloseModal2();
        },
        (err: any) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `${err.error.message[0]}`,
          });
        }
      );
  }
  DeleteFAQ(id: any) {
    this._adminservices.DeleteFAQ(id).subscribe(
      (res: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res['message'],
        });
        this.getAllFAQ();
      },
      (err: any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `${err.error.message[0]}`,
        });
      }
    );
  }
  partnersRole: any;
  is_Super: any;
  checkRole() {
    const data = localStorage.getItem('user');
    if (data !== null) {
      let parsedData = JSON.parse(data);
      this.is_Super = parsedData.is_Super;
      if (parsedData.is_Super == false) {
        for (let i = 0; i < parsedData.permissions.length; i++) {
          if (parsedData.permissions[i].page_Name == 'partners') {
            this.partnersRole = parsedData.permissions[i];
          }
        }
        if (this.partnersRole.p_View == false && this.is_Super == false) {
          this.gotopage();
        }
      }
    }
  }
  gotopage() {
    let url: string = 'unlegal';
    this.router.navigateByUrl(url);
  }

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview = '';
  imageInfos?: any = [];
  ListFiles: any;
  urls: any = null;
  counter = 0;
  link_create_ads: any = '';
  removeItem() {
    this.ListFiles = null;
    this.urls = null;
  }
  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;

    let files = event.target.files;
    this.ListFiles = event.target.files;
    if (files) {
      for (let file of files) {
        this.ListFiles = file;
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
  readFile(file: File): Observable<string> {
    return new Observable((obs) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        obs.next(reader.result as string);
        obs.complete();
      };
      reader.readAsDataURL(file);
    });
  }
  display3: any = 'none';
  openmodel3adds() {
    this.link_create_ads = ' ';
    this.ListFiles = null;
    this.urls = null;

    this.display3 = 'block';
  }
  onCloseModal3() {
    this.display3 = 'none';
    this.link_create_ads = ' ';
    this.ListFiles = null;
    this.urls = null;
  }
  button_name: any = '';
  CreateAds() {
    const formData = new FormData();

    formData.append('Photo_Attach', this.ListFiles, this.ListFiles.name);

    this._adminservices
      .CreateAds(this.link_create_ads, this.button_name, formData)
      .subscribe(
        (res: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: res['message'],
          });
          this.display3 = 'none';
          this.link_create_ads = '';
          this.button_name = '';
          this.urls = null;
          this.ListFiles = null;
          this.GetAds();
        },
        (err: any) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `${err.error.message[0]}`,
          });
        }
      );
  }
  searchText: any = '';

  searchKey(data: string) {
    this.searchText = data;
    this.getAllFAQ();
  }
  searchTextChange: any;
  searchAction() {
    // this.searchTextChange.emit(this.searchText);
    this.search = false;
    this.getAllFAQ();
    this.searchText = '';
  }
}
