import { Component, OnInit } from '@angular/core';
import { Files } from '../../interfaces/files';
import { User } from '../../interfaces/user';

import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { AppItems } from '../../utils/items';

import { AppSettings } from '../../config/app_settings';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private user: User;

  private dataFiles: Array<Files> = [];
  private url_documents: string;
  private filterTerm: string;

  constructor(private usersService: UsersService) {


    this.url_documents = AppSettings.API + '/docs/';

    this.user = JSON.parse(localStorage.getItem(AppItems.ITEM_USER));

    this.usersService.getFiles(this.user.codigo).subscribe((rs: any) => {
      console.log(rs)
      this.dataFiles = rs;
    });
  }

  ngOnInit() {
  }

}
