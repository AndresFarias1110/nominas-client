import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPassword]',
  providers: [
	  { provide: NG_VALIDATORS, multi: true, useValue: PasswordDirective.validatePassword }
  ]
})
export class PasswordDirective {

  constructor() { }

  static validatePassword(c: AbstractControl){

    if(c.value == null) return null;
    if(c.value.length == 0) return null;

    if (c.value.length < 8 || c.value.length > 20) {
        console.log("Not a valid password");
        return {password: true}
    }

    return null;
  }

}
