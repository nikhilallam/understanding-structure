import { createAction, props } from '@ngrx/store';
import { IEmployee } from '../models/employee';

export const submitForm = createAction('[Employee Registration] Submit Form', props<{ employee: IEmployee }>());
export const submitFormSuccess = createAction('[Employee Registration] Submit Form Success');
export const submitFormFailure = createAction('[EMployee Registration] Submit Form Failure', props<{ error: any }>());
