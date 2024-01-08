import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GetEmployeesActions } from '../actions';
import { EmployeesService } from '../services/employees.service';
import { IData } from '../models/data.model';


@Injectable()
export class GetEmployeesEffects {
  getEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetEmployeesActions.getEmployees),
      switchMap(() => {
        return this.employeeService.getEmployees().pipe(
          map((employees: IData) => GetEmployeesActions.getEmployeesSuccess({ employees: employees.data })),
          catchError((error) => of(GetEmployeesActions.getEmployeesFailure({ error })))
        )
      } 
      )
    )
  );

  constructor(private actions$: Actions, private employeeService: EmployeesService) {}
}
