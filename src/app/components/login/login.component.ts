import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { User }  from '../../interfaces/user';
import { AppItems }  from '../../utils/items';
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
  private showAlertDanger:boolean=false;
  private msjError:string;

  constructor(private router: Router, private usersService:UsersService) { }

  ngOnInit() {
	  localStorage.clear();
  }

  login(f:NgForm){


    console.log("inputEmail:", f.value);


	if (f.value.inputEmail && f.value.inputPassword) {
		this.user = new User();

	    this.user.mail = f.value.inputEmail;
	    this.user.password = f.value.inputPassword;

	    this.usersService.login(this.user).subscribe(rs => {
	      console.log(rs)

		  localStorage.setItem(AppItems.ITEM_USER, JSON.stringify(rs))

		  this.router.navigate(['/misnominas']);

	    }, err => {
	      if (err.status == 404) {
			  this.msjError = "Datos incorrectos..";
	  		this.showAlertDanger = true;
	          console.log('datos incorrectos');
	      }else {
			  this.msjError = "Hubo un problema con el sistema, por favor intenta mas tarde...";
		   this.showAlertDanger = true;
	        console.log('Hubo un problema con el sistema...');
	      }
	    });
	} else {
		this.msjError = "Debes llenar los campos.";
		this.showAlertDanger = true;

		console.log("Campos vacios")
	}

  }

}
