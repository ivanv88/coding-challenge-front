import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as JobActions from '../../state/actions';
import { JobAdPagination } from '../../model/job-add-filter.pagination';
import { selectAllJobs, selectJobCounts } from '../../state/selectors';
import { JobAd, JobAdStatus } from '../../model/job-add.model';
import { ActivatedRoute, Router } from '@angular/router';
import { mapPaginationToQueryParams, mapQueryParamsToPagination } from '../../utils/helpers/query-params-mapper';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  private store$ = inject(Store);
  public pagination!: JobAdPagination;
  public jobList$ = this.store$.select(selectAllJobs);
  public jobsCount$ = this.store$.select(selectJobCounts);
  
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.getPaginationFromQueryParams();
    this.loadJobs();
  }

  public updateJobStatus(status: JobAdStatus, id: number): void {
    this.store$.dispatch(JobActions.updateJobStatus({ status, id }));
  }

  public setPagination(page: number, limit: number): void {
    this.pagination = {
      ...this.pagination,
      page,
      limit
    };
    this.loadJobs();
    this.updateRouteQueryParams();
  }

  public setFilters(title: string | undefined, status: JobAdStatus | undefined): void {
    this.pagination = {
      ...this.pagination,
      page: 1,
      filter: {
        title,
        status
      }
    };
    this.loadJobs();
    this.updateRouteQueryParams();
  }

  public editJob(selectedJobId: number): void {
    this.router.navigate([`${selectedJobId}`], { relativeTo: this.route });
  }

  public trackBy(index: number, job: JobAd): number {
    return job.id;
  }

  private loadJobs(): void {
    this.store$.dispatch(JobActions.loadJobs({ pagination: this.pagination }));
  }

  private updateRouteQueryParams(): void {
    this.router.navigate([], { queryParams: mapPaginationToQueryParams(this.pagination), relativeTo: this.route });
  }

  private getPaginationFromQueryParams(): void {
    const params = this.route.snapshot.queryParams;
    if (Object.keys(params).length) {
      this.pagination = mapQueryParamsToPagination(params);
    } else {
      this.pagination = this.getDefaultPagination();
    }
  }

  private getDefaultPagination(): JobAdPagination {
    return {
      page: 1,
      limit: 10
    }
  }
}
