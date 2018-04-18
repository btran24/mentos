import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpClientService {

  constructor(
    private http: HttpClient
  ) { }

  get(url) {
    return this.http.get(url);
  }

  post(url: string, body: any){
    return this.http.post(url, body);
  }
}
