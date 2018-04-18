import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';


@Injectable()
export class UserService {

  constructor(
    private client: HttpClientService
  ) { }

  getUser(){
    return this.client.get("/api/user/products");
  }

}
