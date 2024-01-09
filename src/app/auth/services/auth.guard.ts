import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  public isAuthenticated = false;
  canActivate(): Observable<boolean> {
    if (localStorage.getItem("token")) {
        this.isAuthenticated = true;
    }
    return of(this.isAuthenticated)
  }
}
