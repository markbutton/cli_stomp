import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from 'stompjs';

import { Alarm } from '../../models/alarm';
import { STOMPService } from '../../services/stomp';
import { ConfigService } from '../../services/config/config.service';

import {MdDialog, MdDialogRef, MdDialogContainer, MdDialogConfig} from '@angular/material';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css'],
  providers: [STOMPService]
})
export class AlarmsComponent implements OnInit, OnDestroy {

  public dialogRef: MdDialogRef<AlarmsComponent>;

  // Stream of messages
  public messages: Observable<Message>;

  // Array of historic message (bodies)
  public alarms: Alarm[]  = [];

  // Solected alarm
  public selectedAlarm: Alarm;

  private _alarm: Alarm;

  private _alarmJson: String;

  // A count of messages received
  public count: number = 0;

  private _counter: number = 1;

  // Dialog
  public lastDialogResult: string;


  /** Constructor */
  constructor(private _stompService: STOMPService,
    private _configService: ConfigService) { }

  ngOnInit() {
        // Get configuration from config service...
    this._configService.getConfig('api/config.json').then(
      config => {
        // ... then pass it to (and connect) STOMP:
        this._stompService.configure(config);
        this._stompService.try_connect().then(this.on_connect);
      }
    );
  }

  ngOnDestroy() {
    this._stompService.disconnect();
  }

  /** Callback on_connect to queue */
  public on_connect = () => {

    // Store local reference to Observable
    // for use with template ( | async )
    this.messages = this._stompService.messages;

    // Subscribe a function to be run on_next message
    this.messages.subscribe(this.on_next);
  }

  /** Consume a message from the _stompService */
  public on_next = (message: Message) => {

    // Store message in "historic messages" queue
    //this.mq.push(message.body + '\n');

    // Message body json string
    //this._alarmJson = JSON.parse(message.body);

    // Message Body JSon
    this._alarm = JSON.parse(message.body);
    console.log(this._alarm);


    // Store alarms in "historic alarms" queue
    this.alarms.push(this._alarm);

    // Count it
    this.count++;

    // Log it to the console
    console.log(this.messages);
  }

}
