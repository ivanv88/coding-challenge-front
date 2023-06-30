import { createAction, props } from "@ngrx/store";
import { JobAd, JobAdStatus } from "../model/job-add.model";
import { JobAdPagination } from "../model/job-add-filter.pagination";

export const loadJobs = createAction('[Job] Load Jobs', props<{ pagination: JobAdPagination }>());
export const loadJobsSuccess = createAction('[Job] Load Jobs Success', props<{ jobs: JobAd[], jobsCount: number }>());
export const loadJobsError = createAction('[Job] Load Jobs Error', props<{ error: string }>());

export const selectJob = createAction('[Job] Select Job', props<{ selectedJobId: number }>());
export const selectJobSuccess = createAction('[Job] Select Job Success', props<{ selectedJob: JobAd }>());
export const selectJobError = createAction('[Job] Select Job Error', props<{ error: string }>());

export const createJob = createAction('[Job] Create Job', props<{ job: Partial<JobAd> }>());
export const createJobSuccess = createAction('[Job] Create Job Success', props<{ job: JobAd }>());
export const createJobError = createAction('[Job] Create Job Error', props<{ error: string }>());

export const updateJob = createAction('[Job] Update Job', props<{ job: Partial<JobAd> }>());
export const updateJobSuccess = createAction('[Job] Update Job Success', props<{ job: JobAd }>());
export const updateJobError = createAction('[Job] Update Job Error', props<{ error: string }>());

export const updateJobStatus = createAction('[Job] Update Job Status', props<{ status: JobAdStatus, id: number }>());