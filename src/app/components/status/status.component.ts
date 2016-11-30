import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { STOMPService, STOMPState } from '../../services/stomp';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, OnDestroy {

  private state: Observable<string>;

  /** Constructor */
  constructor(private _stompService: STOMPService) { }

  ngOnInit() {
    console.log('Status init');
    this.state = this._stompService.state
      .map((state: number) => STOMPState[state]);
  }

    ngOnDestroy() {
    this._stompService.disconnect();
  }
}