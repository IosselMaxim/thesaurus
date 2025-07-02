import {ChangeDetectionStrategy, Component} from '@angular/core';
import {GAMES} from '../../../constants/games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesComponent {
  public games = GAMES;
}
