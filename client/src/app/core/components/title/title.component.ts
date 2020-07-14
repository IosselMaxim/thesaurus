import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {TitleService} from '../../../services/title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit {

  constructor(public titleService: TitleService) { }

  ngOnInit(): void {
  }

}
