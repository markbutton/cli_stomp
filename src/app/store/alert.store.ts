import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {List} from 'immutable';

import { Alert } from '../models/alert';

@Injectable()
export class AlertStore {
    private _alerts: BehaviorSubject<List<Alert>> = new BehaviorSubject( List([]) );

    get alerts() {
        return this._alerts;
    }

    public addAlert(alert: Alert) {
        this._alerts.next(this.alerts.getValue().push(alert));
    }

    public deleteAlert(deletedAlert: Alert) {
        let alerts: List<Alert> = this._alerts.getValue();
        let index = alerts.findIndex( (alert) => alert.id === deletedAlert.id);
        this._alerts.next( alerts.delete(index) );
    }

}
