import { createReducer, on } from "@ngrx/store"
import { IEmployee } from "../models"
import { GetEmployeeDetailsActions } from "../actions"

export interface EmployeeDetailsState {
    employeeDetails: IEmployee,
    loading: boolean,
    error: any
  }
  
export const initialEmployeeDetailsState: EmployeeDetailsState = {
    employeeDetails: {
        id: 0,
        employee_name: '',
        employee_salary: 0,
        employee_age: 0,
        profile_image: ''
    },
    loading: false,
    error: null
}

export const employeeDetailsReducer = createReducer(
    initialEmployeeDetailsState,
    on(GetEmployeeDetailsActions.getEmployeeDetails, (state) => ({ ...state, loading: true, error: null})),
    on(GetEmployeeDetailsActions.getEmployeeDetailsSuccess, (state, { employeeDetails }) => {
        return { ...state, employeeDetails }
    }
    ),
    on(GetEmployeeDetailsActions.getEmployeeDetailsFailure, (state, { error }) => ({ ...state, error }))
)