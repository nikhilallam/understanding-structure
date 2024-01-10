import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeRegistrationState } from '../reducers/employee-registration.reducer';
import { IEmployee } from '../../auth/models/employee';
import { EmployeeRegistrationActions } from '../actions';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-employee-registration-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-employee-registration
      [loginForm]="loginForm"
      [submitting]="submitting$ | async"
      [submitted]="submitted$ | async"
      [error]="error$ | async"
      (submitForm)="onSubmit($event)"
    ></app-employee-registration>
  `
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

  onSubmit(event: any) {
    const credentials: IUser = {
      username: "somename",
      password: "password" 
    };
    this.store.dispatch(EmployeeRegistrationActions.submitForm({ credentials }));
  }
}
