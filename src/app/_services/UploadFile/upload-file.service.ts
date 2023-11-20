import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  constructor(private http: HttpClient) { }
  token:any=localStorage.getItem("tokenKey")

  // apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVml2YS1EZXZAZ21haWwuY29tIiwianRpIjoiYWMwOWJkM2UtMzgxOS00NWVmLWE4ZDUtZWQ4ZTRkYWJhYzhhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI4ZDljOGM0OS0wNDZmLTQzNDEtOWQyYS0wMGNlZDkzYmZmYjUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBlciBBZG1pbiIsImV4cCI6MTY5ODY5OTkyNiwiaXNzIjoiaHR0cHM6Ly92aXZhcy1hcHQudGVjaCIsImF1ZCI6InZpdmFzLWFwdC50ZWNoIn0.76Ms_-De0QwDr0tS0fyw31VQSVsnEjP9C7wDAiHIr1A"
  headers = new HttpHeaders({

    'Authorization': `Bearer ${this.token}`
  });
  // application/json
// multipart/form-data

  uploadSingleFile(file: any): Observable<any[]> {
    // UploadSingleFile
    const url = `${environment.apiUrl}/Basics/UploadSingleFile`;
    debugger
    // const url = "https://d4a7-196-221-165-195.ngrok-free.app/api/Basics/UploadSingleFile";
     return this.http.post<any>(url, file, { headers: this.headers });
  }

  uploadMultiFile(file: any): Observable<any[]> {


    const httpOptions = {headers: this.headers};

    const url = `${environment.apiUrl}/Basics/UploadMulti`;
    // const url = "https://d4a7-196-221-165-195.ngrok-free.app/api/Basics/UploadMulti";

    return this.http.post<any>(url, file,httpOptions);

  }



}

