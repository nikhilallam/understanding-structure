import { createAction, props } from "@ngrx/store";
import { IEmployee } from "../models";

export const getEmployeeDetails = createAction('[Get Employee Details] API', props< { id: number } >());
export const getEmployeeDetailsSuccess = createAction('[Get Employee Details] API Success', props<{ employeeDetails: IEmployee} >());
export const getEmployeeDetailsFailure = createAction('[Get Employee Details] API Failure', props<{ error: any }>());
