import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AlarmComponent {
   @Input() alarmCount: number;
}
