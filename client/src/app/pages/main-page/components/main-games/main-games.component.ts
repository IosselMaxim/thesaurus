import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-main-games',
  templateUrl: './main-games.component.html',
  styleUrls: ['./main-games.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainGamesComponent {}
