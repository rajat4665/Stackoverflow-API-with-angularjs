import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../environments/environment';


const ip_used = environment.server_root;

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private stack_api_url = ip_used + 'v1/app1/stackApi/';
    private headers: any;
    private headersToken: any;

    constructor(private http: HttpClient, private router: Router) {
        this.headers = { headers: new HttpHeaders(
          { 'Content-Type': 'application/json'}) };
    }
    GetQuestions(user_request): Observable<any>{
      return this.http.post<any>(this.stack_api_url, user_request, this.headers).pipe();
    }
}
