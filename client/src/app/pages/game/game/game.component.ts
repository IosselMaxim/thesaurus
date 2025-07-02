import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {pluck} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {GAMES} from '../../../constants/games';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {
  game: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(pluck('id'))
      .subscribe(id => {
        this.game = GAMES.find(g => g._id === id);
      });
  }

}
