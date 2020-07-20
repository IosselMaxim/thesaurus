import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {pluck} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Trainer} from '../../../interfaces/trainer';
import {TRAINERS} from '../../../constants/trainers';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainerComponent implements OnInit {
  trainer: Trainer;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(pluck('id'))
      .subscribe(id => {
        this.trainer = TRAINERS.find(t => t._id === id);
      });
  }

}
