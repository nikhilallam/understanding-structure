import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeDetailContainer, EmployeesContainer } from './containers';
import { reducers } from './reducers';
import { GetEmployeesEffects } from './effects';
import { EmployeeDetailsEffects } from './effects';
import { EmployeeListComponent, EmployeeDetailComponent } from './components';
import { EmployeeRoutingModule } from './employee-routing.module';
import { AgeWithSuffixPipe } from './pipes/age.pipe';
import { HoverBackgroundDirective } from './directives/hover-background.directive';
import { SearchTermEffects } from './effects/search-employee.effects';

@NgModule({
  declarations: [
    EmployeeDetailContainer, 
    EmployeesContainer, 
    EmployeeListComponent, 
    EmployeeDetailComponent,
    AgeWithSuffixPipe, 
    HoverBackgroundDirective
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    StoreModule.forFeature("employeesBase", reducers),
    EffectsModule.forFeature([GetEmployeesEffects, EmployeeDetailsEffects, SearchTermEffects]),
  ],
  exports: [
    EmployeeDetailContainer, 
    EmployeeDetailContainer, 
    EmployeeListComponent, 
    EmployeeDetailComponent
  ]
})
export class EmployeesModule { }
