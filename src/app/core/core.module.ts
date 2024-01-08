import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './components/base-layout-component';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';


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
