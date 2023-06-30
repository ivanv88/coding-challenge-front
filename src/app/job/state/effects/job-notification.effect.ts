import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SnackBarService } from "src/app/shared/components/snack-bar/snack-bar.service";
import * as JobActions from '../actions';
import { map } from "rxjs";

@Injectable()
export class JobNotificationEffect {
  private actions$ = inject(Actions);
  private snackbar = inject(SnackBarService);

  selectJobErrorNotificationEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobActions.selectJobError),
    map(({ error }) => this.snackbar.openSnackBar(`Error: ${error}`, 'error'))
  ), { dispatch: false });

  loadJobsErrorNotificationEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobActions.loadJobsError),
    map(({ error }) => this.snackbar.openSnackBar(`Error: ${error}`, 'error'))
  ), { dispatch: false });
  
  createJobSuccessNotificationEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobActions.createJobSuccess),
    map(({ job }) => this.snackbar.openSnackBar(`${job.title} Created Successfully`, 'success'))
  ), { dispatch: false });

  createJobErrorNotificationEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobActions.createJobError),
    map(({ error }) => this.snackbar.openSnackBar(`Error: ${error}`, 'error'))
  ), { dispatch: false });

  updateJobSuccessNotificationEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobActions.updateJobSuccess),
    map(({ job }) => this.snackbar.openSnackBar(`${job.title} Updated Successfully`, 'success'))
  ), { dispatch: false });

  updateJobErrorNotificationEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobActions.updateJobError),
    map(({ error }) => this.snackbar.openSnackBar(`Error: ${error}`, 'error'))
  ), { dispatch: false });

}