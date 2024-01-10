import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeDetailComponent } from './employee-detail.component';
import { AgeWithSuffixPipe } from '../pipes/age.pipe';
import { IEmployee } from '../models';

describe('EmployeeDetailComponent Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        EmployeeDetailComponent,
        AgeWithSuffixPipe
      ],
    }).compileComponents();
  });

  it('should load the page', () => {
    const fixture = TestBed.createComponent(EmployeeDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  it('should display employee details correctly', () => {
    const fixture = TestBed.createComponent(EmployeeDetailComponent);
    const component = fixture.debugElement.componentInstance;
    const mockEmployee: IEmployee = {
        employee_name: 'John Doe',
        employee_salary: 50000,
        employee_age: 25,
        id: 0,
        profile_image: ''
    };

    component.employee = mockEmployee;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('John Doe');
    expect(compiled.querySelector('.detail-item .label').textContent).toContain('Salary:');
    expect(compiled.querySelector('.detail-item .value').textContent).toContain('$50,000.00');
    expect(compiled.querySelector('.detail-item:last-child .label').textContent).toContain('Employee age:');
    expect(compiled.querySelector('.detail-item:last-child .value').textContent).toContain('25 years old');
  });
});
