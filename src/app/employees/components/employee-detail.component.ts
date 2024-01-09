import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IEmployee } from '../models';

@Component({
  selector: 'employee-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="employee-details">
        <h2>{{ employee.employee_name }}</h2>
        <div class="detail-item">
        <span class="label">Salary:</span>
        <span class="value">{{ employee.employee_salary | currency:'USD':'symbol':'1.2-2' }}</span>
        </div>
        <div class="detail-item">
        <span class="label">Employee age:</span>
        <span class="value">{{ employee.employee_age | ageWithSuffix }}</span>
        </div>
    </div>
  `,
  styleUrls: ['./employee-detail.component.scss']
})

export class EmployeeDetailComponent {
    @Input() employee!: IEmployee;
}
