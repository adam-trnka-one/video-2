import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { CategoryFilter } from './components/CategoryFilter';
import { TestimonialSection } from './components/TestimonialSection';
import { ContactSection } from './components/ContactSection';
import { ScrollToTop } from './components/ScrollToTop';
import { projects, testimonials, translations } from './data';
import { Project, Language } from './types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('cz');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const t = translations[currentLang];

  const uniqueCategories = ['all', ...new Set(projects.map(project => project.category))];

  const categoryMap = Object.fromEntries(
    uniqueCategories.map(category => [
      category,
      t[category.toLowerCase()] || category
    ])
  );

  const categories = uniqueCategories.map(category => ({
    id: category,
    label: categoryMap[category]
  }));

  const filteredProjects = projects.filter(
    project => selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang}
        t={t}
      />
      
      <Hero 
        currentLang={currentLang}
        t={t}
      />

      <main className="container mx-auto px-4">
        <section id="portfolio" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            {t.featuredProjects}
          </h2>
          
          <CategoryFilter
            categories={categories}
            activeCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <ProjectGrid
            projects={filteredProjects}
            onProjectClick={setSelectedProject}
            currentLang={currentLang}
            categoryMap={categoryMap}
          />
        </section>

        <TestimonialSection 
          testimonials={testimonials}
          currentLang={currentLang}
          t={t}
        />
      </main>

      <ContactSection 
        currentLang={currentLang}
        t={t}
      />

      {/* Video Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="w-full max-w-6xl p-4">
            <div className="relative mb-8">
              <iframe
                src={selectedProject.videoUrl}
                className="w-full aspect-video rounded-custom"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-custom text-white/80 hover:text-white transition-all duration-300"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="text-white mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold">
                  {selectedProject.title[currentLang]}
                </h3>
                <span className="px-3 py-1 bg-[#fd4632]/10 text-[#fd4632] text-sm rounded-custom">
                  {categoryMap[selectedProject.category]}
                </span>
              </div>
              <p className="text-gray-300 text-lg mb-4">
                {selectedProject.leadText[currentLang]}
              </p>
              <p className="text-sm text-gray-400">
                {project.date}
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
                  const prevProject = filteredProjects[currentIndex - 1];
                  if (prevProject) setSelectedProject(prevProject);
                }}
                disabled={filteredProjects.indexOf(selectedProject) === 0}
                className="flex items-center gap-2 px-6 py-3 rounded-custom bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed gradient-hover"
              >
                <ChevronLeft className="w-5 h-5" />
                {t.previous}
              </button>
              <button
                onClick={() => {
                  const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
                  const nextProject = filteredProjects[currentIndex + 1];
                  if (nextProject) setSelectedProject(nextProject);
                }}
                disabled={filteredProjects.indexOf(selectedProject) === filteredProjects.length - 1}
                className="flex items-center gap-2 px-6 py-3 rounded-custom bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed gradient-hover"
              >
                {t.next}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <ScrollToTop />
    </div>
  );
}

export default App;