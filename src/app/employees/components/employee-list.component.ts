import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IEmployee } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'employee-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="employee-list">
        <div>List of {{employees?.length}} employees</div>
        <ul>
            <li *ngFor="let employee of employees">
                    <a (click)="displayEmployeeDetails(employee.id)">
                        {{ employee.employee_name }}
                    </a>
            </li>
        </ul>
    </div>
  `,
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
    @Input() employees!: IEmployee[];

    constructor(private router:Router) {
    }
    
    displayEmployeeDetails(id: number): void {
        
    }
}
