import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './core/components/nav/nav.component';
import {SharedModule} from './shared/shared.module';
import {TitleService} from './services/title.service';
import {FooterComponent} from './footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [TitleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
