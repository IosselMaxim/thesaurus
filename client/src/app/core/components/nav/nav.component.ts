import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  menu = [
    {
      url: '/',
      name: 'ГЛАВНАЯ',
      exact: false,
      disabled: false
    },
    {
      url: '/company',
      name: 'О КОМПАНИИ',
      exact: false,
      disabled: false
    },
    {
      url: '/trainings',
      name: 'ВСЕ ТРЕНИНГИ',
      exact: false,
      disabled: false
    },
    {
      url: '/trainers',
      name: 'ТРЕНЕРЫ',
      exact: false,
      disabled: false
    },
    {
      url: '/consulting',
      name: 'КОНСАЛТИНГ',
      exact: false,
      disabled: false
    },
    {
      url: '/contact',
      name: 'КОНТАКТЫ',
      exact: false,
      disabled: false
    },
  ];

}
