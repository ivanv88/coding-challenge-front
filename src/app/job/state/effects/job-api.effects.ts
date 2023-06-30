import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { JobHttpService } from '../../services/job-http.service';
import * as JobActions from '../actions';
import { catchError, exhaustMap, of, switchMap, withLatestFrom } from 'rxjs';
import { selectAllJobs } from '../selectors';
import { findAndUpdateJobStatus } from '../../utils/helpers/find-and-update-job-status';
import { Store } from '@ngrx/store';

@Injectable()
export class JobApiEffects {
  private jobService = inject(JobHttpService);
  private actions$ = inject(Actions);
  private store$ = inject(Store);

  loadJobsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobActions.loadJobs),
    switchMap(({ pagination }) => this.jobService.searchJobs(pagination).pipe(
      switchMap(({ jobs, jobsCount }) => of(JobActions.loadJobsSuccess({ jobs, jobsCount }))),
      catchError(error => of(JobActions.loadJobsError({ error })))
    ))
  ));

  selectJobEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobActions.selectJob),
    withLatestFrom(this.store$.select(selectAllJobs)),
    exhaustMap(([{ selectedJobId }, jobs]) => {
      const selectedJob = jobs.find((job) => job.id === selectedJobId);
      if (selectedJob) {
        return of(JobActions.selectJobSuccess({ selectedJob }))
      }
      return this.jobService.getJob(selectedJobId).pipe(
        switchMap(job => of(JobActions.selectJobSuccess({ selectedJob: job }))),
        catchError(error => of(JobActions.selectJobError({ error })))
      )
    })
  ));

  createJobEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobActions.createJob),
    exhaustMap(({ job }) => this.jobService.createJob(job).pipe(
      switchMap(job => of(JobActions.createJobSuccess({ job }))),
      catchError(error => of(JobActions.createJobError({ error })))
    ))
  ));

  updateJobEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobActions.updateJob),
    exhaustMap(({ job }) => this.jobService.updateJob(job).pipe(
      switchMap(job => of(JobActions.updateJobSuccess({ job }))),
      catchError(error => of(JobActions.updateJobError({ error })))
    ))
  ));

  updateJobStatusEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobActions.updateJobStatus),
    withLatestFrom(this.store$.select(selectAllJobs)),
    exhaustMap(([{ status, id }, jobs]) => this.jobService.updateJob(findAndUpdateJobStatus(status, id, jobs)).pipe(
      switchMap(job => of(JobActions.updateJobSuccess({ job }))),
      catchError(error => of(JobActions.updateJobError({ error })))
    ))
  ));
}
