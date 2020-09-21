import {Component, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplyComponent {
  @ViewChild('dialogRef') dialogRef: any;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(this.dialogRef, {maxWidth: '90%'});
  }
  closeDialog() {
    this.dialog.closeAll();
  }

}
