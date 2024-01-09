import { createSelector } from "@ngrx/store";
import { baseEmployeesState } from "../reducers";

export const selectSearchTerm = createSelector(baseEmployeesState, 
    (state) => state.searchTerm.employees)

export const selectSearchTermSuccess = createSelector(baseEmployeesState, 
    (state) => state.searchTerm.employees)

export const selectSearchTermFailure = createSelector(baseEmployeesState, 
    (state) => state.searchTerm.error)