import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-customer-logos',
  templateUrl: './customer-logos.component.html',
  styleUrls: ['./customer-logos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerLogosComponent {
  @Input() clients = [];
  @Input() imageWidth = 13;
}
