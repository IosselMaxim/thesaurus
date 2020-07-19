import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-clients',
  templateUrl: './main-clients.component.html',
  styleUrls: ['./main-clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainClientsComponent implements OnInit {

  clients = ['burda', 'camel', 'guta', 'jaguar', 'mers', 'nezav', 'rolf'];

  constructor() { }

  ngOnInit(): void {
  }

}
