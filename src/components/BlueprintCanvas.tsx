
import React from 'react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

interface BlueprintCanvasProps {
  type: 'flatness' | 'straightness' | 'position' | 'circularity' | 'perpendicularity' | 'parallelism' | 'profile' | 'datum' | 'generic';
  className?: string;
}

export const BlueprintCanvas: React.FC<BlueprintCanvasProps> = ({ type, className }) => {
  return (
    <div className={clsx("relative w-full aspect-video bg-blueprint-900 rounded-xl overflow-hidden shadow-inner border border-blueprint-700", className)}>
      {/* Grid Background */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none" />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <svg viewBox="0 0 400 300" className="w-full h-full text-white fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {renderDiagram(type)}
        </svg>
      </div>

      {/* Labels/Annotations Overlay */}
      <div className="absolute bottom-4 right-4 text-blueprint-100 font-mono text-xs opacity-70">
        SCALE: 1:1 <br/>
        DWG NO: {type.toUpperCase()}-001
      </div>
    </div>
  );
};

function renderDiagram(type: string) {
  switch (type) {
    case 'flatness':
      return (
        <g>
          {/* Surface Line (Wavy/Imperfect) */}
          <motion.path 
            d="M 50 200 Q 100 195, 150 205 T 250 200 T 350 205" 
            className="stroke-white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
          
          {/* Tolerance Zone (Parallel Planes) */}
          <motion.line x1="50" y1="190" x2="350" y2="190" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.line x1="50" y1="210" x2="350" y2="210" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          
          {/* Feature Control Frame */}
          <g transform="translate(150, 50)">
            <rect x="0" y="0" width="80" height="40" className="stroke-white fill-blueprint-900" />
            <line x1="40" y1="0" x2="40" y2="40" className="stroke-white" />
            <text x="20" y="28" textAnchor="middle" className="fill-white font-sans text-xl stroke-none">⏥</text>
            <text x="60" y="28" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.05</text>
            
            {/* Leader Line */}
            <path d="M 40 40 L 40 100 L 100 195" className="stroke-white marker-end" />
            <circle cx="100" cy="195" r="2" className="fill-white stroke-none" />
          </g>
        </g>
      );

    case 'straightness':
      return (
        <g>
          {/* Cylinder Axis */}
          <line x1="50" y1="150" x2="350" y2="150" className="stroke-white stroke-[1]" />
          
          {/* Cylinder Body */}
          <rect x="50" y="100" width="300" height="100" className="stroke-white" rx="0" />
          
          {/* Tolerance Zone (Cylinder around axis) */}
          <motion.rect 
            x="50" y="145" width="300" height="10" 
            className="stroke-blueprint-500 fill-blueprint-500/20 stroke-dashed" 
            strokeDasharray="4 4"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 0.5 }}
          />

          {/* Feature Control Frame */}
          <g transform="translate(100, 40)">
             <rect x="0" y="0" width="80" height="30" className="stroke-white fill-blueprint-900" />
             <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
             <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">⎯</text>
             <text x="55" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">Ø0.1</text>
             
             {/* Leader */}
             <path d="M 40 30 L 40 60 L 100 150" className="stroke-white" />
             <circle cx="100" cy="150" r="2" className="fill-white stroke-none" />
          </g>
        </g>
      );

    case 'position':
      return (
        <g>
          {/* Plate */}
          <rect x="50" y="50" width="300" height="200" className="stroke-white" />
          
          {/* True Position Crosshair */}
          <line x1="180" y1="150" x2="220" y2="150" className="stroke-blueprint-500 stroke-[0.5]" />
          <line x1="200" y1="130" x2="200" y2="170" className="stroke-blueprint-500 stroke-[0.5]" />
          
          {/* Actual Hole */}
          <circle cx="205" cy="148" r="30" className="stroke-white stroke-2" />
          
          {/* Tolerance Zone */}
          <motion.circle 
            cx="200" cy="150" r="10" 
            className="stroke-red-500 fill-red-500/20 stroke-dashed" 
            strokeDasharray="2 2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          />

          {/* Dimensions */}
          <line x1="50" y1="270" x2="200" y2="270" className="stroke-white stroke-[0.5]" />
          <line x1="200" y1="265" x2="200" y2="275" className="stroke-white" />
          <text x="125" y="265" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">BASIC 150</text>

          {/* Feature Control Frame */}
          <g transform="translate(260, 80)">
             <rect x="0" y="0" width="100" height="30" className="stroke-white fill-blueprint-900" />
             <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
             <line x1="70" y1="0" x2="70" y2="30" className="stroke-white" />
             <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">⌖</text>
             <text x="50" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">Ø0.5</text>
             <text x="85" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">A|B|C</text>
             
             {/* Leader */}
             <path d="M 0 15 L -20 15 L -35 120" className="stroke-white" />
             <circle cx="205" cy="148" r="2" className="fill-white stroke-none" />
          </g>
        </g>
      );
      
    case 'perpendicularity':
      return (
        <g>
          {/* Datum Plane A */}
          <line x1="50" y1="250" x2="350" y2="250" className="stroke-white stroke-2" />
          <text x="360" y="255" className="fill-white font-mono text-sm stroke-none">A</text>
          <g transform="translate(200, 250)">
             <path d="M 0 0 L -10 20 L 10 20 Z" className="fill-blueprint-900 stroke-white" />
             <rect x="-10" y="20" width="20" height="20" className="stroke-white fill-blueprint-900" />
             <text x="0" y="35" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">A</text>
          </g>

          {/* Feature Surface */}
          <line x1="150" y1="250" x2="150" y2="50" className="stroke-white stroke-2" />
          
          {/* Tolerance Zone */}
          <motion.line x1="140" y1="250" x2="140" y2="50" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.line x1="160" y1="250" x2="160" y2="50" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />

          {/* FCF */}
          <g transform="translate(200, 100)">
             <rect x="0" y="0" width="80" height="30" className="stroke-white fill-blueprint-900" />
             <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
             <line x1="60" y1="0" x2="60" y2="30" className="stroke-white" />
             <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">⟂</text>
             <text x="45" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.2</text>
             <text x="70" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">A</text>
             
             <path d="M 0 15 L -50 15" className="stroke-white marker-end" />
          </g>
        </g>
      );

    default:
      return (
        <g>
          <rect x="100" y="100" width="200" height="100" className="stroke-white" />
          <text x="200" y="155" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">DIAGRAM NOT AVAILABLE</text>
        </g>
      );
  }
}
