import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@Injectable()
export class SnackBarService {
  private snackBar = inject(MatSnackBar);

  public openSnackBar(message: string, type: 'error'| 'success') {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      data: { message, type, snackBarRef: this.snackBar },
    });
  }
}
