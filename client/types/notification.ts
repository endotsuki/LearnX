export type NotificationType = 'assignment' | 'grade' | 'announcement' | 'submission' | 'system' | 'message';
export type NotificationStatus = 'unread' | 'read';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  recipientId: string;
  senderId?: string;
  senderName?: string;
  relatedId?: string; // assignment/grade/class id
  status: NotificationStatus;
  createdAt: Date;
  action?: {
    label: string;
    url: string;
  };
}

export interface NotificationContext {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => void;
  markAsRead: (notificationId: string) => void;
  markAllAsRead: () => void;
  deleteNotification: (notificationId: string) => void;
  clearAll: () => void;
}
