import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IEmployee } from '../models';

@Component({
  selector: 'employee-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>Details of {{employee.employee_name}}</div>
  `,
})
export class EmployeeDetailComponent {
    @Input() employee!: IEmployee;
}
