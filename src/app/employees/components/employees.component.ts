import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from '../../auth/models/employee';
import { EmployeesService } from '../../auth/services/employees.service';

@Component({
  selector: 'employees',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>List of employees</div>
    <h1>{{employees.length}}</h1>
    <ul *ngFor="let employee of employees">
        <li>{{employee.employee_name}}</li>
    </ul>
  `,
})
export class EmployeesComponent {

  public employees:IEmployee[] = [];
  constructor(private router:Router, private employeeService: EmployeesService) {}


  ngOnInit(): void {
    const token = localStorage.getItem("token")
    if (!token) {
        this.router.navigate(['/notFound'])
    }

    this.employeeService.getEmployees()
    .subscribe(data => {
        console.log(data.data[0].employee_name)
        this.employees = data.data
    });
  }
}
