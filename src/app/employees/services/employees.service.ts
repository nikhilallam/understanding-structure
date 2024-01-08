import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEmployee } from '../models';
import { IData } from '../models/data.model';
import { IEmployeeDetail } from '../models';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  public employees:IEmployee[] = [];
  constructor(private http: HttpClient) {

  }

  getEmployees(): Observable<IData>{
    return this.http.get<IData>('http://dummy.restapiexample.com/api/v1/employees');
  }

  getEmployeeById(id: number): Observable<IEmployeeDetail> {
    return this.http.get<IEmployeeDetail>(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
  }
}
