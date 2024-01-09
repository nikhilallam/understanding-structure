import { createReducer, on } from '@ngrx/store';
import { SearchTermActions } from '../actions';
import { IEmployee } from '../models';

export interface SearchTermState {
  employees: IEmployee[],
  error: any
}
export const intialSearchTermState: SearchTermState = {
  employees: [],
  error: null
}

export const searchReducer = createReducer<SearchTermState | null>(
  intialSearchTermState,
  on(SearchTermActions.setSearchTermSuccess, (_, { employees }) =>  ({ employees, error: null})),
  on(SearchTermActions.setSearchTermFailure, (_, { error }) => ({ employees: [], error: error }))
);