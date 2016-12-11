import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from 'stompjs';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { Alarm } from '../../models/alarm';
import { AlarmStore } from '../../store/alarm.store';
import { STOMPService } from '../../services/stomp';
import { ConfigService } from '../../services/config/config.service';


@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css'],
  providers: [STOMPService]
})
export class AlarmsComponent implements OnInit, OnDestroy {

  // Stream of messages
  public messages: Observable<Message>;

  // Stream of count
  public alarms: Observable<any>;

  // Selected alarm
  public selectedAlarm: Alarm;

  // Local alarm variable
  private _alarm: Alarm;

  /** Constructor **/
  constructor(private _stompService: STOMPService,
    private _configService: ConfigService, 
    private _alarmStore: AlarmStore, 
    private _toasterService: ToasterService) { }

  ngOnInit() {
    // Subscribe to the Model
    this.alarms = this._alarmStore.alarms;
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
    // Disconnect from the STOMP service when this class is destroyed
    this._stompService.disconnect();
  }

  /** Callback on_connect to queue **/
  public on_connect = () => {

    // Store local reference to Observable
    // for use with template ( | async )
    this.messages = this._stompService.messages;

    // Subscribe a function to be run on_next message
    this.messages.subscribe(this.on_next);
  }

  /** Consume a message from the _stompService **/
  public on_next = (message: Message) => {

    // Message Body JSon
    this._alarm = JSON.parse(message.body);
    // console.log(this._alarm);

    // Store alarms in "Alarm Store"
    this._alarmStore.addAlarm(this._alarm);

    // Pop the toaster
    this.popToast(this._alarm);

    // Log it to the console
    console.log(this.messages);
  }

    public popToast(alarm: Alarm):void {
      this._toasterService.pop(alarm.type, alarm.title, alarm.message);
  }

}
