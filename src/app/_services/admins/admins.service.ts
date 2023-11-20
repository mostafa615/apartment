import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminsService{
  token:any=localStorage.getItem("tokenKey")
constructor(private http: HttpClient) {
 }

// apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVml2YS1EZXZAZ21haWwuY29tIiwianRpIjoiYWMwOWJkM2UtMzgxOS00NWVmLWE4ZDUtZWQ4ZTRkYWJhYzhhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI4ZDljOGM0OS0wNDZmLTQzNDEtOWQyYS0wMGNlZDkzYmZmYjUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBlciBBZG1pbiIsImV4cCI6MTY5ODY5OTkyNiwiaXNzIjoiaHR0cHM6Ly92aXZhcy1hcHQudGVjaCIsImF1ZCI6InZpdmFzLWFwdC50ZWNoIn0.76Ms_-De0QwDr0tS0fyw31VQSVsnEjP9C7wDAiHIr1A"


headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${this.token}`
});

getAllAdmins(  ): Observable<any[]> {
  debugger

  const url = `${environment.apiUrl}/Admin/GetAllAdmins`;
  return this.http.get<any[]>(url, {  headers: this.headers });

}
  UpdateADminStatus(status: any,id:any): Observable<any> {
    let body={
      status:status,
      id:id
    }
    let url=environment.apiUrl + '/Admin/UpdateUserStatus?User_ID='+id+'&status='+status
  return this.http.put( url,body, { headers: this.headers })
}

public createAdmin(data: any): Observable<any> {
  return this.http.post(`${environment.apiUrl + '/Admin/PostUser'}`, data, { headers: this.headers })
}
public GetProfile(id: any): Observable<any> {
  let url=environment.apiUrl + '/Admin/GetProfile?User_ID='+id ;

  return this.http.get(url, { headers: this.headers })
}
UpdateUserAccount(data: any,id:any): Observable<any> {
  let body=data
  let url=environment.apiUrl + '/Admin/UpdateUserAccount?User_ID='+id;
return this.http.put( url,body, { headers: this.headers })
}
public DeleteUser(id: any): Observable<any> {
  let url=environment.apiUrl + '/Admin/DeleteUser?User_ID='+id;

  return this.http.delete(url, { headers: this.headers })
}
TenantList( PageNumber: number, PageSize: number,Date:any,): Observable<any> {

  const url = `${environment.apiUrl}/Users/TenantList`;
  const params = new HttpParams()
    .set('PageNo', PageNumber)
    .set('PageSize', PageSize)
    .set('Date', Date)


  return this.http.get<any>(url, { headers: this.headers , params: params });

}
public TenantDetails(id: any): Observable<any> {
  let url=environment.apiUrl + '/Users/TenantDetails?User_ID='+id ;

  return this.http.get(url, { headers: this.headers })
}
 DeleteTenant(id: any): Observable<any> {
  let url=environment.apiUrl + '/Users/DeleteTenant?User_ID='+id;

  return this.http.put(url,id, { headers: this.headers })
}
 SuspendTenant(id: any): Observable<any> {
  let url=environment.apiUrl + '/Users/SuspendTenant?User_ID='+id;

  return this.http.put(url,id, { headers: this.headers })
}
UpdateTenantInfo( User_ID: any, FName: any,LName:any,PassportID:any,About:any,image:any): Observable<any> {

  const url = `${environment.apiUrl}/Users/UpdateTenantInfo`;
  const params = new HttpParams()
    .set('User_ID', User_ID)
    .set('FName', FName)
    .set('LName', LName)
    .set('PassportID',PassportID)
    .set('About',About)
   const headers2 = new HttpHeaders({
       'Authorization': `Bearer ${this.token}`
    });


  return this.http.post<any>(url,image, { headers:  headers2 , params: params });

}
}
