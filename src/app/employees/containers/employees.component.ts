import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetEmployeesActions } from '../actions';
import { Observable } from 'rxjs';
import { IEmployee } from '../models';
import { selectAllEmployees, selectEmployeeError, selectEmployeeLoading } from '../selectors';

@Component({
  selector: 'employees',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <employee-list [employees]="(employees$ | async)!"></employee-list>
  `,
})
export class EmployeesContainer {

  public employees:IEmployee[] = []
  employees$?: Observable<IEmployee[]>;
  loading$?: Observable<Boolean>;
  error$?: any;
  
  constructor(private router:Router, private store: Store) {
    this.employees$ = store.select(selectAllEmployees);
    this.loading$ = store.select(selectEmployeeLoading);
    this.error$ = store.select(selectEmployeeError);
  }

  ngOnInit(): void {
    const token = localStorage.getItem("token")
    if (!token) {
        this.router.navigate(['/notFound'])
    } else {
        this.store.dispatch(GetEmployeesActions.getEmployees());
    }
  }
}
