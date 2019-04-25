import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
@Directive({
  selector: '[appPasswordValidation][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PasswordValidationDirective, multi: true }
  ]
})
export class PasswordValidationDirective implements Validator {
  validate(c: AbstractControl): { [key: string]: any; } {
    if ((c && c.value && c.value.length < 8) || !this.validatePassword(c)) {
      return { 'passwordRequirementsNotMet': true };
    }
    return;
  }
  validatePassword(c: AbstractControl): boolean {
    let count = 0;
    if (new RegExp('[A-Z]').test(c.value)) { // Capital letter
      count++;
    }
    if (new RegExp('[a-z]').test(c.value)) { // small letters
      count++;
    }
    if (new RegExp('[0-9]').test(c.value)) { // number
      count++;
    }
    if (new RegExp('[!@#$%]').test(c.value)) { // special character
      count++;
    }

    return count >= 3;
  }
  registerOnValidatorChange?(fn: () => void): void {
  }

  constructor() { }

}
