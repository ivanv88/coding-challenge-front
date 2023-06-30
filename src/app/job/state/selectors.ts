import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./reducers";
import { JobAd } from "../model/job-add.model";

export const selectJobsState: MemoizedSelector<object, State> = createFeatureSelector<State>('job');

export const selectAllJobs: MemoizedSelector<object, JobAd[]> = createSelector(selectJobsState, (state: State) => state.jobs);
export const selectJobCounts: MemoizedSelector<object, number> = createSelector(selectJobsState, (state: State) => state.jobsCount);
export const selectSelectedJob: MemoizedSelector<object, JobAd | null> = createSelector(selectJobsState, (state: State) => state.selectedJob);
export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(selectJobsState, (state: State) => state.isLoading);