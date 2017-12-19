import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFile'
})
export class DateFilePipe implements PipeTransform {

	transform(value: string, args?: any): any {
      let date = new Date(value);

      if(value){

        let dat = date.getDate();
        let day = this.getDay((date.getMonth()+1));
        let hours = date.getHours();
        let minutes = date.getMinutes();

        let DATE = dat < 10 ? "0" + dat : dat;
        let HOURS = hours < 10 ? "0" + hours: hours;
        let MINUTES = minutes < 10 ? "0" + minutes: minutes;

        let datetime =  DATE + " de " + day + " del " + date.getFullYear();

        return datetime;
      }else{
        return "0000-00-00 00:00:00"
      }


    }

    getDay(month:number):string{
      let monthLetter="";
      switch(month){
        case 1:
          monthLetter = "Enero";
        break;
        case 2:
          monthLetter = "Febrero";
        break;
        case 3:
          monthLetter = "Marzo";
        break;
        case 4:
          monthLetter = "Abril";
        break;
        case 5:
          monthLetter = "Mayo";
        break;
        case 6:
          monthLetter = "Junio";
        break;
        case 7:
          monthLetter = "Julio";
        break;
        case 8:
          monthLetter = "Agosto";
        break;
        case 9:
          monthLetter = "Septiembre";
        break;
        case 10:
          monthLetter = "Octubre";
        break;
        case 11:
          monthLetter = "Noviembre";
        break;
        case 12:
          monthLetter = "Diciembre";
        break;
      }

      return monthLetter;
    }

}
