import { Component, OnInit } from '@angular/core';
import { Files }  from '../../interfaces/files';
import { User }  from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private user:User;
  private dataFiles:Array<Files> = [
    {
      "url": "",
      "file_pdf": "11111111_1.pdf",
      "file_xml": "11111111_1.xml",
      "date": "2017-12-29T00:00:00.000Z"
    },
    {
      "url": "",
      "file_pdf": "11111111_1.pdf",
      "file_xml": "11111111_1.xml",
      "date": "2017-12-29T00:00:00.000Z"
    },
    {
      "url": "",
      "file_pdf": "11111111_1.pdf",
      "file_xml": "11111111_1.xml",
      "date": "2017-12-29T00:00:00.000Z"
    },
    {
      "url": "",
      "file_pdf": "11111111_1.pdf",
      "file_xml": "11111111_1.xml",
      "date": "2017-12-29T00:00:00.000Z"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
