import { createReducer, on } from '@ngrx/store';
import { GetEmployeeDetailsActions, GetEmployeesActions } from '../actions';
import { IEmployee } from 'src/app/auth/models/employee';

export interface GetEmployeesState {
  employees: IEmployee[];
  loading: boolean;
  error: any;
}

export const initialGetEmployeesState: GetEmployeesState = {
  employees: [],
  loading: false,
  error: null
};

export const getEmployeesReducer = createReducer(
  initialGetEmployeesState,
  on(GetEmployeesActions.getEmployees, (state) => ({ ...state, loading:true, error: null })),
  on(GetEmployeesActions.getEmployeesSuccess, (state, { employees }) => ({ ...state, employees, error: null })),
  on(GetEmployeesActions.getEmployeesFailure, (state, { error }) => ({ ...state, error }))
);
