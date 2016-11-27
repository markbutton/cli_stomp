import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AlarmSenderComponent } from './components/alarm-sender/alarm-sender.component';
import { StatusComponent } from './components/status/status.component';
import { AlarmComponent } from './components/alarm/alarm.component';
import { AlarmsComponent } from './components/alarms/alarms.component';
import { ConfigService } from './services/config/config.service';
import { DemoComponent } from './components/demo/demo.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AlarmSenderComponent,
    StatusComponent,
    AlarmComponent,
    AlarmsComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [ConfigService],
  entryComponents: [AlarmsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
