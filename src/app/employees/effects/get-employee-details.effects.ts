import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GetEmployeeDetailsActions } from '../actions';
import { EmployeesService } from '../services/employees.service';
import { IEmployeeDetail } from '../models';


@Injectable()
export class EmployeeDetailsEffects {

  getEmployeeDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetEmployeeDetailsActions.getEmployeeDetails),
      switchMap((action) => {
        return this.employeeService.getEmployeeById(action.id).pipe(
          map((employee: IEmployeeDetail) => GetEmployeeDetailsActions.getEmployeeDetailsSuccess({ employeeDetails: employee.data })),
          catchError((error) => of(GetEmployeeDetailsActions.getEmployeeDetailsFailure({ error })))
        )
      } 
      )
    )
  );

  constructor(private actions$: Actions, private employeeService: EmployeesService) {}
}
