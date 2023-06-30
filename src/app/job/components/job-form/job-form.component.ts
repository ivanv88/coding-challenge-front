import { Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JobAd } from '../../model/job-add.model';
import { JobAdFormModel } from '../../model/job-add-form.model';
import { ChipsInputComponent } from 'src/app/shared/components/chips-input/chips-input.component';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss'],
})
export class JobFormComponent {
  @ViewChild(ChipsInputComponent) chipInput!: ChipsInputComponent;
  @Input({ required: true }) jobForm!: FormGroup<JobAdFormModel>;
  @Input({ required: true }) validationErrors!: Map<string, {[key: string]: string}>;
  @Input({ required: true }) statusOptions!: string[];
  @Input() set selectedJob(job: JobAd | null) {
    if (job && this.jobForm) {
      this.patchForm(job);
    }
  }
  
  @Output() formSubmit: EventEmitter<Partial<JobAd>> = new EventEmitter<Partial<JobAd>>();

  public submit(): void {
    this.formSubmit.emit(this.jobForm.getRawValue())
  }

  private patchForm(job: JobAd): void {
    if (job.skills.length) {
      job.skills.forEach(() => this.jobForm.controls.skills.push(new FormControl()));
    }
    this.jobForm.patchValue(job);
    this.chipInput.setValues(job.skills);
  }
}
