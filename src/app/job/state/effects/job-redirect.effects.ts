import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as JobActions from '../actions';
import { map } from "rxjs";

@Injectable()
export class JobRedirectEffects {
  private actions$ = inject(Actions);
  private router = inject(Router);

  redirectOnJobCreateEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobActions.createJobSuccess),
    map(() => this.router.navigate(['jobs']))
  ), { dispatch: false});

  redirectOnJobEditEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobActions.updateJobSuccess),
    map(() => this.router.navigate(['jobs']))
  ), { dispatch: false});

}