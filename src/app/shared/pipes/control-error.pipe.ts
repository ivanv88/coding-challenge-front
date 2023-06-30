import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'controlError',
  standalone: true,
  pure: true
})
export class ControlErrorPipe implements PipeTransform {

  transform(controlErrors: ValidationErrors, validationErrors: {[key: string]: string} | undefined): string {
    if (controlErrors && validationErrors) {
      return Object.keys(controlErrors).map(keyError => validationErrors[keyError]).join(', ');
    };
    return '';
  }

}
