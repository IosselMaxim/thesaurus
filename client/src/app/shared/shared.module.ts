import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleComponent} from '../core/components/title/title.component';
import {CustomerLogosComponent} from './customer-logos/customer-logos.component';
import {FooterComponent} from '../footer/footer.component';
import {RouterModule} from '@angular/router';
import { ApplyComponent } from './apply/apply.component';


@NgModule({
  declarations: [TitleComponent, CustomerLogosComponent, FooterComponent, ApplyComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [TitleComponent, FooterComponent, CustomerLogosComponent, ApplyComponent]
})
export class SharedModule {
}
