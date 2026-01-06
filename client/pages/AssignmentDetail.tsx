import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { User, Assignment } from '@/types';
import { AppLayout } from '@/components/layout/AppLayout';
import { useApp } from '@/context/AppContext';
import { mockAssignments, mockUsers } from '@/data/mock';
import { StatusBadge } from '@/components/dashboard/StatusBadge';
import { IconAlertCircle, IconArrowRight, IconCircleCheck, IconClock, IconUpload } from '@tabler/icons-react';

export default function AssignmentDetail() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { assignmentId } = useParams();
  const { translations } = useApp();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      const parsedUser = JSON.parse(user);
      setCurrentUser(parsedUser);
    } else {
      navigate('/');
    }

    if (assignmentId) {
      const found = mockAssignments.find((a) => a.id === assignmentId);
      if (found) {
        setAssignment(found);
      }
    }
  }, [navigate, assignmentId]);

  if (!currentUser || !assignment) return null;

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  const isOverdue = new Date() > assignment.dueDate;
  const daysUntilDue = Math.ceil((assignment.dueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  const mockSubmissions = [
    {
      id: '1',
      studentId: 'student1',
      studentName: 'Alex Rivera',
      submittedAt: new Date('2025-01-12'),
      grade: 88,
      status: 'graded' as const,
    },
    {
      id: '2',
      studentId: 'student2',
      studentName: 'Jordan Lee',
      submittedAt: new Date('2025-01-14'),
      grade: null,
      status: 'submitted' as const,
    },
    {
      id: '3',
      studentId: 'student3',
      studentName: 'Taylor Smith',
      submittedAt: null,
      grade: null,
      status: 'notSubmitted' as const,
    },
  ];

  return (
    <AppLayout user={currentUser} onLogout={handleLogout}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <button
          onClick={() => navigate(-1)}
          className='mb-4 flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
        >
          <IconArrowRight size={18} />
          {translations.back}
        </button>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>{assignment.title}</h1>
        <p className='mt-2 text-gray-600 dark:text-gray-400'>{assignment.description}</p>
      </motion.div>

      {/* Assignment Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className='mb-8 mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3'
      >
        <div className='lg:col-span-2'>
          <div className='mb-8 rounded-lg border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900 dark:text-white'>{translations.assignmentDetails}</h2>

            <div className='prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400'>
              <p>{assignment.description}</p>
              <h3 className='mt-6 text-lg font-semibold text-gray-900 dark:text-white'>Requirements</h3>
              <ul className='list-inside list-disc space-y-2 text-sm'>
                <li>Complete all sections of the assignment</li>
                <li>Submit in PDF or Word format</li>
                <li>Use proper citations for sources</li>
                <li>Maximum file size: 25 MB</li>
              </ul>
            </div>
          </div>

          {/* Submissions for Teachers */}
          {currentUser.role === 'teacher' && (
            <div className='rounded-lg border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800'>
              <h2 className='mb-6 text-2xl font-bold text-gray-900 dark:text-white'>{translations.submissionStatus}</h2>

              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='border-b border-gray-200 dark:border-slate-700'>
                      <th className='px-4 py-3 text-left font-semibold text-gray-900 dark:text-white'>Student Name</th>
                      <th className='px-4 py-3 text-left font-semibold text-gray-900 dark:text-white'>Status</th>
                      <th className='px-4 py-3 text-left font-semibold text-gray-900 dark:text-white'>Submitted At</th>
                      <th className='px-4 py-3 text-left font-semibold text-gray-900 dark:text-white'>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockSubmissions.map((submission) => (
                      <tr
                        key={submission.id}
                        className='border-b border-gray-200 transition-colors hover:bg-gray-50 dark:border-slate-700 dark:hover:bg-slate-700'
                      >
                        <td className='px-4 py-3 font-medium text-gray-900 dark:text-white'>{submission.studentName}</td>
                        <td className='px-4 py-3'>
                          <StatusBadge status={submission.status} variant='published' />
                        </td>
                        <td className='px-4 py-3 text-xs text-gray-600 dark:text-gray-400'>
                          {submission.submittedAt ? submission.submittedAt.toLocaleDateString() : '-'}
                        </td>
                        <td className='px-4 py-3'>
                          {submission.grade ? (
                            <span className='rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-100'>
                              {submission.grade}
                            </span>
                          ) : (
                            '-'
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20'>
                <p className='text-sm text-blue-800 dark:text-blue-200'>
                  <strong>Summary:</strong> 1 graded, 1 submitted, 1 not submitted
                </p>
              </div>
            </div>
          )}

          {/* Student Submission Form */}
          {currentUser.role === 'student' && !submitted && (
            <div className='rounded-lg border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800'>
              <h2 className='mb-6 text-2xl font-bold text-gray-900 dark:text-white'>{translations.submit}</h2>

              <div className='cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-8 text-center transition-colors hover:border-blue-400 dark:border-slate-600 dark:hover:border-blue-500'>
                <IconUpload size={32} className='mx-auto mb-4 text-gray-400' />
                <p className='mb-1 font-medium text-gray-900 dark:text-white'>Drag and drop your file here</p>
                <p className='mb-4 text-sm text-gray-600 dark:text-gray-400'>or click to select a file</p>
                <input type='file' className='hidden' />
                <button className='rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700'>
                  Select File
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSubmitted(true)}
                className='mt-6 w-full rounded-lg bg-green-600 px-4 py-3 font-medium text-white transition-colors hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600'
              >
                {translations.submit}
              </motion.button>
            </div>
          )}

          {/* Submitted Confirmation */}
          {currentUser.role === 'student' && submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className='rounded-lg border border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-900/20'
            >
              <IconCircleCheck size={48} className='mx-auto mb-4 text-green-600 dark:text-green-400' />
              <h3 className='mb-2 text-xl font-bold text-green-800 dark:text-green-200'>Submitted Successfully!</h3>
              <p className='text-green-700 dark:text-green-300'>
                Your assignment has been submitted. Your teacher will review it and provide feedback.
              </p>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <div className='space-y-6'>
          {/* Status Card */}
          <div className='rounded-lg border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800'>
            <h3 className='mb-4 font-semibold text-gray-900 dark:text-white'>Status</h3>
            <div className='space-y-4'>
              <div>
                <p className='text-sm text-gray-600 dark:text-gray-400'>Assignment Status</p>
                <StatusBadge status={assignment.status} variant='published' />
              </div>
              <div>
                <p className='text-sm text-gray-600 dark:text-gray-400'>Points</p>
                <p className='text-lg font-bold text-gray-900 dark:text-white'>{assignment.points} pts</p>
              </div>
            </div>
          </div>

          {/* Due Date Card */}
          <div
            className={`rounded-lg border p-6 ${
              isOverdue
                ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'
                : daysUntilDue <= 3
                  ? 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20'
                  : 'border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-800'
            }`}
          >
            <div className='flex items-start gap-3'>
              {isOverdue ? (
                <IconAlertCircle className='flex-shrink-0 text-red-600 dark:text-red-400' />
              ) : (
                <IconClock className='flex-shrink-0 text-orange-600 dark:text-orange-400' />
              )}
              <div>
                <p
                  className={`text-sm font-medium ${
                    isOverdue
                      ? 'text-red-800 dark:text-red-200'
                      : daysUntilDue <= 3
                        ? 'text-yellow-800 dark:text-yellow-200'
                        : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {isOverdue ? 'Overdue' : `Due in ${daysUntilDue} days`}
                </p>
                <p
                  className={`mt-1 text-sm font-semibold ${
                    isOverdue
                      ? 'text-red-900 dark:text-red-100'
                      : daysUntilDue <= 3
                        ? 'text-yellow-900 dark:text-yellow-100'
                        : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {assignment.dueDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Created Date Card */}
          <div className='rounded-lg border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>Created</p>
            <p className='mt-1 font-semibold text-gray-900 dark:text-white'>{assignment.createdDate.toLocaleDateString()}</p>
          </div>
        </div>
      </motion.div>
    </AppLayout>
  );
}
