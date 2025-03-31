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


  rezultat: number | null = null;

  sendInWorker() {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./calcule.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.rezultat = data;
        console.log(`Rezultatul din worker: ${data}`);
      };
      worker.postMessage({ numar: 42 });
    } else {
      console.warn('Worker nu este suportat în acest browser.');
    }
  }


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
