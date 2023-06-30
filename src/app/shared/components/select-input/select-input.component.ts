import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor, TitleCasePipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ControlErrorPipe } from '../../pipes/control-error.pipe';
@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleCasePipe, NgIf, NgFor, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, ControlErrorPipe]
})
export class SelectInputComponent {
  @Input({ required: true }) control!: FormControl;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() options: string [] = [];
  @Input() validationErrors: {[key: string]: string} | undefined;

  public compareFunction(o1: string, o2: string): boolean {
    return (o1?.toLowerCase() === o2?.toLowerCase());
   }
}
