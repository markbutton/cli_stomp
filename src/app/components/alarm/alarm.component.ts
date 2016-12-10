import { Component, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';

import { AlarmStore } from '../../store/alarm.store';
import { Alarm } from '../../models/alarm';

@Component({
    selector: 'app-alarm',
    templateUrl: './alarm.component.html',
    styleUrls: ['./alarm.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AlarmComponent {

    public disabled: boolean = false;
    public status: { isopen: boolean } = { isopen: false };

    constructor(private _alarmStore: AlarmStore) { }

    get size() {
        return this._alarmStore.alarms.map((alarms: List<Alarm>) => alarms.size);
    }

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    // Delete alarm from your local store
    public deleteAlarm(alarm: Alarm, event: any): void {
        event.stopPropagation();
        this._alarmStore.deleteAlarm(alarm);
  }

}
