import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private swPush: SwPush) { }

  requestPermission(): void {
    this.swPush.requestSubscription({
      serverPublicKey: 'BF5_Pq3gKIteQXxgwcvo9gBYZywSD2aeCrKUESGivA2awwZ8oD3Cs3YC5X_JmUQbTAmxITHSOWICwudNDMRScNQ'
    });
  }

  listenToNotifications() {
    this.swPush.messages.subscribe((message) => {
      console.log('Push message:', message);
    });
  }

}
