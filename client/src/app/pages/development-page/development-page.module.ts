import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopmentPageRoutingModule } from './development-page-routing.module';
import { DevelopmentComponent } from './development/development.component';


@NgModule({
  declarations: [DevelopmentComponent],
  imports: [
    CommonModule,
    DevelopmentPageRoutingModule
  ]
})
export class DevelopmentPageModule { }
