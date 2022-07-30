
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ContactPageRoutingModule} from './contact-page-routing.module';
import {ContactComponent} from './contact/contact.component';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactPageRoutingModule
  ]
})
export class ContactPageModule {
}
