import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'searchFile'
})
export class SerachFilePipe implements PipeTransform {

  transform(value: any, input: string): any {
    let _this = this;
    if (input) {
      console.log('INPUT:', input, ' VALUE:', value)
      input = input.toLowerCase();
      return value.filter(function(file: any) {
        // if()
        let date = new Date(file.fecha);
		console.log('value.fecha:', file.fecha);
		console.log(date)

        let month = _this.getMonth((date.getMonth() + 1));

		if (month.indexOf(input) > -1   || (date.getFullYear() + "").indexOf(input) > -1) {
			return file;
		}

      })
    }
    return value;
  }

  getMonth(month: number): string {
    let monthLetter = "";
    switch (month) {
      case 1:
        monthLetter = "enero";
        break;
      case 2:
        monthLetter = "febrero";
        break;
      case 3:
        monthLetter = "marzo";
        break;
      case 4:
        monthLetter = "abril";
        break;
      case 5:
        monthLetter = "mayo";
        break;
      case 6:
        monthLetter = "junio";
        break;
      case 7:
        monthLetter = "julio";
        break;
      case 8:
        monthLetter = "agosto";
        break;
      case 9:
        monthLetter = "septiembre";
        break;
      case 10:
        monthLetter = "octubre";
        break;
      case 11:
        monthLetter = "noviembre";
        break;
      case 12:
        monthLetter = "diciembre";
        break;
    }

    return monthLetter;
  }

}
