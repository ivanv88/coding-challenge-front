import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { JobAd, JobAdStatus } from '../../model/job-add.model';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobCardComponent {
  @Input({ required: true }) job!: JobAd;
  @Output() statusUpdated: EventEmitter<JobAdStatus> = new EventEmitter<JobAdStatus>();
  @Output() editJob: EventEmitter<void> = new EventEmitter<void>();

  public getBadgeColor(jobStatus: JobAdStatus): 'warning' | 'success' | 'accent' {
    switch(jobStatus) {
      case 'draft': return 'accent';
      case 'published': return 'success';
      case 'archived': return 'warning';
    }
  }
}
