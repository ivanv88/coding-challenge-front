import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { JobAdStatus } from '../../model/job-add.model';

@Component({
  selector: 'app-job-card-actions',
  templateUrl: './job-card-actions.component.html',
  styleUrls: ['./job-card-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobCardActionsComponent {
  @Input({ required: true }) jobStatus!: JobAdStatus;
  @Output() statusUpdated: EventEmitter<JobAdStatus> = new EventEmitter<JobAdStatus>();
  @Output() editJob: EventEmitter<void> = new EventEmitter<void>();

  public getAllowedAction(): {label: string; status: JobAdStatus} | undefined {
    if (this.jobStatus === 'draft') {
      return { label: 'publish', status: 'published' };
    }
    if (this.jobStatus === 'published') {
      return { label: 'archive', status: 'archived'};
    }
    return undefined;
  }

  public submitUpdateStatus(): void {
    this.statusUpdated.emit(this.getAllowedAction()?.status);
  }
}
