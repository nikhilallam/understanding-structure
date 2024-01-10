import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-registration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="login-container">
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit($event)">
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
        <button type="submit" [disabled]="loginForm.invalid || submitting">Login</button>
      </form>
    </div>
`
})
export class EmployeeRegistrationComponent {
  @Input() loginForm!: FormGroup;
  @Input() submitting: boolean | null = false;
  @Input() submitted: boolean | null = false;
  @Input() error: any;

  @Output() submitForm = new EventEmitter<any>();

  onSubmit(event : any) {
    console.log(event)
    this.submitForm.emit();
  }
}
