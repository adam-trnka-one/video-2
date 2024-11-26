import React from 'react';
import { Language } from '../types';

interface LanguageSwitchProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSwitch({ currentLang, onLanguageChange }: LanguageSwitchProps) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-2 py-1 rounded-[3px] ${
          currentLang === 'en'
            ? 'gradient-accent text-white'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        EN
      </button>
      <span className="text-gray-500">|</span>
      <button
        onClick={() => onLanguageChange('cz')}
        className={`px-2 py-1 rounded-[3px] ${
          currentLang === 'cz'
            ? 'gradient-accent text-white'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        CZ
      </button>
    </div>
  );
}