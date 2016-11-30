import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AlarmCount {
  public count: number;
  // Observable alarmCount source
  private _countSource = new BehaviorSubject<number>(0);
  // Observable alarmCount stream
  count$ = this._countSource.asObservable();


  // service command
  changeCount(number) {
    this._countSource.next(number);
  }
}
