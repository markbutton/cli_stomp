import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlarmCountService {

    // create observable property
    private _count: BehaviorSubject<number> = new BehaviorSubject(0);
    public count: Observable<number> = this._count.asObservable();

    changeCount(number) {
        console.log('change number called, the value is: ' + number);
        this._count.next(number);
    }
}
