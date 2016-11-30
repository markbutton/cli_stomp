import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Stomp - Angular-CLI - Angular Material'; 
  isDarkTheme: boolean = false;
  public myValue: number = 0;
  myValueChange(event) {
    console.log('Change Event Fired: ' + event);
  }
}
