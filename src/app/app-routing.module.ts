import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegistrationComponent, NotFoundPageComponent } from './auth/containers';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: EmployeeRegistrationComponent },
  { path: 'notFound', component: NotFoundPageComponent},
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees/employee.module').then((m) => m.EmployeesModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: { title: 'Not found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
