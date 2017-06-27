/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { StatusComponent } from '../../components/status/status.component';
import { STOMPService } from '../../services/stomp';
import { ConfigService } from '../../services/config/config.service';
import { AlertSenderComponent } from './alert-sender.component';

describe('AlertSenderComponent', () => {
  let component: AlertSenderComponent;
  let fixture: ComponentFixture<AlertSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AlertSenderComponent,
        StatusComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [
        STOMPService,
        ConfigService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
