import { createSelector } from "@ngrx/store";
import { baseEmployeesState } from "../reducers";

export const selectAllEmployees = createSelector(
    baseEmployeesState,
    (state) => {
      return state.employees.employees
    }
);
  
export const selectEmployeeLoading = createSelector(
    baseEmployeesState,
    (state) => state.employees.loading
);

export const selectEmployeeError = createSelector(
    baseEmployeesState,
    (state) => state.employees.error
);
  