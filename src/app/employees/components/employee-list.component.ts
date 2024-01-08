import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IEmployee } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'employee-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>List of {{employees?.length}} employees</div>
    <ul>
      <li *ngFor="let employee of employees">
            <a (click)="navigateToEmployeeDetails(employee.id)">
                {{ employee.employee_name }}
            </a>
      </li>
    </ul>
  `,
})
export class EmployeeListComponent {
    @Input() employees!: IEmployee[];

    constructor(private router:Router) {
    }
    
    navigateToEmployeeDetails(id: number): void {
        this.router.navigate(['/employees', id]);
    }
}
