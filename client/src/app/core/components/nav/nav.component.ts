import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MENU} from '../../../../app-assets/constants/menu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {

  constructor(private router: Router) {}
  menu = MENU;

  get isMainPage() {
    return this.router.url === '/';
  }
}
