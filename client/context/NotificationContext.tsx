import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import type { Notification, NotificationType } from '@/types/notification';

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => string;
  markAsRead: (notificationId: string) => void;
  markAllAsRead: () => void;
  deleteNotification: (notificationId: string) => void;
  clearAll: () => void;
}

const NotificationContextInternal = createContext<NotificationContextType | undefined>(undefined);

const STORAGE_KEY = 'notifications';

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.map((n: any) => ({
          ...n,
          createdAt: new Date(n.createdAt),
        }));
      }
    } catch (error) {
      console.error('Failed to load notifications from storage:', error);
    }
    return [];
  });

  // Persist notifications to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
  }, [notifications]);

  const unreadCount = notifications.filter(n => n.status === 'unread').length;

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'createdAt'>) => {
    const id = `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const newNotification: Notification = {
      ...notification,
      id,
      createdAt: new Date(),
    };
    setNotifications(prev => [newNotification, ...prev]);
    return id;
  }, []);

  const markAsRead = useCallback((notificationId: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === notificationId ? { ...n, status: 'read' as const } : n))
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, status: 'read' as const }))
    );
  }, []);

  const deleteNotification = useCallback((notificationId: string) => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId));
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const value: NotificationContextType = {
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearAll,
  };

  return (
    <NotificationContextInternal.Provider value={value}>
      {children}
    </NotificationContextInternal.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContextInternal);
  if (!context) {
    throw new Error('useNotification must be used within NotificationProvider');
  }
  return context;
}
