import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import {List} from 'immutable';

import { Alarm } from '../models/alarm';

@Injectable()
export class AlarmStore {
    private _alarms: BehaviorSubject<List<any>> = new BehaviorSubject( List([]) );

    get alarms() {
        return this._alarms;
    }

    public addAlarm(alarm: Alarm) {
        this._alarms.next(this.alarms.getValue().push(alarm));
    }

    public deleteAlarm(deletedAlarm: Alarm) {
        let alarms: List<Alarm> = this._alarms.getValue();
        let index = alarms.findIndex( (alarm) => alarm.id === deletedAlarm.id);
        this._alarms.next( alarms.delete(index) );
    }

}
