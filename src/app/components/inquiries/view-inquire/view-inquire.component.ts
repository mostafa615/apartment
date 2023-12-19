import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { InquiresService } from 'src/app/_services/inquires/inquires.service';

@Component({
  selector: 'app-view-inquire',
  templateUrl: './view-inquire.component.html',
  styleUrls: ['./view-inquire.component.css']
})
export class ViewInquireComponent implements OnInit {
  param:any
  constructor(private _inquiresService:InquiresService,private _ActivatedRoute:ActivatedRoute,private messageService: MessageService,public router: Router) {
    this.param = _ActivatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.GetRequestDetails(  );
    this.checkRole();
  }
  inquiresRole:any
is_Super:any
checkRole(){
  const data = localStorage.getItem("user");
   if (data !== null) {

    let parsedData = JSON.parse(data);
     this.is_Super=parsedData.is_Super
    if(parsedData.is_Super==false) {
for(let i=0; i<parsedData.permissions.length;i++){
  if(parsedData.permissions[i].page_Name=="Inquiries"){
    this.inquiresRole=parsedData.permissions[i];
  }
}
if(this.inquiresRole.p_View==false &&this.is_Super==false) {
  this.gotopage( )
}
}


  }
}
gotopage( ){
  let url: string = "unlegal";
    this.router.navigateByUrl(url);
}
  inquire_details:any
  showSide: string = '';
  value:any;
  contract_Main:any
  Reason:any=""
  Reason2:any=""

  display1="none"
  addItem(value: string): void {
    this.showSide = value
  }
  GetRequestDetails(  ) {
      this._inquiresService.GetRequestDetails(this.param).subscribe((res) => {
      this.inquire_details = res[0];
      }, (error) => {
       console.error('Error fetching owners:', error);
    })
  }
  UploadReqContract() {
    this._inquiresService.UploadReqContract(this.param,this.convertFileToFormData(this.ListFiles)).subscribe((res) => {
       this.messageService.add({   severity: 'success', summary: 'Success', detail:res["message"] });
       this.display1="none";


     }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "error" });
    })
}
selectedContractImg:any
  OwnerDtail:any
  onCloseModal1(){
    this.display1="none";

  }
  onCloseModal2(){
    this.display2="none";

  }
  display2="none";
  itemPass:any
  onOpenModal1(item:any){
    this.Reason=""
    this.itemPass=item;
    this.display1="block";

  }
  onOpenModal2(){
    this.Reason2=""
    this.display2="block";

  }
  NewPassportsNotValidation() {
    this._inquiresService.NewPassportsNotValidation(this.itemPass.uuid,false,this.Reason).subscribe((res) => {
       this.messageService.add({   severity: 'success', summary: 'Success', detail: 'Invalid Successfuly' });
       this.display1="none";


     }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "error" });
    })
}
  NewPassportsValidation(item:any) {
    this._inquiresService.NewPassportsValidation(item.uuid,true).subscribe((res) => {
       this.messageService.add({   severity: 'success', summary: 'Success', detail: 'Validation Successfuly' });

     }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "error" });
    })
}
  CancelRequest(  ) {
    this._inquiresService.CancelRequestw(this.param,this.Reason2).subscribe((res) => {
       this.messageService.add({   severity: 'success', summary: 'Success', detail: 'Cancel Request Successfuly' });
       this.display2="none";


     }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "error" });
    })
}
isvisable=false
ApproveRequest(  ) {
  this._inquiresService.ApproveRequest(this.param).subscribe((res) => {
    this.messageService.add({   severity: 'success', summary: 'Success', detail: 'Approve Request Successfuly' });
      this.isvisable=true;
   }, (error) => {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: `error` });
  })
}
selectedFiles?: FileList;
currentFile?: File ;
imageList:any=[]
progress = 0;
message = '';
preview = '';
imageInfos?:   any =[];
chooseFile(files:any) {
   ;
  this.imageList.push(files[0])

}
urls = new Array<string>();
counter=0;
selectFile(event: any): void {
  this.ListFiles=null
  this.message = '';
  this.preview = '';
  this.progress = 0;
  this.selectedFiles = event.target.files;

   let files = event.target.files;

  if (files) {
    this.selectedContractImg = files  ;

    for (let file of files) {

      this.ListFiles=file;
       let reader = new FileReader();
      reader.onload = (e: any) => {

         this.urls.push(e.target.result);
      }
      reader.readAsDataURL(file);
    }
  }
  this.UploadReqContract();
}
convertFileToFormData(files: any) {
  const formData = new FormData();


    formData.append('Contract', files, files.name);


  return formData;
}

  readFile(file: File): Observable<string> {

  return new Observable(obs => {
    const reader = new FileReader();
    reader.onload = (e: any) => {

      obs.next(reader.result as string);
      obs.complete();

    }
    reader.readAsDataURL(file);
  });
}

ListFiles:any=[]
}
