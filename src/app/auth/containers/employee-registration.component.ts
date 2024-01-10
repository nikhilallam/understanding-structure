import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeRegistrationState } from '../reducers/employee-registration.reducer';
import { IEmployee } from '../../auth/models/employee';
import { EmployeeRegistrationActions } from '../actions';

@Component({
  selector: 'app-employee-registration-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-employee-registration
      [loginForm]="loginForm"
      [submitting]="submitting$ | async"
      [submitted]="submitted$ | async"
      [error]="error$ | async"
      (submitForm)="onSubmit()"
    ></app-employee-registration>
  `,
  styleUrls: ['./employee-registration-container.component.scss'],
})

export class EmployeeRegistrationContainerComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private store: Store<EmployeeRegistrationState>) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitting$ = this.store.select((state) => state.submitting);
  submitted$ = this.store.select((state) => state.submitted);
  error$ = this.store.select((state) => state.error);

  onSubmit() {
    const employee: IEmployee = {
      id: 2,
      employee_name: 'Garrett Winters',
      employee_salary: 170750,
      employee_age: 63,
      profile_image: '',
    };
    this.store.dispatch(EmployeeRegistrationActions.submitForm({ employee }));
  }
}
