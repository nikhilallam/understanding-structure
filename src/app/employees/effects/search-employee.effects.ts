import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SearchTermActions } from '../actions';
import { SearchService } from '../services/search.service';

@Injectable()
export class SearchTermEffects {
  searchTerm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchTermActions.setSearchTerm),
      switchMap((action) => {
        return of(this.searchService.getSearchTerm(action.searchTerm)).pipe(
            map((employees) => SearchTermActions.setSearchTermSuccess({ employees })),
            catchError((error) => of(SearchTermActions.setSearchTermFailure({error})))
        )
      } 
      )
    )
  );

  constructor(private actions$: Actions, private searchService: SearchService) {}
}
