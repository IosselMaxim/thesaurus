import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactPageRoutingModule} from './contact-page-routing.module';
import {ContactComponent} from './contact/contact.component';
import {GtmService} from '../../services/gtm.service';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactPageRoutingModule
  ],
  providers: [GtmService]
})
export class ContactPageModule {
}
