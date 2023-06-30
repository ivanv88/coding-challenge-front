import { Action, createReducer, on } from "@ngrx/store";
import { JobAd } from "../model/job-add.model";
import * as JobActions from "./actions";

export interface State {
  jobs: JobAd[];
  jobsCount: number;
  selectedJob: JobAd | null;
  isLoading: boolean;
}

export const initialState: State = {
  jobs: [],
  jobsCount: 0,
  selectedJob: null,
  isLoading: false
};

export const jobsReducer = createReducer(
  initialState,
  on(JobActions.loadJobs, state => ({
      ...state,
      isLoading: true,
      selectedJob: null
  })),
  on(JobActions.loadJobsSuccess, (state, { jobs, jobsCount }) => ({
      ...state,
      isLoading: false,
      jobs,
      jobsCount
  })),
  on(JobActions.loadJobsError, (state) => ({
      ...state,
      isLoading: false
  })),
  on(JobActions.selectJob, state => ({
    ...state,
    isLoading: true,
    selectedJob: null
  })),
  on(JobActions.selectJobSuccess, (state, { selectedJob }) => ({
    ...state,
    isLoading: false,
    selectedJob
  })),
  on(JobActions.selectJobError, (state) => ({
    ...state,
    isLoading: false
  })),
  on(JobActions.createJob, (state) => ({
    ...state,
    isLoading: true
  })),
  on(JobActions.createJobSuccess, (state) => ({
    ...state,
    isLoading: false
  })),
  on(JobActions.createJobError, (state) => ({
    ...state,
    isLoading: false
  })),
  on(JobActions.updateJob, (state) => ({
    ...state,
    isLoading: true
  })),
  on(JobActions.updateJobSuccess, (state, { job }) => ({
    ...state,
    jobs: state.jobs.map(jobValue => jobValue.id === job.id ? job : jobValue),
    isLoading: false
  })),
  on(JobActions.updateJobError, (state) => ({
    ...state,
    isLoading: false
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return jobsReducer(state, action);
}