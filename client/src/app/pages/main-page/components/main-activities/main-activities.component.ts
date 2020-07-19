import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-activities',
  templateUrl: './main-activities.component.html',
  styleUrls: ['./main-activities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
