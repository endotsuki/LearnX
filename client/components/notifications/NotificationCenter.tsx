import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, Check, Trash2 } from 'lucide-react';
import { useNotification } from '@/context/NotificationContext';
import { NotificationService } from '@/services/notificationService';
import { useApp } from '@/context/AppContext';

interface NotificationCenterProps {
  userId: string;
}

export function NotificationCenter({ userId }: NotificationCenterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications, unreadCount, markAsRead, deleteNotification, markAllAsRead } = useNotification();
  const { translations } = useApp();

  // Subscribe to real-time notifications
  useEffect(() => {
    const unsubscribe = NotificationService.subscribe(userId, (notification) => {
      // This will automatically be added to the context
      // The context will handle adding it
    });

    return () => {
      unsubscribe();
    };
  }, [userId]);

  const displayNotifications = notifications.slice(0, 10); // Show last 10

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'assignment':
        return '📝';
      case 'grade':
        return '⭐';
      case 'announcement':
        return '📢';
      case 'submission':
        return '✅';
      case 'message':
        return '💬';
      default:
        return '🔔';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'assignment':
        return 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20';
      case 'grade':
        return 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20';
      case 'announcement':
        return 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20';
      case 'submission':
        return 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20';
      default:
        return 'border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800';
    }
  };

  return (
    <div className="relative">
      {/* Notification Bell Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </motion.span>
        )}
      </motion.button>

      {/* Notification Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-30"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-96 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 z-40 max-h-96 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-4 flex items-center justify-between">
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {translations.notifications}
                </h3>
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        markAllAsRead();
                      }}
                      className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Mark all as read
                    </motion.button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors"
                  >
                    <X size={18} className="text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Notifications List */}
              <div className="overflow-y-auto flex-1">
                {displayNotifications.length > 0 ? (
                  <div className="divide-y divide-gray-200 dark:divide-slate-700">
                    {displayNotifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className={`p-4 border-l-4 ${getNotificationColor(notification.type)} cursor-pointer hover:bg-opacity-75 dark:hover:bg-opacity-75 transition-colors relative`}
                        onClick={() => {
                          if (notification.status === 'unread') {
                            markAsRead(notification.id);
                          }
                          if (notification.action) {
                            window.location.href = notification.action.url;
                          }
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl flex-shrink-0">
                            {getNotificationIcon(notification.type)}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">
                              {notification.title}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                              {notification.message}
                            </p>
                            {notification.senderName && (
                              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                From: {notification.senderName}
                              </p>
                            )}
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                              {formatTime(notification.createdAt)}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            {notification.status === 'unread' && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            )}
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteNotification(notification.id);
                              }}
                              className="p-1 hover:bg-gray-300 dark:hover:bg-slate-600 rounded transition-colors"
                            >
                              <Trash2 size={14} className="text-gray-500 dark:text-gray-400" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                    <Bell size={32} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No notifications yet</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {displayNotifications.length > 0 && (
                <div className="border-t border-gray-200 dark:border-slate-700 p-3 text-center">
                  <a
                    href="#"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View all notifications
                  </a>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function formatTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;

  return date.toLocaleDateString();
}
