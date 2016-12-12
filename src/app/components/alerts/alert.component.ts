import { Component, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';

import { AlertStore } from '../../store/alert.store';
import { Alert } from '../../models/alert';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {

    public disabled: boolean = false;
    public status: { isopen: boolean } = { isopen: false };
    public selectedAlert: Alert;

    constructor(private _alertStore: AlertStore) { }

    get size() {
        return this._alertStore.alerts.map((alerts: List<Alert>) => alerts.size);
    }

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    // Delete alert from your local store
    public deleteAlert(alert: Alert, event: any): void {
        event.stopPropagation();
        this._alertStore.deleteAlert(alert);
    }

    // Get selected alert from list
    public onSelect(alert: Alert): void {
        this.selectedAlert = alert;
    }

}
