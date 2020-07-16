import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MENU} from '../../../../app-assets/constants/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  menu = MENU;

}
