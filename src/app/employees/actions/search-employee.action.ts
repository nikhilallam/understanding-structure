import { createAction, props } from '@ngrx/store';
import { ISearchTermRequest } from '../models/search-term.request.model';
import { IEmployee } from '../models';

export const setSearchTerm = createAction('[Search] Search Term', props<{ searchTerm: ISearchTermRequest }>());
export const setSearchTermSuccess = createAction('[Search] Search Term Success', props<{ employees: IEmployee[] }>());
export const setSearchTermFailure = createAction('[Search] Set Search Term', props<{ error: string }>());
