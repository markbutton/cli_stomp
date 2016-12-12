import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from 'stompjs';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { Alert } from '../../models/alert';
import { AlertStore } from '../../store/alert.store';
import { STOMPService } from '../../services/stomp';
import { ConfigService } from '../../services/config/config.service';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  providers: [STOMPService]
})
export class AlertsComponent implements OnInit, OnDestroy {

  // Stream of messages
  public messages: Observable<Message>;

  // Stream of count
  public alerts: Observable<any>;

  // Selected alert
  public selectedAlert: Alert;

  // Local alert variable
  private _alert: Alert;

  /** Constructor **/
  constructor(private _stompService: STOMPService,
    private _configService: ConfigService,
    private _alertStore: AlertStore,
    private _toasterService: ToasterService) { }

  ngOnInit() {
    // Subscribe to the Model
    this.alerts = this._alertStore.alerts;
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
    this._alert = JSON.parse(message.body);

    // Store alerts in "Alert Store"
    this._alertStore.addAlert(this._alert);

    // Pop the toaster
    this.popToast(this._alert);

    // Log it to the console
    console.log(this.messages);
  }

  /* Open the alert with a toaster */
  public popToast(alert: Alert): void {
    this._toasterService.pop(alert.type, alert.title, alert.message);
  }

}
