import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeRegistrationComponent } from './employee-registration.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('EmployeeRegistrationComponent Test', () => {
  
    beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        EmployeeRegistrationComponent,
      ]
    }).compileComponents();
  });

  it('should load the page', () => {
    const fixture = TestBed.createComponent(EmployeeRegistrationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  it('should emit submitForm event when form is submitted', () => {
    const fixture = TestBed.createComponent(EmployeeRegistrationComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app.submitForm, 'emit');
    
    const form = new FormGroup({
      email: new FormControl('test@example.com'),
      password: new FormControl('password123'),
    });

    app.loginForm = form;
    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    submitButton.click();

    expect(app.submitForm.emit).toHaveBeenCalled();
  });

  it('should disable submit button when form is invalid or submitting', () => {
    const fixture = TestBed.createComponent(EmployeeRegistrationComponent);
    const app = fixture.debugElement.componentInstance;
    const form = new FormGroup({
      email: new FormControl('test@example.com'),
      password: new FormControl('password123'),
    });

    app.loginForm = form;
    fixture.detectChanges();

    let submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitButton.disabled).toBeFalsy();

    form.get('email')?.setErrors({ required: true });
    fixture.detectChanges();

    submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitButton.disabled).toBeTruthy();

    app.submitting = true;
    fixture.detectChanges();

    submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitButton.disabled).toBeTruthy();
  });

  it('should display error messages when there are form validation errors', () => {
    const fixture = TestBed.createComponent(EmployeeRegistrationComponent);
    const app = fixture.debugElement.componentInstance;
    const form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    app.loginForm = form;
    fixture.detectChanges();
    form.get('email')?.markAsTouched();
    form.get('password')?.markAsTouched();

    fixture.detectChanges();

    const errorElements = fixture.debugElement.queryAll(By.css('.form-group div'));
    expect(errorElements.length).toBe(2);
    expect(errorElements[0].nativeElement.textContent).toContain('Email is required.');
    expect(errorElements[1].nativeElement.textContent).toContain('Password is required.');
  });

});
