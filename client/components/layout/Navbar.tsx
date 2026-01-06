import type { User } from '@/types';
import { useApp } from '@/context/AppContext';
import { NotificationCenter } from '@/components/notifications/NotificationCenter';
import { LanguageChanger } from './LanguageChanger';
import { SearchBar } from '../ui/search-bar';
import { useTranslations } from '@/hooks/useTranslations';
import { Avatar, AvatarImage } from '../ui/avatar';
import { AnimatedThemeToggler } from '../ui/animate-theme';
import { Separator } from '../ui/separator';

interface NavbarProps {
  user: User;
  sidebarOpen: boolean;
}

export function Navbar({ user, sidebarOpen }: NavbarProps) {
  return (
    <nav className='sticky top-0 z-30 border-b border-gray-200 bg-white/50 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/50'>
      <div className={`duration-300 ease-in-out ${sidebarOpen ? 'ml-[280px]' : 'ml-20'}`}>
        <div className='flex items-center justify-between px-6 py-4'>
          {/* Left side - Search */}
          <SearchBar placeholder='Search classes, assignments, users...' />

          {/* Right side - Icons & User */}
          <div className='ml-6 flex items-center gap-4'>
            {/* Notifications */}
            <NotificationCenter userId={user.id} />

            {/* Theme Toggle */}
            <AnimatedThemeToggler />

            {/* Language Selector */}
            <LanguageChanger />

            {/* Divider */}
            <Separator orientation='vertical' className='h-9' />

            {/* User Profile */}
            <div className='flex items-center gap-3'>
              <div className='text-right'>
                <p className='truncate text-sm font-semibold text-slate-900 dark:text-white'>{user.name}</p>
                <p className='truncate text-xs capitalize text-slate-600 dark:text-slate-400'>{user.role}</p>
              </div>
              {user.avatar ? (
                <Avatar>
                  <AvatarImage src={user.avatar} alt={user.name} />
                </Avatar>
              ) : (
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white'>
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
