import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  change?: number;
  changeLabel?: string;
  trend?: "up" | "down" | "neutral";
  color?: "blue" | "green" | "purple" | "orange";
}

const colorSchemes: Record<string, { bg: string; text: string; icon: string }> =
  {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      icon: "text-blue-500",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      icon: "text-green-500",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      icon: "text-purple-500",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      icon: "text-orange-500",
    },
  };

export function StatCard({
  label,
  value,
  icon,
  change,
  changeLabel,
  trend = "neutral",
  color = "blue",
}: StatCardProps) {
  const scheme = colorSchemes[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`${scheme.bg} rounded-lg p-3 ${scheme.icon}`}
        >
          {icon}
        </div>
        {change !== undefined && (
          <div
            className={`flex items-center gap-1 text-xs font-semibold ${
              trend === "up"
                ? "text-green-600"
                : trend === "down"
                  ? "text-red-600"
                  : "text-gray-600"
            }`}
          >
            {trend === "up" && <ArrowUpRight size={14} />}
            {trend === "down" && <ArrowDownRight size={14} />}
            {Math.abs(change)}%
          </div>
        )}
      </div>

      <h3 className="text-gray-600 text-sm font-medium">{label}</h3>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>

      {changeLabel && (
        <p
          className={`text-xs mt-2 ${
            trend === "up"
              ? "text-green-600"
              : trend === "down"
                ? "text-red-600"
                : "text-gray-500"
          }`}
        >
          {changeLabel}
        </p>
      )}
    </motion.div>
  );
}
