import { ActionReducerMap } from "@ngrx/store";
import * as fromJob from "../job/state/reducers";


export interface State {
  job: fromJob.State;
}

export const reducers: ActionReducerMap<State> = {
  job: fromJob.reducer
};