import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';
import { IToken } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) {

  }

  submitUserForm(credentials: IUser): Observable<IToken> {
    const token = this.http.post<IToken>('http://localhost:3001/login', { credentials });
    token.subscribe(data => localStorage.setItem("token", data.token));
    return token;
  }

  validateUser(token: string) {
    const headers = new HttpHeaders({ Authorization: token });
    return this.http.get('http://localhost:3001/protected', { headers });
  }
}
