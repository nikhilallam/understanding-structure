import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeDetailComponent } from './employee-detail.component';
import { AgeWithSuffixPipe } from '../pipes/age.pipe';
import { IEmployee } from '../models';
import { EmployeesListComponent } from './employee-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('EmployeeDetailComponent Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        EmployeeDetailComponent,
        EmployeesListComponent,
        AgeWithSuffixPipe
      ],
    }).compileComponents();
  });

  it('should load the page', () => {
    const fixture = TestBed.createComponent(EmployeesListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  it('should display all employees list correctly', () => {
    const fixture = TestBed.createComponent(EmployeesListComponent);
    const component = fixture.debugElement.componentInstance;

  });

  it('should emit search input event when onSearchInput is called', () => {
    const fixture = TestBed.createComponent(EmployeesListComponent);
    const component = fixture.debugElement.componentInstance;
    const inputElement: DebugElement = fixture.debugElement.query(By.css('.search-input'));
    spyOn(component.searchInputEvent, 'emit');
    inputElement.triggerEventHandler('input', { target: { value: 'test' } });
    expect(component.searchInputEvent.emit).toHaveBeenCalledWith('test');
  });

  it('should emit display employee details event when displayEmployeeDetails is called', () => {
    const fixture = TestBed.createComponent(EmployeesListComponent);
    const component = fixture.debugElement.componentInstance;
    spyOn(component.displayEmployeeDetailsEvent, 'emit');
    component.displayEmployeeDetails(1);
    expect(component.displayEmployeeDetailsEvent.emit).toHaveBeenCalledWith(1);
  });

  it('should render employee names in the list', () => {
    const mockEmployees: IEmployee[] = [
      { id: 1, employee_name: 'Krushna', employee_salary: 50000, employee_age: 30, profile_image: '' },
      { id: 2, employee_name: 'Nikhil Allam', employee_salary: 60000, employee_age: 35, profile_image: '' },
    ];
    const fixture = TestBed.createComponent(EmployeesListComponent);
    const component = fixture.debugElement.componentInstance;
    component.employees = mockEmployees;
    fixture.detectChanges();

    const listElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.employee-list li'));

    expect(listElements.length).toBe(2);

    expect(listElements[0].nativeElement.textContent).toContain('Krushna');
    expect(listElements[1].nativeElement.textContent).toContain('Nikhil Allam');
  });

  it('should emit displayEmployeeDetails event when a list item is clicked', () => {
    const mockEmployees: IEmployee[] = [{ id: 1, employee_name: 'Nikhil Allam', employee_salary: 50000, employee_age: 30, profile_image: '' }];
    const fixture = TestBed.createComponent(EmployeesListComponent);
    const component = fixture.debugElement.componentInstance;
    component.employees = mockEmployees;
    fixture.detectChanges();

    spyOn(component.displayEmployeeDetailsEvent, 'emit');

    const listItemElement: DebugElement = fixture.debugElement.query(By.css('.employee-list li a'));
    listItemElement.triggerEventHandler('click', null);

    expect(component.displayEmployeeDetailsEvent.emit).toHaveBeenCalledWith(1);
  });
});
