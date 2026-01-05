export type UserRole = "admin" | "teacher" | "student";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  department?: string;
  phone?: string;
}

export interface Class {
  id: string;
  name: string;
  code: string;
  description: string;
  teacher: User;
  studentCount: number;
  schedule: string;
  room?: string;
  image?: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  classId: string;
  dueDate: Date;
  createdDate: Date;
  points: number;
  status: "draft" | "published" | "closed";
}

export interface Submission {
  id: string;
  assignmentId: string;
  studentId: string;
  submittedDate?: Date;
  status: "not-submitted" | "submitted" | "graded";
  grade?: number;
  feedback?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  classId?: string;
  author: User;
  createdDate: Date;
  priority: "low" | "medium" | "high";
}

export interface Grade {
  id: string;
  studentId: string;
  classId: string;
  subject: string;
  grade: number;
  date: Date;
}

export interface Enrollment {
  id: string;
  studentId: string;
  classId: string;
  enrolledDate: Date;
  status: "active" | "completed" | "dropped";
}
