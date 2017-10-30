import { ValidatorFn, AbstractControl } from "@angular/forms";

export function compareEquals_Validator(compareWithRef: AbstractControl): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        let isValueSame = control.value == compareWithRef.value;
        return isValueSame ? null : {compareEquals: 'Are not equal'};
    }
}