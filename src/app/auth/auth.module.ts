import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent, NotFoundPageComponent } from './containers';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material';
import { StoreModule } from '@ngrx/store';
import { employeeRegistrationReducer } from './reducers/employee-registration.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeRegistrationEffects } from './effects/employee-registration.effects';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent
]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    StoreModule.forRoot({ employeeRegistration: employeeRegistrationReducer }),
    EffectsModule.forRoot([EmployeeRegistrationEffects])
  ],
  exports: COMPONENTS
})
export class AuthModule { }
