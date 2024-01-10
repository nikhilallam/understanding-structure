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
import { ReactiveFormsModule } from '@angular/forms';
import { BaseLayoutComponent } from './core/components';
import { MaterialModule } from './material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EmployeeRegistrationComponent, NotFoundPageComponent } from './auth/components';
import { EmployeeRegistrationContainerComponent } from './auth/containers';
import { LoggedInEffects } from './auth/effects/logged-in.effects';

export const COMPONENTS = [
  BaseLayoutComponent,
  EmployeeRegistrationContainerComponent,
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
    MaterialModule,
    StoreModule.forRoot(employeeRegistrationReducer),
    EffectsModule.forRoot([EmployeeRegistrationEffects, LoggedInEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
