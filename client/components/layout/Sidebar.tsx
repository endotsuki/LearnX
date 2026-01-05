import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  BookOpen,
  FileText,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { UserRole } from "@/types";
import { useApp } from "@/context/AppContext";

interface SidebarProps {
  userRole: UserRole;
  userName: string;
  onLogout: () => void;
  isOpen?: boolean;
  onToggle?: (open: boolean) => void;
}

const navItems: Record<UserRole, Array<{ label: string; icon: any; path: string }>> =
  {
    admin: [
      { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
      { label: "Classes", icon: BookOpen, path: "/admin/classes" },
      { label: "Users", icon: Users, path: "/admin/users" },
      { label: "Reports", icon: BarChart3, path: "/admin/reports" },
      { label: "Settings", icon: Settings, path: "/admin/settings" },
    ],
    teacher: [
      { label: "Dashboard", icon: LayoutDashboard, path: "/teacher" },
      { label: "My Classes", icon: BookOpen, path: "/teacher/classes" },
      { label: "Assignments", icon: FileText, path: "/teacher/assignments" },
      { label: "Grades", icon: BarChart3, path: "/teacher/grades" },
      { label: "Settings", icon: Settings, path: "/teacher/settings" },
    ],
    student: [
      { label: "Dashboard", icon: LayoutDashboard, path: "/student" },
      { label: "Classes", icon: BookOpen, path: "/student/classes" },
      { label: "Assignments", icon: FileText, path: "/student/assignments" },
      { label: "Grades", icon: BarChart3, path: "/student/grades" },
      { label: "Settings", icon: Settings, path: "/student/settings" },
    ],
  };

export function Sidebar({
  userRole,
  userName,
  onLogout,
  isOpen = true,
  onToggle,
}: SidebarProps) {
  const location = useLocation();
  const { translations } = useApp();
  const items = navItems[userRole];

  const getNavLabel = (key: string): string => {
    const labelMap: Record<string, keyof typeof translations> = {
      'Dashboard': 'dashboard',
      'My Classes': 'myClasses',
      'Classes': 'classes',
      'Assignments': 'assignments',
      'Grades': 'grades',
      'Users': 'users',
      'Reports': 'reports',
      'Settings': 'settings',
    };
    const translationKey = labelMap[key];
    return translationKey ? translations[translationKey] : key;
  };

  return (
    <motion.div
      initial={false}
      animate={{
        width: isOpen ? 280 : 80,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-slate-50 dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 h-screen flex flex-col fixed left-0 top-0 z-40 transition-colors"
    >
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-200 dark:border-slate-700 transition-colors">
        <div className="flex items-center justify-between">
          <motion.div
            animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LearnX
            </h1>
          </motion.div>
          <button
            onClick={() => onToggle?.(!isOpen)}
            className="p-1.5 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="space-y-2 px-3">
          <AnimatePresence>
            {items.map((item) => {
              const isActive = location.pathname.startsWith(
                item.path.split("/").slice(0, 2).join("/")
              );
              const Icon = item.icon;

              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    <motion.span
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        width: isOpen ? "auto" : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden whitespace-nowrap font-medium"
                    >
                      {getNavLabel(item.label)}
                    </motion.span>
                  </motion.div>
                </Link>
              );
            })}
          </AnimatePresence>
        </div>
      </nav>

      {/* User Info & Logout */}
      <div className="border-t border-gray-200 dark:border-slate-700 p-4 space-y-3 transition-colors">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
            {userName.charAt(0).toUpperCase()}
          </div>
          <motion.div
            animate={{
              opacity: isOpen ? 1 : 0,
              width: isOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {userName}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{userRole}</p>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ x: 4 }}
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all"
        >
          <LogOut size={18} />
          <motion.span
            animate={{
              opacity: isOpen ? 1 : 0,
              width: isOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden whitespace-nowrap font-medium"
          >
            {translations.logout}
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}
