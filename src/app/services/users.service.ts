import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../interfaces/user'

@Injectable()
export class UsersService {

  constructor(private http:Http) { }

  login(user:User) {
    console.log(user)
    let  headers = new Headers();

    let url = 'http://localhost:1337/user/login';

    return this.http.post(url, { mail: user.mail, password:user.password}).map((response:Response) => {
      return response.json();
    });
  }

}
