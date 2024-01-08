import { createAction, props } from '@ngrx/store';
import { IEmployee } from '../models';

export const getEmployees = createAction('[Get Employees] API');
export const getEmployeesSuccess = createAction('[Get Employees] API Success', props<{ employees: IEmployee[]} >());
export const getEmployeesFailure = createAction('[Get Employees] API Failure', props<{ error: any }>());
