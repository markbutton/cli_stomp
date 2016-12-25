import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Message } from 'stompjs';
import { UUID } from 'angular2-uuid';

import { STOMPService, STOMPState } from '../services/stomp';
import { ConfigService } from '../services/config/config.service';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { List } from 'immutable';
import { Alert } from '../models/alert';

@Injectable()
export class AlertStore {
    // Stream of messages
    public messages: Observable<Message>;
    // Stream of observable alerts
    private _alerts: BehaviorSubject<List<Alert>> = new BehaviorSubject(List([]));

    get alerts() {
        return this._alerts;
    }
    // Stream of connection state
    public state: Observable<string>;
    // Local alert variable
    private _alert: Alert;
    /** This class is mutable, we need to create a single connection
        to the STOMP server but we may need multiple instantiations
        so share these observable references in the constructor...   **/
    constructor(private _stompService: STOMPService,
        private _configService: ConfigService,
        private _toasterService: ToasterService) {
        // Store local references to Observables
        // for use with template ( | async )
        this.state = this._stompService.state
            .map((state: number) => STOMPState[state]);
        this.messages = this._stompService.messages;
    }
    /** Public method for connecting to STOMP server **/
    public connectStomp() {
        // Get configuration from config service...
        // Make sure this is only called once
        this._configService.getConfig('api/config.json').then(
            config => {
                // ... then pass it to (and connect) STOMP:
                this._stompService.configure(config);
                this._stompService.try_connect().then(this.on_connect);
            }
        );
    }

    public disconnectStomp() {
        // Disconnect from JMS Server when app is closed
        this._stompService.disconnect();
    }

    /** Callback on_connect to queue **/
    public on_connect = () => {
        // Subscribe a function to be run on_next message
        this.messages.subscribe(this.on_next);
    }

    /** Consume a message from the _stompService **/
    public on_next = (message: Message) => {
        // Message Body JSon
        this._alert = JSON.parse(message.body);
        // Store alerts in "Alert Store"
        this.addAlert(this._alert);
        // Pop the toaster
        this.popToast(this._alert);
        // Log it to the console
        console.log(this.messages);
    }

    /** Alert Store Actions **/
    public addAlert(alert: Alert) {
        this._alerts.next(this.alerts.getValue().push(alert));
    }

    public deleteAlert(deletedAlert: Alert) {
        let alerts: List<Alert> = this._alerts.getValue();
        let index = alerts.findIndex((alert) => alert.id === deletedAlert.id);
        this._alerts.next(alerts.delete(index));
    }

    public sendAlert(alert: Alert) {
        console.log('Send Alert: ' + alert.message);
        this._stompService.publish(JSON.stringify(alert));
    }

    public getAlertId(): string {
        let uuid = UUID.UUID();
        return uuid;
    }

    /* Open the alert with a toaster */
    private popToast(alert: Alert): void {
        this._toasterService.pop(alert.type, alert.title, alert.message);
    }

}
