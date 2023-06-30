import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JobAdFormModel } from '../../model/job-add-form.model';
import { uniqueArrayValuesValidator } from 'src/app/shared/validators/unique-array-values.validator';
import { validationErrors } from '../../utils/configs/validation-errors';
import { createJobForm } from '../../utils/helpers/create-job-form';
import { JobAd, jobAddStatuses } from '../../model/job-add.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as JobActions from '../../state/actions';
import { selectSelectedJob } from '../../state/selectors';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {
  private store$ = inject(Store);
  private route = inject(ActivatedRoute);

  public validationErrors = validationErrors;
  public statusOptions = jobAddStatuses;
  public jobForm = createJobForm();
  public selectedJob$ = this.store$.select(selectSelectedJob);

  ngOnInit(): void {
    this.getSelectedJob();
  }

  public updateJob(job: Partial<JobAd>): void {
    this.store$.dispatch(JobActions.updateJob({ job }));
  }
  
  private getSelectedJob(): void {
    const selectedJobId = this.route.snapshot.params['id'];
    this.store$.dispatch(JobActions.selectJob({ selectedJobId }));
  }
}
