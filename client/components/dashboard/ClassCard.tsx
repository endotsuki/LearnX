import { motion } from "framer-motion";
import { Users, Clock, MapPin } from "lucide-react";
import type { Class } from "@/types";
import { Link } from "react-router-dom";

interface ClassCardProps {
  classData: Class;
  variant?: "grid" | "list";
}

export function ClassCard({ classData, variant = "grid" }: ClassCardProps) {
  if (variant === "list") {
    return (
      <Link to={`/class/${classData.id}`}>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: 4 }}
          className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{classData.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{classData.code}</p>
              <div className="flex gap-4 mt-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  {classData.studentCount} students
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {classData.schedule}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Teacher</p>
              <p className="font-medium text-sm text-gray-900">
                {classData.teacher.name}
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link to={`/class/${classData.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer h-full flex flex-col"
      >
        {classData.image && (
          <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
            <img
              src={classData.image}
              alt={classData.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex-1">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">
              {classData.code}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-2 line-clamp-2">
              {classData.name}
            </h3>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {classData.description}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Users size={16} className="text-gray-400" />
              <span>{classData.studentCount} students</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Clock size={16} className="text-gray-400" />
              <span>{classData.schedule}</span>
            </div>
            {classData.room && (
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin size={16} className="text-gray-400" />
                <span>{classData.room}</span>
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500">Instructor</p>
            <p className="font-medium text-sm text-gray-900">
              {classData.teacher.name}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
