import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './snack-bar.service';
import { SnackBarComponent } from './snack-bar/snack-bar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    SnackBarComponent
  ],
  providers: [MatSnackBar, SnackBarService]
})
export class SnackBarModule { }
