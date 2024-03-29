import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router) {
  }

  canActivate(): Observable<boolean> {
    const token: string | null = localStorage.getItem("token");
    if (token == null) {
      this.router.navigate(['/login']);
      return of(false)
    }
    return of(true)
  }
}
