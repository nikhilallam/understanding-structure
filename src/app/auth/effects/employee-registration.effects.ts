import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as EmployeeRegistrationActions from '../actions/employee-registration.actions';
import { EmployeesService } from '../../auth/services/employees.service';
import { Router } from '@angular/router';


@Injectable()
export class EmployeeRegistrationEffects {
  submitForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeRegistrationActions.submitForm),
      mergeMap(({ employee }) => 
        this.employeeService.submitUserForm(employee).pipe(
          map(() => EmployeeRegistrationActions.submitFormSuccess()),
          catchError((error) => of(EmployeeRegistrationActions.submitFormFailure({ error })))
        )
      )
    )
  );

  submitFormSucess$ = createEffect(() => 
      this.actions$.pipe(
        ofType(EmployeeRegistrationActions.submitFormSuccess),
        tap(() => {
          this.router.navigate(['/employees']);
        })
      ),
    {dispatch: false}
  )

  constructor(private actions$: Actions, private employeeService: EmployeesService, private router:Router) {}
}
