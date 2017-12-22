import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../interfaces/user';
import { AppSettings } from '../config/app_settings';

@Injectable()
export class UsersService {
  private  headers:Headers;
  private  url:string;
  constructor(private http:Http) {
	  this.headers = new Headers();
	  this.url = AppSettings.API;
  }

  login(user:User):Observable<Response> {
    return this.http.post(this.url + '/user/login', { rfc: user.rfc, password:user.password}, this.headers).map((response:Response) => {
      return response.json();
    });
  }

  getFiles(id_user:string):Observable<Response>{
	  return this.http.get(this.url + '/user/nominas/' + id_user,this.headers).map((rs:Response) => {
		  return rs.json();
	  })
  }

}
