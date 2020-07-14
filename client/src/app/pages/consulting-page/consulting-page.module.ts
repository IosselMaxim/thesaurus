import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConsultingPageRoutingModule} from './consulting-page-routing.module';
import {ConsultingComponent} from './consulting/consulting.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';


@NgModule({
  declarations: [ConsultingComponent],
  imports: [
    CommonModule,
    ConsultingPageRoutingModule,
    PerfectScrollbarModule
  ]
})
export class ConsultingPageModule {
}
