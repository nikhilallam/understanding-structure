import { createAction, props } from "@ngrx/store";

export const loggedIn = createAction('[Validate token] Submit Form Failure', props<{ token: string }>());
export const loggedInSuccess = createAction('[Validate token] User logged in');
export const loggedInFailure = createAction('[Validate token] Invalid user');
