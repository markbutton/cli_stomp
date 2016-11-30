import { Component, OnInit, OnDestroy, ViewContainerRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { AlarmCountService } from '../../services/alarm/alarm-count.service';

import { MdDialog, MdDialogRef, MdDialogContainer, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlarmComponent implements OnInit, OnDestroy {
   @Input() count: number;

  // Stream of count
  // public count: Observable<number>;

  // subscription
  public subscription: Subscription;

  public lastDialogResult: string;


  /* Constructor */
  constructor() { }

  ngOnInit() {
    //this.subscription = this._alarmCountService.count.subscribe(this.on_success, this.on_failure, this.on_complete);
    //this.count = this._alarmCountService.count;
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    //this.subscription.unsubscribe();
  }


  /*
   openDialog() {
     let dialogRef = this._dialog.open(AlarmsComponent);
     dialogRef.afterClosed().subscribe(result => {
       this.lastDialogResult = result;
     });
   }
   */
}
