import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EmployeeRegistrationState } from '../reducers/employee-registration.reducer';
import { IEmployee } from '../../auth/models/employee';
import { EmployeeRegistrationActions } from '../actions';

@Component({
  selector: 'bc-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="login-container">
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" formControlName="email" />
          <div *ngIf="loginForm.get('email')?.hasError('required') && loginForm.get('email')?.touched">
            Email is required.
          </div>
          <div *ngIf="loginForm.get('email')?.hasError('email') && loginForm.get('email')?.touched">
            Invalid email address.
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" formControlName="password" />
          <div *ngIf="loginForm.get('password')?.hasError('required') && loginForm.get('password')?.touched">
            Password is required.
          </div>
        </div>
        <button type="submit" [disabled]="loginForm.invalid">Login</button>
      </form>
    </div>  
  `,
})
export class EmployeeRegistrationComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router, private store:Store<EmployeeRegistrationState>) {

  }

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
    const employee: IEmployee = {"id":2,"employee_name":"Garrett Winters","employee_salary":170750,"employee_age":63,"profile_image":""};
    this.store.dispatch(EmployeeRegistrationActions.submitForm({ employee }));
  }
}
