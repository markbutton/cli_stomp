import { Component } from '@angular/core';

import { ALERTS } from '../../../data/mock-alerts';
import { Alert } from '../../models/alert';
import { AlertStore } from '../../store/alert.store';

@Component({
  selector: 'app-alert-sender',
  templateUrl: './alert-sender.component.html',
  styleUrls: ['./alert-sender.component.css']
})

export class AlertSenderComponent {

  // A count of messages received
  private _counter: number = 0;

  // A copy of the mock data
  private _mockAlerts: Alert[] = ALERTS;
  private _mockAlert: Alert;

  /** Constructor */
  constructor(private _alertStore: AlertStore) { }

  public onClick() {
    this._mockAlert = this._mockAlerts[this._counter];
    this._alertStore.sendAlert(this._mockAlert);
    this._counter++;
  }

}
