
import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const standards = [
  {
    code: 'ASME Y14.5-2018',
    title: 'Dimensioning and Tolerancing',
    description: 'The authoritative guideline for the design language of geometric dimensioning and tolerancing (GD&T). It establishes symbols, rules, definitions, requirements, defaults, and recommended practices.',
    url: 'https://www.asme.org/codes-standards/find-codes-standards/y14-5-dimensioning-tolerancing'
  },
  {
    code: 'ISO 1101:2017',
    title: 'Geometrical product specifications (GPS) - Geometrical tolerancing',
    description: 'Defines the symbol language for geometrical specification of workpieces and the rules for its interpretation.',
    url: 'https://www.iso.org/standard/66207.html'
  },
  {
    code: 'ASME Y14.100-2017',
    title: 'Engineering Drawing Practices',
    description: 'Establishes the essential requirements and reference documents applicable to the preparation and revision of manual or computer-generated engineering drawings.',
    url: 'https://www.asme.org/codes-standards/find-codes-standards/y14-100-engineering-drawing-practices'
  },
  {
    code: 'ISO 2768-1',
    title: 'General Tolerances',
    description: 'Intended to simplify drawing indications and specifies general tolerances for linear and angular dimensions without individual tolerance indications.',
    url: 'https://www.iso.org/standard/38197.html'
  },
  {
    code: 'ASME Y14.36M-2018',
    title: 'Surface Texture Symbols',
    description: 'Establishes the method to designate controls for surface texture of solid materials.',
    url: 'https://www.asme.org/codes-standards/find-codes-standards/y14-36m-surface-texture-symbols'
  }
];

export const StandardsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>Engineering Standards Reference - GD&T Knowledge Base</title>
        <meta name="description" content="List of essential mechanical engineering standards including ASME Y14.5, ISO 1101, ISO 2768, and ISO 14405." />
      </Helmet>
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Engineering Standards</h1>
        <p className="text-slate-500 mt-2">
          The absolute references for technical communication in mechanical engineering.
        </p>
      </header>

      <div className="grid gap-6">
        {standards.map((std) => (
          <div key={std.code} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blueprint-300 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-5 h-5 text-blueprint-600" />
                  <h3 className="text-lg font-bold text-slate-900">{std.code}</h3>
                </div>
                <h4 className="text-md font-medium text-slate-700 mb-2">{std.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                  {std.description}
                </p>
              </div>
              <a 
                href={std.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:bg-white hover:border-blueprint-300 hover:text-blueprint-600 transition-all whitespace-nowrap self-start"
              >
                View Official
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
