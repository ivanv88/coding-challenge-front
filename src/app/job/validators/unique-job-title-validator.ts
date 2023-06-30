import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, map } from "rxjs";
import { JobHttpService } from "src/app/job/services/job-http.service";

// this approach gives us button flickering, it should be changed
export function uniqueJobTitleValidator(jobService: JobHttpService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const value = control.value;
    const id = control.parent?.get('id')?.value;
    return jobService.matchByJobTitle(value).pipe(
      map((res) => {
        if (res.length) {
          // re-check if json-server is used - should be removed for custom api
          const duplicates = res.filter(job => job.title.toLowerCase() === value.toLowerCase() && job.id !== id);
          if (duplicates.length) {
            return { unique: true };
          }
        }
        return null;
      })
    );
  };
}
