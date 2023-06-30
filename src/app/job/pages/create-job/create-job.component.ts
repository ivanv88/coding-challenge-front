import { Component, inject } from '@angular/core';
import { validationErrors } from '../../utils/configs/validation-errors';
import { JobAd, JobAdStatus } from '../../model/job-add.model';
import { createJobForm } from '../../utils/helpers/create-job-form';
import { Store } from '@ngrx/store';
import * as JobActions from '../../state/actions';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent {
  public validationErrors = validationErrors;
  public jobForm = createJobForm();
  public readonly allowedStatusOptions: JobAdStatus[] = ['draft', 'published'];
  private store$ = inject(Store);

  handleSubmit(job: Partial<JobAd>): void {
    this.store$.dispatch(JobActions.createJob({ job }));
  }
}
