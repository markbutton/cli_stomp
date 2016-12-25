import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AlertStore } from '../../store/alert.store';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent implements OnInit {

  private state: Observable<string>;

  /** Constructor */
  constructor(private _alertStore: AlertStore) { }

    ngOnInit() {
    // Subscribe to the Model
    this.state = this._alertStore.state;
  }

}
