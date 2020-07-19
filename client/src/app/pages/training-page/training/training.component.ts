import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/operators';
import {Training} from '../../../interfaces/training';
import {TRAININGS} from '../../../constants/trainings';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingComponent implements OnInit {
  training: Training;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(pluck('id'))
      .subscribe(id => {
          this.training = TRAININGS.find(t => t._id === id);
        });
  }

}
