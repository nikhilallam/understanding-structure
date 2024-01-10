import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './auth/components';
import { EmployeeRegistrationContainerComponent } from './auth/containers';
import { AuthGuard } from './auth/services/auth.guard';
import { RedirectGuard } from './auth/services/redirect.guard';

const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full', },
  { path: 'login', component: EmployeeRegistrationContainerComponent, canActivate: [RedirectGuard]},
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
