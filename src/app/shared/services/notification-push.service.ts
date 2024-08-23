import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: "root",
})
export class NotificationPushService {
  constructor(private notification: NzNotificationService) {}

  // Notification alerte
  showNotification(type:string,title?:string, message?: string) {
    this.notification.create(
      type,
      title,
      message
    );
  }
}
