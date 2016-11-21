import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent, DialogContent } from './app.component';
import { RawDataComponent } from './components/rawdata/rawdata.component';
import { StatusComponent } from './components/status/status.component';

import { ConfigService } from './services/config/config.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogContent,
    RawDataComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ConfigService],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
