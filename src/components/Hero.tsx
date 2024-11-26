import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  currentLang: Language;
  t: {
    heroTitle: string;
    heroSubtitle: string;
    viewPortfolio: string;
  };
}

export function Hero({ currentLang, t }: HeroProps) {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1536240478700-b869070f9279"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-recording-a-speaker-at-an-event-9207-large.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gradient">
          {t.heroTitle}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          {t.heroSubtitle}
        </p>
        <button 
          onClick={scrollToPortfolio}
          className="gradient-accent px-8 py-4 rounded-custom font-semibold transform hover:scale-105"
        >
          {t.viewPortfolio}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer"
        onClick={scrollToPortfolio}
      >
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-10" />
    </header>
  );
}