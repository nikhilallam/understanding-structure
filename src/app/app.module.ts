import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { EmployeesModule } from './employees/employee.module';
import { employeeRegistrationReducer } from './auth/reducers/employee-registration.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeRegistrationEffects } from './auth/effects/employee-registration.effects';
import { EmployeeRegistrationComponent, NotFoundPageComponent } from './auth/containers';
import { ReactiveFormsModule } from '@angular/forms';

export const COMPONENTS = [
  EmployeeRegistrationComponent,
  NotFoundPageComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    AuthModule,
    EmployeesModule,
    ReactiveFormsModule,
    StoreModule.forRoot(employeeRegistrationReducer),
    EffectsModule.forRoot([EmployeeRegistrationEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
