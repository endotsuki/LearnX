import type { Notification, NotificationType } from '@/types/notification';

export interface RealTimeEvent {
  type: NotificationType;
  recipientId: string;
  data: {
    title: string;
    message: string;
    senderId?: string;
    senderName?: string;
    relatedId?: string;
    action?: {
      label: string;
      url: string;
    };
  };
}

export class NotificationService {
  private static listeners: Map<string, (notification: Omit<Notification, 'id' | 'createdAt'>) => void> = new Map();
  private static mockConnected = false;

  /**
   * Subscribe to real-time notifications for a specific user
   */
  static subscribe(userId: string, callback: (notification: Omit<Notification, 'id' | 'createdAt'>) => void) {
    this.listeners.set(`${userId}_listener`, callback);

    // Initialize mock connection on first subscription
    if (!this.mockConnected) {
      this.initializeMockConnection();
      this.mockConnected = true;
    }

    return () => {
      this.listeners.delete(`${userId}_listener`);
    };
  }

  /**
   * Send a real-time notification to a user
   * In a real app, this would send to server/websocket
   */
  static notify(event: RealTimeEvent) {
    const listenerKey = `${event.recipientId}_listener`;
    const callback = this.listeners.get(listenerKey);

    if (callback) {
      callback({
        type: event.type,
        title: event.data.title,
        message: event.data.message,
        recipientId: event.recipientId,
        senderId: event.data.senderId,
        senderName: event.data.senderName,
        relatedId: event.data.relatedId,
        status: 'unread',
        action: event.data.action,
      });
    }
  }

  /**
   * Initialize mock connection to simulate real-time events
   * This simulates server sending notifications
   */
  private static initializeMockConnection() {
    // Simulate random system notifications
    setInterval(() => {
      const systemMessages = [
        {
          title: 'System Notification',
          message: 'Your assignment has been graded. Click to view feedback.',
          type: 'grade' as NotificationType,
        },
        {
          title: 'New Announcement',
          message: 'Your teacher posted a new class announcement.',
          type: 'announcement' as NotificationType,
        },
        {
          title: 'Assignment Due Soon',
          message: 'You have 2 days left to submit your assignment.',
          type: 'assignment' as NotificationType,
        },
      ];

      const randomMessage = systemMessages[Math.floor(Math.random() * systemMessages.length)];
      
      // Only send to students (60% chance)
      if (Math.random() < 0.6) {
        const allListeners = Array.from(this.listeners.entries()).filter(([key]) => key.endsWith('_listener'));
        if (allListeners.length > 0) {
          const [listenerKey, callback] = allListeners[Math.floor(Math.random() * allListeners.length)];
          const userId = listenerKey.replace('_listener', '');

          callback({
            type: randomMessage.type,
            title: randomMessage.title,
            message: randomMessage.message,
            recipientId: userId,
            senderName: 'System',
            status: 'unread',
          });
        }
      }
    }, 30000); // Every 30 seconds
  }

  /**
   * Disconnect from notifications
   */
  static disconnect() {
    this.listeners.clear();
    this.mockConnected = false;
  }
}
