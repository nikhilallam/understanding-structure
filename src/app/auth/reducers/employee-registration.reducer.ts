import { createReducer, on } from '@ngrx/store';
import * as EmployeeRegistrationActions from '../actions/employee-registration.actions';
import { LoggedInActions } from '../actions';

export interface EmployeeRegistrationState {
  submitting: boolean;
  submitted: boolean;
  error: any;
  loggedIn: boolean
}

export const initialEmployeeRegistrationState: EmployeeRegistrationState = {
  submitting: false,
  submitted: false,
  error: null,
  loggedIn: false
};

export const employeeRegistrationReducer = createReducer(
  initialEmployeeRegistrationState,
  on(EmployeeRegistrationActions.submitForm, (state) => ({ ...state, submitting: true, submitted: false, error: null })),
  on(EmployeeRegistrationActions.submitFormSuccess, (state) => ({ ...state, submitting: false, submitted: true, loggedIn: true })),
  on(EmployeeRegistrationActions.submitFormFailure, (state, { error }) => ({ ...state, submitting: false, error })),
  on(LoggedInActions.loggedInSuccess, (state) => ({ ...state, loggedIn: true })),
  on(LoggedInActions.loggedInFailure, (state) => ({ ...state, loggedIn: false }))
);
