
import React from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { topics, Category } from '../data';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [searchParams] = useSearchParams();
  const subcategoryFilter = searchParams.get('subcategory');

  const categoryTopics = topics.filter(t => 
    t.category === category && 
    (!subcategoryFilter || t.subcategory === subcategoryFilter)
  );

  const displayTitle = subcategoryFilter ? `${subcategoryFilter} (${category})` : category;

  return (
    <div className="space-y-8">
      <Helmet>
        <title>{displayTitle} Topics - GD&T Knowledge Base</title>
        <meta name="description" content={`Browse engineering topics related to ${displayTitle}, including standards, symbols, and design guidelines.`} />
      </Helmet>
      <header>
        <h1 className="text-3xl font-bold text-slate-900">{displayTitle}</h1>
        <p className="text-slate-500 mt-2">
          {subcategoryFilter 
            ? `Browse ${subcategoryFilter} symbols within ${category}.`
            : `Browse all topics related to ${category}.`
          }
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categoryTopics.map(topic => (
          <Link 
            key={topic.id} 
            to={`/topic/${topic.id}`}
            className="block bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blueprint-300 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-900">{topic.title}</h3>
              {topic.symbol && <span className="text-2xl text-slate-400">{topic.symbol}</span>}
            </div>
            <p className="text-sm text-slate-500 mb-4">{topic.description}</p>
            <div className="text-xs text-blueprint-600 font-medium flex items-center">
              Read Standard <ArrowRight className="w-3 h-3 ml-1" />
            </div>
          </Link>
        ))}
      </div>
      
      {categoryTopics.length === 0 && (
        <div className="p-12 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300 text-slate-500">
          No topics found in this category yet.
        </div>
      )}
    </div>
  );
};
