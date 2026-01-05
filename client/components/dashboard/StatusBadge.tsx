interface StatusBadgeProps {
  status: string;
  variant?:
    | "default"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "published"
    | "draft"
    | "closed";
  size?: "sm" | "md";
}

const statusColors: Record<string, string> = {
  default: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
  info: "bg-blue-100 text-blue-800",
  published: "bg-emerald-100 text-emerald-800",
  draft: "bg-gray-100 text-gray-800",
  closed: "bg-red-100 text-red-800",
  active: "bg-green-100 text-green-800",
  completed: "bg-blue-100 text-blue-800",
  "not-submitted": "bg-yellow-100 text-yellow-800",
  submitted: "bg-blue-100 text-blue-800",
  graded: "bg-green-100 text-green-800",
};

export function StatusBadge({
  status,
  variant = "default",
  size = "sm",
}: StatusBadgeProps) {
  const colorClass = statusColors[variant] || statusColors[status] || statusColors.default;
  const sizeClass = size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm";
  const fontClass = "font-medium rounded-full inline-block";

  return (
    <span className={`${colorClass} ${sizeClass} ${fontClass}`}>
      {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
    </span>
  );
}
