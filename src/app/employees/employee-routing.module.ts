import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailContainer, EmployeesContainerComponent } from './containers';

const routes: Routes = [
    { path: '', component: EmployeesContainerComponent },
    { path: ':id', component: EmployeeDetailContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
