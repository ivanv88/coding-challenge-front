import { FormArray } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class ChipsInputErrorStateMatcher implements ErrorStateMatcher {
  constructor(private parentControl: FormArray) {
  }
  isErrorState() {
      return !!this.parentControl.errors;
  }
}