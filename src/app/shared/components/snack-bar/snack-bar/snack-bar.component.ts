import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="snack-container">
      <div>
        <mat-icon [class]="type + '-icon'">{{icon}}</mat-icon>
      </div>
      <div class="snack-message">
        <span>{{data.message}}</span>
      </div>
    </div>
  `,
  styles: [
    '.snack-container {display: flex; align-items: center; justify-content: center}',
    '.snack-message { padding-left: 1rem }',
    '.success-icon { color: green; }',
    '.error-icon { color: red; }'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackBarComponent implements OnInit {
  public data = inject(MAT_SNACK_BAR_DATA);
  public icon: string | undefined;
  public type: string | undefined;

  ngOnInit() {
    this.icon = this.getIcon();
    this.type = this.data.type;
  }

  getIcon() {
    if (this.data.type === 'success') {
      return 'done';
    }
    return 'error';
  }
}
