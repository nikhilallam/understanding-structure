import { createAction, props } from '@ngrx/store';
import { IUser } from '../models/user.model';

export const submitForm = createAction('[Employee Registration] Submit Form', props<{ credentials: IUser }>());
export const submitFormSuccess = createAction('[Employee Registration] Submit Form Success');
export const submitFormFailure = createAction('[EMployee Registration] Submit Form Failure', props<{ error: any }>());
