import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';

import { AlarmsComponent } from '../alarms/alarms.component';

import {MdDialog, MdDialogRef, MdDialogContainer, MdDialogConfig} from '@angular/material';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements  OnInit, OnDestroy {

  // A count of messages received
  public count: number = 0;

  // Dialog
  public lastDialogResult: string;


    /** Constructor */
  constructor( private _dialog: MdDialog) { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  openDialog() {
    let dialogRef = this._dialog.open(AlarmsComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }
}
