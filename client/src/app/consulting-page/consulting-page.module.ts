import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultingPageRoutingModule } from './consulting-page-routing.module';
import { ConsultingComponent } from './consulting/consulting.component';


@NgModule({
  declarations: [ConsultingComponent],
  imports: [
    CommonModule,
    ConsultingPageRoutingModule
  ]
})
export class ConsultingPageModule { }
