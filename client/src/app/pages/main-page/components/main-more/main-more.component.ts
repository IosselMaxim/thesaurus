import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-more',
  templateUrl: './main-more.component.html',
  styleUrls: ['./main-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
