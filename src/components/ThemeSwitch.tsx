import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2 border border-gray-600 rounded-[3px] p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-1.5 rounded-[3px] transition-colors ${
          theme === 'light'
            ? 'gradient-accent text-white'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Light mode"
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-1.5 rounded-[3px] transition-colors ${
          theme === 'dark'
            ? 'gradient-accent text-white'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Dark mode"
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-1.5 rounded-[3px] transition-colors ${
          theme === 'system'
            ? 'gradient-accent text-white'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-label="System theme"
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  );
}