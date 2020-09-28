import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactPageRoutingModule} from './contact-page-routing.module';
import {ContactComponent} from './contact/contact.component';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6CIcNym8sQRsXaJPQ1UhJGiAACMnI8y0'
    })
  ]
})
export class ContactPageModule {
}
