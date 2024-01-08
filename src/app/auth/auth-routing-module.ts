import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegistrationComponent, NotFoundPageComponent } from './containers';

const routes: Routes = [
    { path: 'login', component: EmployeeRegistrationComponent },
    { path: 'notFound', component: NotFoundPageComponent},
    {
        path: '**',
        component: NotFoundPageComponent,
        data: { title: 'Not found' },
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
