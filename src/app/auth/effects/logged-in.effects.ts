import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EmployeesService } from '../../auth/services/employees.service';
import { Router } from '@angular/router';
import { LoggedInActions } from '../actions';

@Injectable()
export class LoggedInEffects {
  loggedIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoggedInActions.loggedIn),
      mergeMap(({token}) =>
        this.employeeService.validateUser(token).pipe(
          map((some) => {
            console.log(some)
            return LoggedInActions.loggedInSuccess()
        }),
          catchError((err) => {
            console.log("err", err)
            return of(LoggedInActions.loggedInFailure())})
        )
      ),
    )
  );

  loggedInSuccess$ = createEffect(() => 
      this.actions$.pipe(
        ofType(LoggedInActions.loggedInSuccess),
        tap(() => {
          this.router.navigate(['/employees']);
        })
      ),
    {dispatch: false}
  )

  loggedInFailure$ = createEffect(() => 
      this.actions$.pipe(
        ofType(LoggedInActions.loggedInFailure),
        tap(() => {
          this.router.navigate(['/login']);
        })
      ),
    {dispatch: false}
  )

  constructor(private actions$: Actions, private employeeService: EmployeesService, private router:Router) {}
}
