import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetEmployeeDetailsActions, GetEmployeesActions, SearchTermActions } from '../actions';
import { Observable } from 'rxjs';
import { IEmployee } from '../models';
import { selectAllEmployees, selectEmployeeDetails, selectEmployeeError, selectEmployeeLoading, selectSearchTerm } from '../selectors';
import { ISearchTermRequest } from '../models/search-term.request.model';

@Component({
  selector: 'employees',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <input type="text" (input)="onSearchInput($event)" placeholder="Search" />
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

  public employees$?: Observable<IEmployee[]>;
  public loading$?: Observable<Boolean>;
  public error$?: any;
  public filteredEmployees$?: Observable<IEmployee[]>;
  public employeeDetails$?: Observable<IEmployee>;

  public employees:IEmployee[] = []
  public employeesCopy:IEmployee[] = []
  public showDetails:boolean = false
  public employeeDetails:IEmployee = {
    id: 0,
    employee_name: '',
    employee_salary: 0,
    employee_age: 0,
    profile_image: ''
  }

  
  constructor(private router:Router, private store: Store) {
    this.employees$ = store.select(selectAllEmployees);
    this.loading$ = store.select(selectEmployeeLoading);
    this.error$ = store.select(selectEmployeeError);
    this.employeeDetails$ = store.select(selectEmployeeDetails);
    this.filteredEmployees$ = store.select(selectSearchTerm);
  }

  ngOnInit(): void {
    const token = localStorage.getItem("token")
    if (!token) {
        this.router.navigate(['/notFound'])
    } else {
        this.store.dispatch(GetEmployeesActions.getEmployees());
        this.employees$?.subscribe(data => this.employeesCopy = data)
    }
  }

  displayEmployeeDetails(id: number) {
    this.showDetails = true
    this.store.dispatch(GetEmployeeDetailsActions.getEmployeeDetails({ id }));
  }

  onSearchInput(event: any): void {
    const searchTerm: ISearchTermRequest = {
        employees: this.employeesCopy,
        searchTerm: event.target.value
    }
    this.store.dispatch(SearchTermActions.setSearchTerm({ searchTerm }));
    this.employees$ = this.filteredEmployees$;
  }
}
