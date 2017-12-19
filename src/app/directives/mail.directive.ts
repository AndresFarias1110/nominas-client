import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appMail]',
  providers: [
	  { provide: NG_VALIDATORS, multi: true, useValue: MailDirective.validateMail }
  ]
})

export class MailDirective {

  constructor() { }

  static validateMail(c: AbstractControl){
	  if(c.value == null) return null;
	  if(c.value.length == 0) return null;

	  let atpos = c.value.indexOf("@");
	  let dotpos = c.value.indexOf(".");

	  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=c.value.length) {
	      return { mail: true }
	  }

	  return null;
  }

}
