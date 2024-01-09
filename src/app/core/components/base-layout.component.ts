import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'base-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div><h1>Understanding structure</h1></div>
  `,
})
export class BaseLayoutComponent {
    
}
