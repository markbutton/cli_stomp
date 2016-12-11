import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { ToasterModule, ToasterService } from 'angular2-toaster/angular2-toaster';

import { AppComponent } from './app.component';
import { AlarmSenderComponent } from './components/alarm-sender/alarm-sender.component';
import { StatusComponent } from './components/status/status.component';
import { AlarmComponent } from './components/alarm/alarm.component';
import { AlarmsComponent } from './components/alarms/alarms.component';
import { ConfigService } from './services/config/config.service';
import { AlarmStore } from './store/alarm.store';
import { DemoComponent } from './components/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    AlarmSenderComponent,
    StatusComponent,
    AlarmComponent,
    AlarmsComponent,
    PolymerElement('paper-toast'),
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DropdownModule,
    MaterialModule.forRoot(),
    ToasterModule
  ],
  providers: [ConfigService, AlarmStore, ToasterService],
  entryComponents: [AlarmsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
