import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ToasterModule, ToasterService } from 'angular2-toaster/angular2-toaster';

import { AppComponent } from './app.component';
import { AlertComponent } from './components/alerts/alert.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AlertSenderComponent } from './components/alerts/alert-sender.component';
import { ContactComponent } from './components/contacts/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { FeedComponent } from './components/feed/feed.component';
import { StatusComponent } from './components/status/status.component';

import { ConfigService } from './services/config/config.service';
import { ContactService } from './services/mongo/contact.service';
import { FeedService } from './services/rss/feed.service';
import { STOMPService } from './services/stomp/stomp.service';

import { AlertStore } from './store/alert.store';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AlertSenderComponent,
    AlertComponent,
    AlertsComponent,
    DemoComponent,
    ContactComponent,
    FeedComponent,
    StatusComponent,
    StripHtmlTagsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    DropdownModule,
    MaterialModule.forRoot(),
    ToasterModule
  ],
  providers: [ConfigService, AlertStore, ToasterService, ContactService, STOMPService, FeedService],
  entryComponents: [AlertsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
