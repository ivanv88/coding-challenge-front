import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { JobAdPagination } from '../model/job-add-filter.pagination';
import { Observable, map } from 'rxjs';
import { JobAd } from '../model/job-add.model';
import { buildParamOptions, buildTitleParamOptions } from '../utils/helpers/http-param-builder';

@Injectable()
export class JobHttpService {
  private readonly API_BASE = 'http://localhost:3000';
  private readonly API_JOB = `${this.API_BASE}/jobs`;
  private http = inject(HttpClient);

  public getJob(id: number): Observable<JobAd> {
    return this.http.get<JobAd>(`${this.API_JOB}/${id}`);
  }

  public searchJobs(pagination: JobAdPagination): Observable<{ jobs: JobAd[], jobsCount: number }> {
    return this.http.get<JobAd[]>(
      this.API_JOB, { params: buildParamOptions(pagination), observe: 'response' }
    ).pipe(
      map(response => {
        const jobsCountHeader = response.headers.get('X-Total-Count');
        const jobsCount = jobsCountHeader ? Number.parseInt(jobsCountHeader) : 0;
        return {
          jobs: response.body ? response.body : [],
          jobsCount,
        }
      }));
  }

  public matchByJobTitle(title: string): Observable<JobAd[]> {
    return this.http.get<JobAd[]>(
      this.API_JOB, 
      { params: buildTitleParamOptions(title) }
    );
  }

  public createJob(job: Partial<JobAd>): Observable<JobAd> {
    return this.http.post<JobAd>(this.API_JOB, job);
  }

  public updateJob(job: Partial<JobAd> | undefined): Observable<JobAd> {
    return this.http.put<JobAd>(`${this.API_JOB}/${job?.id}`, job);
  }

  public deleteJob(jobId: number): Observable<JobAd> {
    return this.http.delete<JobAd>(`${this.API_JOB}/${jobId}`);
  }
}
