import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {TRAININGS} from '../../../constants/trainings';
import {Training} from '../../../interfaces/training';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingsComponent implements OnInit {
  trainings: Training[] = TRAININGS;

  constructor() {
  }

  ngOnInit() {
  }

}
