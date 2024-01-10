import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const token = localStorage.getItem('token');
    let headers;
    if (token != null) {
      headers = new HttpHeaders({ Authorization: token });
    }
    const response = this.http.get<IData>('http://localhost:3001/employees', { headers });
    return response;
  }

  getEmployeeById(id: number): Observable<IEmployeeDetail> {
    const token = localStorage.getItem('token');
    let headers;
    if (token != null) {
      headers = new HttpHeaders({ Authorization: token });
    }
    return this.http.get<IEmployeeDetail>(`http://localhost:3001/employees/${id}`, { headers })
  }
}
