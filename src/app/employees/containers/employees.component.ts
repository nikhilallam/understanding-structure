import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetEmployeeDetailsActions, GetEmployeesActions, SearchTermActions } from '../actions';
import { Observable } from 'rxjs';
import { IEmployee } from '../models';
import { selectAllEmployees, selectEmployeeDetails, selectEmployeeError, selectEmployeeLoading, selectSearchTerm } from '../selectors';
import { ISearchTermRequest } from '../models/search-term.request.model';

@Component({
  selector: 'app-employees-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-employees-list
      [employees]="employees$ | async"
      [showDetails]="showDetails"
      [employeeDetails]="employeeDetails$ | async"
      (searchInputEvent)="onSearchInput($event)"
      (displayEmployeeDetailsEvent)="displayEmployeeDetails($event)"
    ></app-employees-list>
  `
})

export class EmployeesContainerComponent implements OnInit {
  public employees$?: Observable<IEmployee[]>;
  public loading$?: Observable<boolean>;
  public error$?: any;
  public filteredEmployees$?: Observable<IEmployee[]>;
  public employeeDetails$?: Observable<IEmployee>;

  public employeesCopy: IEmployee[] = [];
  public showDetails: boolean = false;

  constructor(private router: Router, private store: Store) {
    this.employees$ = store.select(selectAllEmployees);
    this.loading$ = store.select(selectEmployeeLoading);
    this.error$ = store.select(selectEmployeeError);
    this.employeeDetails$ = store.select(selectEmployeeDetails);
    this.filteredEmployees$ = store.select(selectSearchTerm);
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/notFound']);
    } else {
      this.store.dispatch(GetEmployeesActions.getEmployees());
      this.employees$?.subscribe((data) => (this.employeesCopy = data));
    }
  }

  displayEmployeeDetails(id: number): void {
    this.showDetails = true;
    this.store.dispatch(GetEmployeeDetailsActions.getEmployeeDetails({ id }));
  }

  onSearchInput(event: any): void {
    const searchTerm: ISearchTermRequest = {
      employees: this.employeesCopy,
      searchTerm: event,
    };
    this.store.dispatch(SearchTermActions.setSearchTerm({ searchTerm }));
    this.employees$ = this.filteredEmployees$;
  }
}
