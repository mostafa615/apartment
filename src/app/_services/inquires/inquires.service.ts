import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InquiresService {

  token:any=localStorage.getItem("tokenKey")
  constructor(private http: HttpClient) {
   }

   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });
  getAllInquires( status:any ,pageNumber:any,pageSize:any,Date:any): Observable<any[]> {


    const url = environment.apiUrl+"/Requests/GetAllRequests?status="+status+"&PageNo="+pageNumber+"&PageSize="+pageSize+"&Date="+Date;
    return this.http.get<any[]>(url, {  headers: this.headers });

  }
  GetRequestDetails( id:any ): Observable<any> {


    const url = environment.apiUrl+"/Requests/GetInquiryDetails?ID="+id;
    return this.http.get<any>(url, {  headers: this.headers });

  }

  AddWaitingList( id:any ): Observable<any> {


    const url = environment.apiUrl+"/Requests/AddWaitingList?Req_ID="+id;
    return this.http.put<any>(url,id, {  headers: this.headers });

  }
  CancelRequest( id:any ,reason:any): Observable<any> {


    const url = environment.apiUrl+"/Requests/CancelRequest?Req_ID="+id;
    return this.http.put<any>(url,reason, {  headers: this.headers });

  }
  NewPassportsNotValidation( id:any ,Valid:any,reason:any): Observable<any> {


    const url = environment.apiUrl+"/Requests/NewPassportsValidation?P_ID="+id+"&Valid="+Valid+"&Invalid_Reason="+reason;
    return this.http.put<any>(url,Valid, {  headers: this.headers });

  }
  NewPassportsValidation( id:any ,Valid:any): Observable<any> {


    const url = environment.apiUrl+"/Requests/NewPassportsValidation?P_ID="+id+"&Valid="+Valid;
    return this.http.put<any>(url,Valid, {  headers: this.headers });

  }
  ApproveRequest( id:any ): Observable<any> {


    const url = environment.apiUrl+"/Requests/ApproveRequest?Req_ID="+id;
    return this.http.put<any>(url,id, {  headers: this.headers });

  }
  CancelRequestw( id:any,reason:any ): Observable<any> {


    const url = environment.apiUrl+"/Requests/CancelRequest?Req_ID="+id+"&Reason="+reason;
    return this.http.put<any>(url,reason, {  headers: this.headers });

  }
}
