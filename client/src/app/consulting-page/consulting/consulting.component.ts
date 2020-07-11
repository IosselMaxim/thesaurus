import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsultingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
