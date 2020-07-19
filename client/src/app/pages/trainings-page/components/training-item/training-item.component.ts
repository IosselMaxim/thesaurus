import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Training} from '../../../../interfaces/training';

@Component({
  selector: 'app-training-item',
  templateUrl: './training-item.component.html',
  styleUrls: ['./training-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingItemComponent implements OnInit {

  @Input() training: Training;

  constructor() { }

  ngOnInit(): void {
  }

}
