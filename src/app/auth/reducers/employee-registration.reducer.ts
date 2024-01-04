import { createReducer, on } from '@ngrx/store';
import * as EmployeeRegistrationActions from '../actions/employee-registration.actions';

export interface EmployeeRegistrationState {
  submitting: boolean;
  submitted: boolean;
  error: any;
}

export const initialEmployeeRegistrationState: EmployeeRegistrationState = {
  submitting: false,
  submitted: false,
  error: null,
};

export const employeeRegistrationReducer = createReducer(
  initialEmployeeRegistrationState,
  on(EmployeeRegistrationActions.submitForm, (state) => ({ ...state, submitting: true, submitted: false, error: null })),
  on(EmployeeRegistrationActions.submitFormSuccess, (state) => ({ ...state, submitting: false, submitted: true })),
  on(EmployeeRegistrationActions.submitFormFailure, (state, { error }) => ({ ...state, submitting: false, error }))
);
