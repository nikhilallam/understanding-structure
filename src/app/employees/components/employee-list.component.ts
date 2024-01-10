import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmployee } from '../models';

@Component({
  selector: 'app-employees-list',
  template: `
    <input type="text" class="search-input" (input)="onSearchInput($event)" placeholder="Search" />
    <employee-detail *ngIf="showDetails && employeeDetails" [employee]="employeeDetails"></employee-detail>
    <div class="employee-list">
      <ul *ngFor="let employee of employees">
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
export class EmployeesListComponent {
  @Input() employees: IEmployee[] | null = [];
  @Input() showDetails: boolean = false;
  @Input() employeeDetails: IEmployee | null = { id: 0, employee_name: '', employee_salary: 0, employee_age: 0, profile_image: '' };
  @Output() searchInputEvent = new EventEmitter<string>();
  @Output() displayEmployeeDetailsEvent = new EventEmitter<number>();
  
  onSearchInput(event: any): void {
    this.searchInputEvent.emit(event.target.value);
  }

  displayEmployeeDetails(id: number): void {
    this.displayEmployeeDetailsEvent.emit(id);
  }
}
