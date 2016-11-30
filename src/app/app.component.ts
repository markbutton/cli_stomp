import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AlarmCountService } from './services/alarm/alarm-count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlarmCountService]
})

export class AppComponent {
  title = 'Stomp - Angular-CLI - Angular Material';
  isDarkTheme: boolean = false;
  public myValue: Observable<number>;

  /** Constructor **/
  constructor(private _alarmCountService: AlarmCountService) {
    this.myValue = this._alarmCountService.count;
  }
}
