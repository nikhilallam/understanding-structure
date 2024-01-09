import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSearchTerm } from '../actions/search-employee.action';

@Component({
  selector: 'app-parent',
  template: `
    <input type="text" (input)="onSearchInput($event.target.value)" placeholder="Search" />
    <app-child></app-child>
  `,
})
export class ParentComponent {
  constructor(private store: Store) {}

  onSearchInput(term: string): void {
    this.store.dispatch(setSearchTerm({ term }));
  }
}
