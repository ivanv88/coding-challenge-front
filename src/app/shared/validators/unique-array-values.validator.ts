import { AbstractControl, FormArray } from '@angular/forms';

export function uniqueArrayValuesValidator(control: AbstractControl): { [key: string]: any } | null {
  if (control instanceof FormArray) {
    const values = control.value;
    const duplicates = values.filter((value: string, index: number) => values.indexOf(value) !== index);

    if (duplicates.length > 0) {
      return { uniqueArrayValues: true };
    }
  }

  return null;
}