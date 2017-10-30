import { Directive, Input, ElementRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { compareEquals_Validator } from '../validators/CompareEqualsValidator';

@Directive({
  selector: '[compareEquals]',
  providers: [{provide: NG_VALIDATORS, useExisting: CompareEqualsDirective, multi: true}]
})
export class CompareEqualsDirective implements Validator {
  @Input() compareEquals: string;
  constructor() { }
  
  validate(control: AbstractControl): { [key: string]: any; } {
    let matchWithControl: AbstractControl;
    if (this.compareEquals) {
      matchWithControl = control.root.get(this.compareEquals);
    }
    return matchWithControl ? 
                  compareEquals_Validator(matchWithControl)(control)
                  : null;
  }
}
