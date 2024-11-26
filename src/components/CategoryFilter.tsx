import React from 'react';

interface Category {
  id: string;
  label: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-custom text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
            activeCategory === category.id
              ? 'gradient-accent text-white'
              : 'bg-white text-gray-600 shadow-md hover:shadow-lg gradient-hover'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}