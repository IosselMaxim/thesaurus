import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
