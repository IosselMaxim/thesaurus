import {Component, OnInit, ChangeDetectionStrategy, Input, ViewChild} from '@angular/core';
import {Training} from '../../../../interfaces/training';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-training-item',
  templateUrl: './training-item.component.html',
  styleUrls: ['./training-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingItemComponent implements OnInit {
  @ViewChild('dialogRef') dialogRef: any;

  @Input() training: Training;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(this.dialogRef, {maxWidth: '90%'});
  }

}
