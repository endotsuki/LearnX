import { ReactNode } from "react";
import { motion } from "framer-motion";

interface DashboardCardProps {
  title?: string;
  value?: string | number;
  subtitle?: string;
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "stat" | "info" | "default";
}

export function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  children,
  onClick,
  className = "",
  variant = "default",
}: DashboardCardProps) {
  const baseClass =
    "bg-white rounded-xl shadow-sm border border-gray-100 p-6 cursor-pointer transition-all duration-300 hover:shadow-md hover:border-gray-200";
  const variantClass =
    variant === "stat" ? "min-h-[140px] flex flex-col justify-between" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${className}`}
    >
      {children ? (
        children
      ) : (
        <div className="space-y-2">
          {icon && <div className="text-2xl">{icon}</div>}
          {title && (
            <p className="text-sm font-medium text-gray-600">{title}</p>
          )}
          {value && (
            <p className="text-3xl font-bold text-gray-900">{value}</p>
          )}
          {subtitle && (
            <p className="text-xs text-gray-500">{subtitle}</p>
          )}
        </div>
      )}
    </motion.div>
  );
}
