import { inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { JobAdFormModel } from "../../model/job-add-form.model";
import { uniqueArrayValuesValidator } from "src/app/shared/validators/unique-array-values.validator";
import { uniqueJobTitleValidator } from "../../validators/unique-job-title-validator";
import { JobHttpService } from "../../services/job-http.service";

export function createJobForm(): FormGroup {
  const fb = inject(FormBuilder);
  const jobService = inject(JobHttpService);
  return fb.group<JobAdFormModel>({
    id: fb.nonNullable.control(undefined),
    description: fb.nonNullable.control('', { validators: [Validators.required, Validators.minLength(10)] }),
    title: fb.nonNullable.control('', { validators: [Validators.required], asyncValidators: [uniqueJobTitleValidator(jobService)] }),
    skills: fb.nonNullable.array([] as string[], { validators: [Validators.required, uniqueArrayValuesValidator] }),
    status: fb.nonNullable.control(undefined, { validators: [Validators.required] })
  });
}