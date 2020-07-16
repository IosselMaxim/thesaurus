import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainComponent } from './main/main.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';


@NgModule({
  declarations: [MainComponent, MainNavComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
