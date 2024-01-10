import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {

  constructor(private router:Router) {
  }

  canActivate(): Observable<boolean> {
    const token: string | null = localStorage.getItem("token");
    if (token != null) {
      this.router.navigate(['/employees']);
    }
    return of(true)
  }
}
