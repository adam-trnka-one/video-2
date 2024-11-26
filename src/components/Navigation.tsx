import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../types';

interface NavigationProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: {
    portfolio: string;
    contact: string;
  };
}

export function Navigation({ currentLang, onLanguageChange, t }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a 
            href="https://trnka.one" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center"
          >
            <img
              src="https://trnka.one/images/atr_logo.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
          </a>

          <div className="flex items-center space-x-8">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#portfolio">{t.portfolio}</NavLink>
              <NavLink href="#contact">{t.contact}</NavLink>
            </div>

            {/* Language Switcher */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => onLanguageChange('cz')}
                className={`px-2 py-1 rounded-custom transition-all duration-300 ${
                  currentLang === 'cz'
                    ? 'gradient-accent'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                CZ
              </button>
              <span className="text-white/40">|</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded-custom transition-all duration-300 ${
                  currentLang === 'en'
                    ? 'gradient-accent'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm">
            <div className="flex flex-col items-center py-4 space-y-4">
              <NavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>
                {t.portfolio}
              </NavLink>
              <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                {t.contact}
              </NavLink>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    onLanguageChange('cz');
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-1 rounded-custom transition-all duration-300 ${
                    currentLang === 'cz'
                      ? 'gradient-accent'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  CZ
                </button>
                <button
                  onClick={() => {
                    onLanguageChange('en');
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-1 rounded-custom transition-all duration-300 ${
                    currentLang === 'en'
                      ? 'gradient-accent'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        onClick?.();
      }}
      className="text-white/80 hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  );
}