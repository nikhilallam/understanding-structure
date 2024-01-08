import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegistrationComponent, NotFoundPageComponent } from './auth/containers';

const routes: Routes = [
  { path: 'login', component: EmployeeRegistrationComponent },
  { path: 'notFound', component: NotFoundPageComponent},
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees/employee.module').then((m) => m.EmployeesModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
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
