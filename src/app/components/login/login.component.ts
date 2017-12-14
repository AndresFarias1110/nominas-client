import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { User }  from '../../interfaces/user';
import { UsersService }  from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:User;
  private inputEmail:string;
  private inputPassword:string;

  constructor(private router: Router, private usersService:UsersService) { }

  ngOnInit() {
  }

  login(){


    console.log("inputEmail:", this.inputEmail, " inputPassword:", this.inputPassword);

    this.user = new User();

    this.user.mail = this.inputEmail;
    this.user.password = this.inputPassword;

    this.usersService.login(this.user).subscribe(rs => {
      console.log(rs)
      this.router.navigate(['/misnominas']);

    }, err => {
      if (err.status == 404) {
          console.log('datos incorrectos')
      }else {
        console.log('Hubo un problema con el sistema...')
      }
    });


  }

}
