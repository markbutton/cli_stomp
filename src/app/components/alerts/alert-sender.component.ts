import { Component, OnInit, OnDestroy } from '@angular/core';

import { STOMPService } from '../../services/stomp';
import { ConfigService } from '../../services/config/config.service';

import { ALERTS } from '../../../data/mock-alerts';
import { Alert } from '../../models/alert';

@Component({
  selector: 'app-alert-sender',
  templateUrl: './alert-sender.component.html',
  styleUrls: ['./alert-sender.component.css'],
  providers: [STOMPService]
})

export class AlertSenderComponent implements OnInit, OnDestroy {

  // A count of messages received
  private _counter: number = 1;

  // A copy of the mock data
  private _mockAlerts: Alert[] = ALERTS;
  private _mockAlert: Alert;

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
    this._mockAlert = this._mockAlerts.find(alert => alert.id === this._counter);
    this._stompService.publish(JSON.stringify(this._mockAlert));
    this._counter++;
  }

}
