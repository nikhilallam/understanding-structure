import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeDetailContainer, EmployeesContainerComponent } from './containers';
import { reducers } from './reducers';
import { GetEmployeesEffects } from './effects';
import { EmployeeDetailsEffects } from './effects';
import { EmployeeDetailComponent } from './components';
import { EmployeeRoutingModule } from './employee-routing.module';
import { AgeWithSuffixPipe } from './pipes/age.pipe';
import { HoverBackgroundDirective } from './directives/hover-background.directive';
import { SearchTermEffects } from './effects/search-employee.effects';
import { EmployeesListComponent } from './components/employee-list.component';

@NgModule({
  declarations: [
    EmployeeDetailContainer, 
    EmployeesContainerComponent,
    EmployeeDetailComponent,
    AgeWithSuffixPipe, 
    HoverBackgroundDirective,
    EmployeesListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    StoreModule.forFeature("employeesBase", reducers),
    EffectsModule.forFeature([GetEmployeesEffects, EmployeeDetailsEffects, SearchTermEffects]),
  ],
  exports: [ 
    EmployeeDetailContainer,
    EmployeeDetailComponent,
    EmployeesListComponent,
    EmployeesContainerComponent
  ]
})
export class EmployeesModule { }
