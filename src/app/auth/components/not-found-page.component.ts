import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bc-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>Page not found</p>
  `
})
export class NotFoundPageComponent {}
