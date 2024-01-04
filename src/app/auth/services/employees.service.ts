import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../models/employee';
import { Observable, of } from 'rxjs';
import { IData } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) {

  }

  getEmployees(): Observable<IData>{
    return this.http.get<IData>('http://dummy.restapiexample.com/api/v1/employees');
  }

  submitUserForm(employee: IEmployee): Observable<any> {
    console.log(employee)
    return of(employee);
  }
}
