import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipGrid, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormArray, FormControl } from '@angular/forms';
import { ControlErrorPipe } from 'src/app/shared/pipes/control-error.pipe';
import { ChipsInputErrorStateMatcher } from './chips-input-error-state-matcher';

@Component({
  selector: 'app-chips-input',
  templateUrl: './chips-input.component.html',
  styleUrls: ['./chips-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatFormFieldModule, MatChipsModule, NgFor, NgIf, MatIconModule, ControlErrorPipe],
})
export class ChipsInputComponent implements OnInit {
  @Input({ required: true }) control!: FormArray;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() validationErrors: {[key: string]: string} | undefined;
  @ViewChild('chipGrid') chipGrid: MatChipGrid | undefined;

  public values: string[] = [];
  public addOnBlur = true;
  public readonly separatorKeysCodes = [ENTER, COMMA] as const;
  public errorStateMatcher!: ChipsInputErrorStateMatcher;
  private cdRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.errorStateMatcher = new ChipsInputErrorStateMatcher(this.control);
    if (this.control.value?.length) {
      this.values = [...this.control.value];
    }
  }

  public setValues(values: string[]): void {
    this.values = [...values];
    this.cdRef.detectChanges();
  }

  public add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.values.push(value);
      this.control.push(new FormControl(value));
    }

    event.chipInput!.clear();
    this.updateErrorState();
  }

  public remove(value: string): void {
    const index = this.values.indexOf(value);

    if (index >= 0) {
      this.values.splice(index, 1);
      this.control.removeAt(index);
    }
    this.updateErrorState();
  }

  public edit(value: string, event: MatChipEditedEvent): void {
    const newValue = event.value.trim();

    if (!newValue) {
      this.remove(value);
      return;
    }

    const index = this.values.indexOf(value);
    if (index >= 0) {
      this.values[index] = newValue;
      this.control.patchValue(this.values)
    }
    this.updateErrorState();
  }

  private updateErrorState(): void {
    this.chipGrid?.updateErrorState();
  }
}
