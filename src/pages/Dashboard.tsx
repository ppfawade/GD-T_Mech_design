
import React from 'react';
import { Link } from 'react-router-dom';
import { topics } from '../data';
import { ArrowRight, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const Dashboard: React.FC = () => {
  const [search, setSearch] = React.useState('');

  const filteredTopics = topics.filter(t => 
    t.title.toLowerCase().includes(search.toLowerCase()) || 
    t.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <Helmet>
        <title>GD&T Knowledge Base - Engineering Standards & DFMA</title>
        <meta name="description" content="A comprehensive knowledge base for mechanical engineers focusing on Geometric Dimensioning and Tolerancing (GD&T), DFMA, ISO 14405, and manufacturing standards." />
      </Helmet>
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Engineering Knowledge Base</h1>
        <p className="text-slate-500 max-w-2xl">
          A centralized reference for Geometric Dimensioning and Tolerancing (GD&T), 
          Design for Manufacture and Assembly (DFMA), and manufacturing standards.
        </p>
      </header>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search symbols, terms, or standards..." 
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blueprint-500 focus:border-transparent transition-shadow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Recent / Featured Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map(topic => (
          <Link 
            key={topic.id} 
            to={`/topic/${topic.id}`}
            className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blueprint-300 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blueprint-50 text-blueprint-700 font-bold text-lg border border-blueprint-100">
                {topic.symbol || topic.title[0]}
              </span>
              <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                {topic.category}
              </span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blueprint-600 transition-colors">
              {topic.title}
            </h3>
            <p className="text-sm text-slate-500 line-clamp-2 mb-4">
              {topic.description}
            </p>
            <div className="flex items-center text-xs text-blueprint-600 font-medium">
              View Details <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
