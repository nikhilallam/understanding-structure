import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailContainer, EmployeesContainer } from './containers';

const routes: Routes = [
    { path: '', component: EmployeesContainer },
    { path: ':id', component: EmployeeDetailContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
