import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRegistrationComponent, NotFoundPageComponent } from './containers';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { employeeRegistrationReducer } from './reducers/employee-registration.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeRegistrationEffects } from './effects/employee-registration.effects';
import { AuthRoutingModule } from './auth-routing-module';

export const COMPONENTS = [
]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule
  ],
  exports: COMPONENTS
})
export class AuthModule { }
