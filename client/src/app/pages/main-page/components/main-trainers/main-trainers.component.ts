import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-trainers',
  templateUrl: './main-trainers.component.html',
  styleUrls: ['./main-trainers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainTrainersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
