import { Alert } from './alert';

export class AlertModel {
    constructor(public count: number, public alarms: Array<Alert>) { }
}
