import React, { useState } from 'react';
import { Play, ChevronDown, ChevronUp } from 'lucide-react';
import { Project, Language } from '../types';

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  currentLang: Language;
  categoryMap: { [key: string]: string };
}

export function ProjectGrid({ projects, onProjectClick, currentLang, categoryMap }: ProjectGridProps) {
  const [displayCount, setDisplayCount] = useState(6);
  const hasMoreProjects = projects.length > displayCount;
  const showingAllProjects = displayCount > 6;
  
  const visibleProjects = projects.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount(projects.length);
  };

  const handleShowLess = () => {
    setDisplayCount(6);
    // Smooth scroll back to the portfolio section
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-custom cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
            onClick={() => onProjectClick(project)}
          >
            {/* Thumbnail Image */}
            <div className="aspect-video">
              <img
                src={project.thumbnail}
                alt={project.title[currentLang]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-300">
              {/* Play Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                <Play className="w-12 h-12 fill-current" strokeWidth={1} />
              </div>

              {/* Title and Category */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title[currentLang]}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">
                    {categoryMap[project.category]}
                  </span>
                  <span className="text-sm text-gray-400">
                    {project.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More / Show Less Buttons */}
      <div className="flex justify-center mt-12">
        {hasMoreProjects && !showingAllProjects && (
          <button
            onClick={handleLoadMore}
            className="group flex items-center gap-2 px-8 py-4 rounded-custom bg-white text-gray-900 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span className="font-medium">
              {currentLang === 'cz' ? 'Načíst další' : 'Load More'}
            </span>
            <ChevronDown className="w-5 h-5 text-[#fd4632] group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        )}
        
        {showingAllProjects && (
          <button
            onClick={handleShowLess}
            className="group flex items-center gap-2 px-8 py-4 rounded-custom bg-white text-gray-900 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span className="font-medium">
              {currentLang === 'cz' ? 'Zobrazit méně' : 'Show Less'}
            </span>
            <ChevronUp className="w-5 h-5 text-[#fd4632] group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        )}
      </div>
    </>
  );
}