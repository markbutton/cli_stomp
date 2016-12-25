import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Alert } from '../../models/alert';
import { AlertStore } from '../../store/alert.store';
import { List } from 'immutable';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  providers: [AlertStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertsComponent implements OnInit {

  // Stream of messages
  private messages: Observable<any>;

  /** Constructor **/
  constructor(private _alertStore: AlertStore) { }

  ngOnInit() {
    // Subscribe to the Model
    this.messages = this._alertStore.messages;
  }

}
