import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainPageRoutingModule} from './main-page-routing.module';
import {MainComponent} from './main/main.component';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {MainTrainingsComponent} from './components/main-trainings/main-trainings.component';
import {MainMoreComponent} from './components/main-more/main-more.component';
import {MainClientsComponent} from './components/main-clients/main-clients.component';
import {MainGamesComponent} from './components/main-games/main-games.component';
import {MainActivitiesComponent} from './components/main-activities/main-activities.component';
import {MainConsultingComponent} from './components/main-consulting/main-consulting.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../../shared/shared.module';
import {ParticipationComponent} from './components/participation/participation.component';
import {GtmModule} from '../../directives/gtm.module';


@NgModule({
  declarations: [
    MainComponent,
    MainNavComponent,
    MainTrainingsComponent,
    MainMoreComponent,
    MainClientsComponent,
    MainGamesComponent,
    MainActivitiesComponent,
    MainConsultingComponent,
    ParticipationComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    GtmModule
  ]
})
export class MainPageModule {
}
