import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from 'stompjs';

import { Alarm } from '../../models/alarm';
import { AlarmCountService } from '../../services/alarm/alarm-count.service';
import { STOMPService } from '../../services/stomp';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css'],
  providers: [STOMPService, AlarmCountService]
})
export class AlarmsComponent implements OnInit, OnDestroy {

  @Output() counterChange = new EventEmitter();

  // Stream of messages
  public messages: Observable<Message>;

  // Stream of count
  private count: Observable<number>;

  // Array of historic message (bodies)
  public alarms: Alarm[] = [];

  // Solected alarm
  public selectedAlarm: Alarm;

  // Local alarm variable
  private _alarm: Alarm;

  // Local count variable
  private _count: number = 0;


  /** Constructor **/
  constructor(private _stompService: STOMPService,
    private _configService: ConfigService, private _alarmCountService: AlarmCountService) { }

  ngOnInit() {
    this.count = this._alarmCountService.count;
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

    // Message Body JSon
    this._alarm = JSON.parse(message.body);
    // console.log(this._alarm);

    // Store alarms in "historic alarms" queue
    this.alarms.push(this._alarm);

    // Count it
    this._count++;

    // Alaram Count Observable and Event
    this._alarmCountService.changeCount(this._count);

    this.counterChange.emit({
      value: this._count
    });

    // Log it to the console
    console.log(this.messages);
  }

  // Delete alarm from your local que
  deleteAlarm(alarm: Alarm, event: any): void {
    event.stopPropagation();
    let index = this.alarms.indexOf(alarm);
    this.alarms.splice(index, 1);
    this._count--;
    this._alarmCountService.changeCount(this._count);
  }

  // Get selected alarm from list
  onSelect(alarm: Alarm): void {
    this.selectedAlarm = alarm;
  }
}
