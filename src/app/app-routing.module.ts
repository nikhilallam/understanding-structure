import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';
import { NotFoundPageComponent } from './auth/components';
import { EmployeeRegistrationContainerComponent } from './auth/containers';

const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: EmployeeRegistrationContainerComponent },
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
