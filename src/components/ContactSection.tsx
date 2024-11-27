import React from 'react';
import { Mail, Phone, Instagram, Video } from 'lucide-react';
import { Language } from '../types';

interface ContactSectionProps {
  currentLang: Language;
  t: {
    contactTitle: string;
    contactSubtitle: string;
    email: string;
    call: string;
    instagram: string;
    vimeo: string;
  };
}

export function ContactSection({ currentLang, t }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gradient">
          {t.contactTitle}
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          {t.contactSubtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6">
          <a
            href="mailto:video@trnka.one"
            className="group flex flex-col items-center p-6 rounded-custom bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail className="w-8 h-8 mb-4 text-[#fd4632] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-900 font-medium">{t.email}</span>
            <span className="text-sm text-gray-500">video@trnka.one</span>
          </a>

          <a
            href="tel:+420728764555"
            className="group flex flex-col items-center p-6 rounded-custom bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="w-8 h-8 mb-4 text-[#fd4632] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-900 font-medium">{t.call}</span>
            <span className="text-sm text-gray-500">+420 728 764 555</span>
          </a>

          <a
            href="https://instagram.com/video.trnka.one"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 rounded-custom bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Instagram className="w-8 h-8 mb-4 text-[#fd4632] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-900 font-medium">{t.instagram}</span>
            <span className="text-sm text-gray-500">@video.trnka.one</span>
          </a>

        </div>
      </div>
    </section>
  );
}