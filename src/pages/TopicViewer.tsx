
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { topics } from '../data';
import { BlueprintCanvas } from '../components/BlueprintCanvas';
import { ArrowLeft, Book, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';

export const TopicViewer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const topic = topics.find(t => t.id === id);

  if (!topic) {
    return <div className="p-8 text-center text-slate-500">Topic not found</div>;
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <Helmet>
        <title>{topic.title} - GD&T Knowledge Base</title>
        <meta name="description" content={topic.description} />
      </Helmet>
      <Link to="/" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Dashboard
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-3xl font-bold text-slate-900">{topic.title}</h1>
              {topic.symbol && (
                <span className="text-4xl font-sans text-slate-400 select-none">{topic.symbol}</span>
              )}
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              {topic.description}
            </p>
          </div>

          <BlueprintCanvas type={topic.blueprintType} />

          <div className="prose prose-slate max-w-none">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Book className="w-5 h-5 text-blueprint-500" />
              Technical Details
            </h3>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <ReactMarkdown>{topic.content}</ReactMarkdown>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-slate-300 p-6 rounded-xl shadow-lg">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Standard Reference
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">Source</div>
                <div className="font-mono text-sm text-blueprint-300">{topic.standardRef}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">Category</div>
                <div className="inline-block px-2 py-1 rounded bg-slate-800 text-xs font-medium border border-slate-700">
                  {topic.category}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blueprint-50 p-6 rounded-xl border border-blueprint-100">
            <h4 className="font-semibold text-blueprint-900 mb-2">Engineering Note</h4>
            <p className="text-sm text-blueprint-800 leading-relaxed">
              Always verify tolerances with the specific manufacturing process capability (Cpk) before finalizing the print.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
