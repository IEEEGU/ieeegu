"use client";

import React from 'react';
import Link from 'next/link';
import { Category } from '../types';

interface CategoryListProps {
  categories: Category[];
  activeCategory?: string;
}

export default function CategoryList({ categories, activeCategory }: CategoryListProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Link 
        href="/blog"
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          !activeCategory 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All
      </Link>
      
      {categories.map((category) => (
        <Link
          key={category._id}
          href={`/blog/category/${category.slug}`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category.slug 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
}
