import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TRAINERS} from '../../../constants/trainers';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent implements OnInit{
  clientLogos = [];
  trainers = TRAINERS;

  ngOnInit(): void {
    this.clientLogos = this.getClients();
  }

  getClients() {
    let arr = [];
    this.trainers.forEach(t => arr = [...arr, ...t.clients]);
    return arr;
  }

}
