import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';
import { JobAdStatus, jobAddStatuses } from '../../model/job-add.model';

@Component({
  selector: 'app-job-list-filters',
  templateUrl: './job-list-filters.component.html',
  styleUrls: ['./job-list-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobListFiltersComponent implements OnInit {
  @Input() title: string | undefined = '';
  @Input() status: JobAdStatus | 'all' | undefined = 'all';
  @Output() filtersChange: EventEmitter<{ title: string | undefined; status: JobAdStatus | undefined }> = new EventEmitter();
  
  public filtersForm!: FormGroup;
  public statusOptions = ['all', ...jobAddStatuses];
  
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.initFiltersForm();
    this.trackFiltersChange();
  }

  private initFiltersForm(): void {
    this.filtersForm = this.fb.group({
      title: this.fb.control<string | undefined>(this.title ? this.title : ''),
      status: this.fb.control<JobAdStatus | 'all'>(this.status ? this.status : 'all')
    });
  }

  private trackFiltersChange(): void {
    this.filtersForm.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(300))
      .subscribe(values => {
        this.filtersChange.emit({
          title: values.title ? values.title : undefined,
          status: values.status && values.status !== 'all' ? values.status : undefined
        })
      });
  }
}
