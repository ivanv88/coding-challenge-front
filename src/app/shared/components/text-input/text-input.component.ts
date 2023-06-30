import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ControlErrorPipe } from 'src/app/shared/pipes/control-error.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatInputModule, MatIconModule, ReactiveFormsModule, NgIf, ControlErrorPipe]
})
export class TextInputComponent {
  @Input({ required: true }) control!: FormControl;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() prefixIcon = '';
  @Input() validationErrors: {[key: string]: string} | undefined;
}
