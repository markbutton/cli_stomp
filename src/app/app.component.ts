import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertStore } from './store/alert.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Stomp - Angular-CLI - Mean Stack';
  isDarkTheme: boolean = false;

  /** Constructor **/
  constructor(private _alertStore: AlertStore) { }

  ngOnInit() {
    // Subscribe to the JMS Server
    this._alertStore.connectStomp();
  }

  ngOnDestroy() {
    // Unsubscribe from JMS Server
    this._alertStore.disconnectStomp();
  }
}
