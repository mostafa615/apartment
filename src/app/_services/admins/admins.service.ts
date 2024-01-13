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
public GetINVDetails(id: any): Observable<any> {
  let url=environment.apiUrl + '/Accounting/GetINVDetails?Inv_ID='+id ;

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
UnSuspendTenant(id: any): Observable<any> {
  let url=environment.apiUrl + '/Users/UnSuspendTenant?User_ID='+id;

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
GetAllWorkers(PageNo:any, PageSize:any,search:any): Observable<any[]> {
  const url = environment.apiUrl+"/Workers/GetAllWorkers?PageNo="+PageNo+"&PageSize="+PageSize+"&search="+search;
  return this.http.get<any[]>(url, {  headers: this.headers });

}
InsertWorker(data: any ): Observable<any> {
  const url = environment.apiUrl+"/Workers/InsertWorker ";
  return this.http.post<any>(url,data, {  headers: this.headers });

}
UpdateWorker(data: any,id:any ): Observable<any> {
  const url = environment.apiUrl+"/Workers/UpdateWorker?id="+id;
  return this.http.put<any>(url,data, {  headers: this.headers });

}

ListJobs( ): Observable<any[]> {
  const url = environment.apiUrl+"/Workers/ListJobs";
  return this.http.get<any[]>(url, {  headers: this.headers });

}

GetWorkerByid(id: any ): Observable<any> {
  const url = environment.apiUrl+"/Workers/GetWorker?id="+id;
  return this.http.get<any[]>(url, {  headers: this.headers });

}
PostJob(data: any ): Observable<any> {
  const url = environment.apiUrl+"/Workers/PostJob?JobName="+data;
  return this.http.post<any>(url,data, {  headers: this.headers });

}
DeleteWorker(id: any ): Observable<any> {
  const url = environment.apiUrl+"/Workers/DeleteWorker?id="+id;
  return this.http.delete<any>(url, {  headers: this.headers });

}
ListAllIssues( PageNumber: number, PageSize: number,Date:any,search:any ): Observable<any[]> {
  const url = environment.apiUrl+"/Issues/ListAllIssues";
  const params = new HttpParams()
    .set('PageNo', PageNumber)
    .set('PageSize', PageSize)
    .set('Date', Date)
    .set('search', search)
  return this.http.get<any[]>(url, { headers: this.headers , params: params });

}
GetIssueDetails(id: any ): Observable<any> {
  const url = environment.apiUrl+"/Issues/IssueInDetails?Issue_ID="+id;
  return this.http.get<any>(url, {  headers: this.headers });

}
AssignWorker(Issue_ID: any,idworker:any ): Observable<any> {
  let body={
    Issue_ID:Issue_ID,idworker:idworker
  }
  const url = environment.apiUrl+"/Issues/AssignWorker?Issue_ID="+Issue_ID+"&Worker_ID="+idworker;
  return this.http.put<any>(url,body, {  headers: this.headers });

}
CancelIssue(Issue_ID: any ): Observable<any> {
  let body={
    Issue_ID:Issue_ID
  }
  const url = environment.apiUrl+"/Issues/CancelIssue?Issue_ID="+Issue_ID;
  return this.http.put<any>(url,body, {  headers: this.headers });

}
MarkAsSolved(Issue_ID: any,issue_CostBy:any, worker_Gain:any,issue_Cost:any,company_Gain:any,solve_Desc:any,item_Cost:any): Observable<any> {
   let body={
    issue_ID: Issue_ID,
    item_Cost:item_Cost,
    issue_CostBy: issue_CostBy,
    issue_Cost: issue_Cost,
    worker_Gain: worker_Gain,
    company_Gain: company_Gain,
    solve_Desc: solve_Desc
  }

  const url = environment.apiUrl+"/Issues/MarkAsSolved";
  return this.http.put<any>(url,body, {  headers: this.headers });

}
MarkasProgress(Issue_ID: any,Apointment: any ): Observable<any> {
  let body={
    Issue_ID:Issue_ID,
    Apointment:Apointment
  }
  const url = environment.apiUrl+"/Issues/MarkasProgress?Issue_ID="+Issue_ID+"&Apointment="+Apointment;
  return this.http.put<any>(url,body, {  headers: this.headers });

}

ListPartners( PageNumber: number, PageSize: number,Date:any ): Observable<any> {
  const url = environment.apiUrl+"/Partners/ListPartners";
  const params = new HttpParams()
    .set('PageNo', PageNumber)
    .set('PageSize', PageSize)
    .set('Date', Date)
  return this.http.get<any>(url, { headers: this.headers , params: params });

}

PostPartner(data: any ): Observable<any> {
  const url = environment.apiUrl+"/Partners/PostPartner";
  return this.http.post<any>(url,data, {  headers: this.headers });

}
UpdatePartner(data: any,id:any ): Observable<any> {
  const url = environment.apiUrl+"/Partners/UpdatePartner?id="+id;
  return this.http.put<any>(url,data, {  headers: this.headers });

}
DeletePartners(id: any ): Observable<any> {
  const url = environment.apiUrl+"/Partners/DeletePartners?id="+id;
  return this.http.delete<any>(url, {  headers: this.headers });

}
GetPartnerProfile(id: any ): Observable<any> {
  const url = environment.apiUrl+"/Partners/GetPartnerProfile?id="+id;
  return this.http.get<any>(url, {  headers: this.headers });

}
PartnerProfile(id: any ): Observable<any> {
  const url = environment.apiUrl+"/Partners/PartnerProfile?Partner_ID="+id;
  return this.http.get<any>(url, {  headers: this.headers });

}
GetCountries( ): Observable<any> {
  const url = environment.apiUrl+"/Partners/GetCountries";
  return this.http.get<any>(url, {  headers: this.headers });

}
GetAgencyCode( ) {

  var headers2 = new HttpHeaders({
     'responseType':'text',
    'Authorization': `Bearer ${this.token}`
  });
  const url = environment.apiUrl+"/Partners/GetAgencyCode";
  return this.http.get(url, {  headers: headers2 ,responseType: 'text'});

}
ListAllInvoices(type:any, PageNumber: number, PageSize: number  ): Observable<any[]> {
  const url = environment.apiUrl+"/Accounting/ListAllInvoices";
  const params = new HttpParams()
    .set('PageNum', PageNumber)
    .set('PageSize', PageSize)
    .set('Type', type)

  return this.http.get<any[]>(url, { headers: this.headers , params: params });

}
MarkPaid( id:any ): Observable<any> {
  const url = environment.apiUrl+"/Accounting/MarkPaid?Inv_ID="+id;
  return this.http.put<any>(url,id, {  headers: this.headers });

}
AllTickets(type:any, PageNumber: number, PageSize: number  ): Observable<any[]> {
  const url = environment.apiUrl+"/Tickets/AllTickets";
  const params = new HttpParams()
    .set('PageNum', PageNumber)
    .set('PageSize', PageSize)
    .set('Type', type)

  return this.http.get<any[]>(url, { headers: this.headers , params: params });

}
GetAllEmp(  PageNumber: number, PageSize: number  ): Observable<any[]> {
  const url = environment.apiUrl+"/Tickets/GetAllEmp";
  const params = new HttpParams()
    .set('PageNum', PageNumber)
    .set('PageSize', PageSize)

  return this.http.get<any[]>(url, { headers: this.headers , params: params });

}
AssignTicket(Ticket_ID: any,User_ID:any ): Observable<any> {
  let body={
    Ticket_ID:Ticket_ID,User_ID:User_ID
  }
  const url = environment.apiUrl+"/Tickets/AssignTicket?Ticket_ID="+Ticket_ID+"&User_ID="+User_ID;
  return this.http.put<any>(url,body, {  headers: this.headers });

}
}
