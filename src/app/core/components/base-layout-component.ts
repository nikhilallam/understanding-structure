import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'base-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>Base layout</div>
  `,
})
export class BaseLayoutComponent {
    
}
