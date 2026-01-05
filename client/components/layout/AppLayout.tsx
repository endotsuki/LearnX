import { useState } from "react";
import { motion } from "framer-motion";
import type { User } from "@/types";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

interface AppLayoutProps {
  user: User;
  children: React.ReactNode;
  onLogout: () => void;
}

export function AppLayout({ user, children, onLogout }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        userRole={user.role}
        userName={user.name}
        onLogout={onLogout}
        isOpen={sidebarOpen}
        onToggle={setSidebarOpen}
      />

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${sidebarOpen ? "ml-[280px]" : "ml-20"}`}
      >
        {/* Navbar */}
        <Navbar user={user} sidebarOpen={sidebarOpen} />

        {/* Page Content */}
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 max-w-7xl mx-auto"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
