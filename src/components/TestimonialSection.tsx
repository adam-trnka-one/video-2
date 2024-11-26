import React, { useState, useEffect } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Testimonial, Language } from '../types';

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  currentLang: Language;
  t: {
    testimonials: string;
  };
}

export function TestimonialSection({ testimonials, currentLang, t }: TestimonialSectionProps) {
  const scrollContainer = React.useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrowVisibility = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener('scroll', updateArrowVisibility);
      updateArrowVisibility();
      return () => container.removeEventListener('scroll', updateArrowVisibility);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const scrollAmount = direction === 'left' ? -400 : 400;
      const targetScroll = container.scrollLeft + scrollAmount;

      // If we're scrolling right and would hit the end, jump to start
      if (direction === 'right' && targetScroll >= container.scrollWidth - container.clientWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }

      // If we're scrolling left and would hit the start, jump to end
      if (direction === 'left' && targetScroll <= 0) {
        container.scrollTo({ left: container.scrollWidth - container.clientWidth, behavior: 'smooth' });
        return;
      }

      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const showNavigation = testimonials.length > 3;

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
          {t.testimonials}
        </h2>

        {/* Navigation Buttons */}
        {showNavigation && (
          <>
            <button
              onClick={() => scroll('left')}
              className={`absolute top-1/2 -translate-y-1/2 -left-5 z-10 p-3 rounded-custom gradient-accent text-white shadow-lg transition-all duration-300 hover:scale-110 ${
                !showLeftArrow ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className={`absolute top-1/2 -translate-y-1/2 -right-5 z-10 p-3 rounded-custom gradient-accent text-white shadow-lg transition-all duration-300 hover:scale-110 ${
                !showRightArrow ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Testimonials Container */}
        <div 
          ref={scrollContainer}
          className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-[400px] snap-center"
            >
              <div className="h-full bg-white p-8 rounded-custom shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl">
                <Quote className="w-10 h-10 text-[#fd4632]/80 mb-4" />
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  {testimonial.text[currentLang] || testimonial.text['cz']}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-[#fd4632]/50"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}