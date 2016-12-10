import { Alarm } from './alarm';

export class AlarmModel {
    constructor(public count: number, public alarms: Array<Alarm>) { }
}
