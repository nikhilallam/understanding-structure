import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEmployee } from '../models';
import { GetEmployeeDetailsActions } from '../actions';
import { selectEmployeeDetails, selectEmployeeDetailsError, selectEmployeeDetailsLoading } from '../selectors';

@Component({
  selector: 'employee-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <employee-detail [employee]="(employeeDetails$ | async)!"></employee-detail>
  `,
})
export class EmployeeDetailContainer {

  public employeeId:number = 0
  public employeeDetails:IEmployee = {
    id: 0,
    employee_name: '',
    employee_salary: 0,
    employee_age: 0,
    profile_image: ''
  }

  employeeDetails$?: Observable<IEmployee>;
  loading$?: Observable<Boolean>;
  error$?: any;
  
  constructor(private store: Store, private route:ActivatedRoute) {
    this.employeeDetails$ = store.select(selectEmployeeDetails);
    this.loading$ = store.select(selectEmployeeDetailsLoading);
    this.error$ = store.select(selectEmployeeDetailsError);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = +params['id'];
    });
    this.store.dispatch(GetEmployeeDetailsActions.getEmployeeDetails({id: this.employeeId}));
  }

}
