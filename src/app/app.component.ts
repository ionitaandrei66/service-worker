import { Component } from '@angular/core';
import {NotificationService} from './notification.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private notificationService: NotificationService) {
    this.requestPermission();
    this.notificationService.listenToNotifications();
  }

  requestPermission(): void {
    this.notificationService.requestPermission();
  }

  triggerNotification(): void {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('Hello from Angular!');
      }
    });
  }

  sendMessage() {

  }
}
