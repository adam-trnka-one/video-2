import React from 'react';
import { LanguageSwitch } from './LanguageSwitch';
import { Language } from '../types';
import { translations } from '../data';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ currentLang, onLanguageChange }: HeaderProps) {
  const t = translations[currentLang];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="https://trnka.one/images/atr_logo.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
          </a>
          <nav className="flex items-center space-x-8">
            <a
              href="#portfolio"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t.portfolio}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t.contact}
            </a>
            <LanguageSwitch
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}