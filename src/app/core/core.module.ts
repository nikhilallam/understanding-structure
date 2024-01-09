import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { BaseLayoutComponent } from './components';


@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule
  ],
  exports: [BaseLayoutComponent]
})

export class CoreModule { }
