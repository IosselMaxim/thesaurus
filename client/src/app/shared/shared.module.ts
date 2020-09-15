import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleComponent} from '../core/components/title/title.component';
import {CustomerLogosComponent} from './customer-logos/customer-logos.component';
import {FooterComponent} from '../footer/footer.component';


@NgModule({
  declarations: [TitleComponent, CustomerLogosComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [TitleComponent, FooterComponent, CustomerLogosComponent]
})
export class SharedModule {
}
