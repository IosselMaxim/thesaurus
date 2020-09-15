import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent implements OnInit {
  clientLogos = ['burda', 'camel', 'guta', 'jaguar', 'mers', 'nezav', 'rolf'];

  constructor() { }

  ngOnInit(): void {
  }

}
