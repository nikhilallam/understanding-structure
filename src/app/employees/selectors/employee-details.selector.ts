import { createSelector } from "@ngrx/store";
import { baseEmployeesState } from "../reducers";

export const selectEmployeeDetails = createSelector(
    baseEmployeesState,
    (state) => state.employeeDetails.employeeDetails
  );
  
  export const selectEmployeeDetailsLoading = createSelector(
    baseEmployeesState,
    (state) => state.employeeDetails.loading
  );
  
  export const selectEmployeeDetailsError = createSelector(
    baseEmployeesState,
    (state) => state.employeeDetails.error
  );
  