import { Component, OnInit, OnDestroy } from '@angular/core';

import { STOMPService } from '../../services/stomp';
import { ConfigService } from '../../services/config/config.service';

import { ALARMS } from '../../../data/mock-alarms';
import { Alarm } from '../../models/alarm';

@Component({
  selector: 'app-alarm-sender',
  templateUrl: './alarm-sender.component.html',
  styleUrls: ['./alarm-sender.component.css'],
  providers: [STOMPService]
})

export class AlarmSenderComponent implements OnInit, OnDestroy {

  // A count of messages received
  private _counter: number = 1;

  // A copy of the mock data
  private _mockAlarms: Alarm[] = ALARMS;
  private _mockAlarm: Alarm;

  /** Constructor */
  constructor(private _stompService: STOMPService,
    private _configService: ConfigService) { }

  ngOnInit() {
        // Get configuration from config service...
    this._configService.getConfig('api/config.json').then(
      config => {
        // ... then pass it to (and connect) STOMP:
        this._stompService.configure(config);
        this._stompService.try_connect();
      }
    );
  }

  ngOnDestroy() {
    this._stompService.disconnect();
  }

  public onClick() {
    this._mockAlarm = this._mockAlarms.find(alarm => alarm.id === this._counter);
    this._stompService.publish(JSON.stringify(this._mockAlarm));
    this._counter++;
  }

}
