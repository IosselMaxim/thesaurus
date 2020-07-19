import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {TRAINERS} from '../../../constants/trainers';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainersComponent implements OnInit {
  trainers = TRAINERS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
