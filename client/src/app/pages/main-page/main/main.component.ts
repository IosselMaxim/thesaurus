import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MENU} from '../../../../app-assets/constants/menu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  menu = MENU;

  constructor() { }

  ngOnInit(): void {
  }

}
