import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useDarkMode } from '../hooks/useDarkMode';

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button
      variant='ghost'
      size='icon'
      className='relative'
      onClick={toggleDarkMode}
    >
      {isDarkMode && (
        <Sun className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      )}
      {!isDarkMode && (
        <Moon className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
