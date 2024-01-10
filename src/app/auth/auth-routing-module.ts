import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './components';
import { EmployeeRegistrationContainerComponent } from './containers';

const routes: Routes = [
    { path: 'login', component: EmployeeRegistrationContainerComponent },
    { path: 'notFound', component: NotFoundPageComponent },
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
