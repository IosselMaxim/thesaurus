import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MENU} from '../../../app-assets/constants/menu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  menu = MENU;
}
