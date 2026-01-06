import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from '@/types';
import { AppLayout } from '@/components/layout/AppLayout';
import { getClassesByTeacher } from '@/data/mock';
import { ClassCard } from '@/components/dashboard/ClassCard';
import { Button } from '@/components/ui/button';
import { IconBook, IconPlus } from '@tabler/icons-react';

export default function TeacherDashboard() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      const parsedUser = JSON.parse(user);
      setCurrentUser(parsedUser);
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (!currentUser) {
    return null;
  }

  const myClasses = getClassesByTeacher(currentUser.id);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <AppLayout user={currentUser} onLogout={handleLogout}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='mb-8'>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>Dashboard</h1>
        <p className='mt-2 text-gray-600 dark:text-gray-400'>Welcome back, {currentUser.name}! Here's an overview of your classes.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <div className='mb-6 flex items-center justify-between'>
          <div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>My Classes</h2>
            <p className='text-sm text-gray-600 dark:text-gray-400'>{myClasses.length} classes assigned</p>
          </div>
          <Button variant='secondary'>
            <IconPlus size={18} />
            New Class
          </Button>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {myClasses.length > 0 ? (
            myClasses.map((classItem) => <ClassCard key={classItem.id} classData={classItem} />)
          ) : (
            <div className='col-span-full py-12 text-center'>
              <IconBook size={48} className='mx-auto mb-4 text-gray-400 dark:text-gray-600' />
              <p className='text-gray-600 dark:text-gray-400'>No classes assigned yet</p>
              <button className='mt-4 font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'>
                Request to create a class
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </AppLayout>
  );
}
