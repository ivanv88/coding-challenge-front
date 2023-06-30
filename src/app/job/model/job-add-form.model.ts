import { FormArray, FormControl } from "@angular/forms";
import { JobAdStatus } from "./job-add.model";

export interface JobAdFormModel {
  id: FormControl<number | undefined>;
  title: FormControl<string | undefined>;
  description: FormControl<string | undefined>;
  skills: FormArray<FormControl<string>>;
  status: FormControl<JobAdStatus | undefined>;
}
