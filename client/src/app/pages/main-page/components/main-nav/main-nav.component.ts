import {Component, ChangeDetectionStrategy} from '@angular/core';
import {MENU} from '../../../../../app-assets/constants/menu';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavComponent {
  menu = MENU;
}
