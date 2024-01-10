import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as EmployeeRegistrationActions from '../actions/employee-registration.actions';
import { EmployeesService } from '../../auth/services/employees.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoggedInActions } from '../actions';

@Injectable()
export class EmployeeRegistrationEffects {
  submitForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeRegistrationActions.submitForm),
      mergeMap(({ credentials }) => 
        this.employeeService.submitUserForm(credentials).pipe(
          map(() => EmployeeRegistrationActions.submitFormSuccess()),
          catchError((error) => of(EmployeeRegistrationActions.submitFormFailure({ error })))
        )
      ),
    )
  );

  submitFormSucess$ = createEffect(() => 
      this.actions$.pipe(
        ofType(EmployeeRegistrationActions.submitFormSuccess),
        tap(() => {
          const token: string | null = localStorage.getItem("token");
          if (token == null) {
            this.store.dispatch(LoggedInActions.loggedInFailure())
          } else {
            this.store.dispatch(LoggedInActions.loggedInSuccess())
          }
        })
      ),
    {dispatch: false}
  )

  constructor(private actions$: Actions, private employeeService: EmployeesService, private router:Router, private store:Store) {}
}
