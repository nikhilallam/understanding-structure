import { createReducer, on } from '@ngrx/store';
import { setSearchTerm } from '../actions/search-employee.action';

export const searchReducer = createReducer<string | null>(
  '',
  on(setSearchTerm, (_, { term }) => term)
);
