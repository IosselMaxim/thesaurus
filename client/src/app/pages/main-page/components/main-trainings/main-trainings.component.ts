import { Component, ChangeDetectionStrategy } from '@angular/core';
import {TRAININGS} from '../../../../constants/trainings';
import {Training} from '../../../../interfaces/training';

@Component({
  selector: 'app-main-trainings',
  templateUrl: './main-trainings.component.html',
  styleUrls: ['./main-trainings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainTrainingsComponent {
  // tslint:disable-next-line:variable-name
  _trainings: Training[] = TRAININGS;

  trainings = [
    {
      title: 'ТРЕНИНГИ ДЛЯ РУКОВОДИТЕЛЕЙ',
      img: 'managers',
      trainingsList: this.getTrainings('manager')
    },
    {
      title: 'ТРЕНИНГИ ДЛЯ СЕГМЕНТА B2B',
      img: 'b2b',
      trainingsList: this.getTrainings('b2b')
    },
    {
      title: 'ТРЕНИНГИ ДЛЯ СЕГМЕНТА B2C',
      img: 'b2c',
      trainingsList: this.getTrainings('b2c')
    },
  ];

  getTrainings(direct: string) {
    return this._trainings.filter(t => t.audience.img === direct).slice(0, 2);
  }

}
