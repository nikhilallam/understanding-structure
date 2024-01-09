import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';
import { GetEmployeesState, getEmployeesReducer } from './get-employees.reducer';
import { EmployeeDetailsState, employeeDetailsReducer } from './get-employee-details.reducer';
import { SearchTermState, searchReducer } from './search-employee.reducer';

export * from './get-employees.reducer';
export * from './get-employee-details.reducer';

export const selectEmployeeState = createFeatureSelector<GetEmployeesState>('employees');
export const selectEmployeeDetailState = createFeatureSelector<EmployeeDetailsState>('employeeDetails');

export interface EmployeeState {
  "employees": GetEmployeesState,
  "employeeDetails": EmployeeDetailsState,
  "searchTerm": SearchTermState
}

export function reducers(state: EmployeeState | undefined, action: Action) {
  return combineReducers({
    "employees": getEmployeesReducer,
    "employeeDetails": employeeDetailsReducer,
    "searchTerm": searchReducer
  })(state, action);
}

export const getEmployeesBaseState = createFeatureSelector<EmployeeState>("employeesBase");

export const baseEmployeesState = createSelector(
  getEmployeesBaseState, (state) => {
    return state
  }
)