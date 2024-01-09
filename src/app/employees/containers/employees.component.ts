import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetEmployeeDetailsActions, GetEmployeesActions } from '../actions';
import { Observable } from 'rxjs';
import { IEmployee } from '../models';
import { selectAllEmployees, selectEmployeeDetails, selectEmployeeError, selectEmployeeLoading } from '../selectors';

@Component({
  selector: 'employees',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <employee-detail *ngIf="showDetails" [employee]="(employeeDetails$ | async)!"></employee-detail>
    <div class="employee-list">
      <ul *ngFor="let employee of employees$ | async">
        <li>
            <a appHoverBackground (click)="displayEmployeeDetails(employee.id)">
                {{ employee.employee_name }}
            </a>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['../components/employee-list.component.scss']
})

export class EmployeesContainer {

  public employees:IEmployee[] = []
  public showDetails:boolean = false
  employees$?: Observable<IEmployee[]>;
  loading$?: Observable<Boolean>;
  error$?: any;
  public employeeDetails:IEmployee = {
    id: 0,
    employee_name: '',
    employee_salary: 0,
    employee_age: 0,
    profile_image: ''
  }

  employeeDetails$?: Observable<IEmployee>;
  
  constructor(private router:Router, private store: Store) {
    this.employees$ = store.select(selectAllEmployees);
    this.loading$ = store.select(selectEmployeeLoading);
    this.error$ = store.select(selectEmployeeError);
    this.employeeDetails$ = store.select(selectEmployeeDetails);
  }

  ngOnInit(): void {
    const token = localStorage.getItem("token")
    if (!token) {
        this.router.navigate(['/notFound'])
    } else {
        this.store.dispatch(GetEmployeesActions.getEmployees());
    }
  }

  displayEmployeeDetails(id: number) {
    this.showDetails = true
    this.store.dispatch(GetEmployeeDetailsActions.getEmployeeDetails({ id }));
  }
}
