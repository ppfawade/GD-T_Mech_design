
import React from 'react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

interface BlueprintCanvasProps {
  type: 'flatness' | 'straightness' | 'position' | 'circularity' | 'perpendicularity' | 'parallelism' | 'profile' | 'datum' | 'fits' | 'welding' | 'thread' | 'metrology' | 'surface-finish' | 'modifiers' | 'injection-molding' | 'sheet-metal' | 'generic';
  className?: string;
}

export const BlueprintCanvas: React.FC<BlueprintCanvasProps> = ({ type, className }) => {
  const isGeneric = type === 'generic';

  return (
    <div className={clsx(
      "relative w-full bg-blueprint-900 rounded-xl overflow-hidden shadow-inner border border-blueprint-700 transition-all duration-500",
      isGeneric ? "h-48" : "aspect-video",
      className
    )}>
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
        SCALE: {isGeneric ? 'N/A' : '1:1'} <br/>
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
          <motion.path 
            d="M 50 200 Q 100 195, 150 205 T 250 200 T 350 205" 
            className="stroke-white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.line x1="50" y1="190" x2="350" y2="190" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.line x1="50" y1="210" x2="350" y2="210" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <g transform="translate(150, 50)">
            <rect x="0" y="0" width="80" height="40" className="stroke-white fill-blueprint-900" />
            <line x1="40" y1="0" x2="40" y2="40" className="stroke-white" />
            <text x="20" y="28" textAnchor="middle" className="fill-white font-sans text-xl stroke-none">⏥</text>
            <text x="60" y="28" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.05</text>
            <path d="M 40 40 L 40 100 L 100 195" className="stroke-white marker-end" />
            <circle cx="100" cy="195" r="2" className="fill-white stroke-none" />
          </g>
        </g>
      );

    case 'straightness':
      return (
        <g>
          <line x1="50" y1="150" x2="350" y2="150" className="stroke-white stroke-[1]" />
          <rect x="50" y="100" width="300" height="100" className="stroke-white" rx="0" />
          <motion.rect 
            x="50" y="145" width="300" height="10" 
            className="stroke-blueprint-500 fill-blueprint-500/20 stroke-dashed" 
            strokeDasharray="4 4"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 0.5 }}
          />
          <g transform="translate(100, 40)">
             <rect x="0" y="0" width="80" height="30" className="stroke-white fill-blueprint-900" />
             <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
             <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">⎯</text>
             <text x="55" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">Ø0.1</text>
             <path d="M 40 30 L 40 60 L 100 150" className="stroke-white" />
             <circle cx="100" cy="150" r="2" className="fill-white stroke-none" />
          </g>
        </g>
      );

    case 'position':
      return (
        <g>
          <rect x="50" y="50" width="300" height="200" className="stroke-white" />
          <line x1="180" y1="150" x2="220" y2="150" className="stroke-blueprint-500 stroke-[0.5]" />
          <line x1="200" y1="130" x2="200" y2="170" className="stroke-blueprint-500 stroke-[0.5]" />
          <circle cx="205" cy="148" r="30" className="stroke-white stroke-2" />
          <motion.circle 
            cx="200" cy="150" r="10" 
            className="stroke-red-500 fill-red-500/20 stroke-dashed" 
            strokeDasharray="2 2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          />
          <line x1="50" y1="270" x2="200" y2="270" className="stroke-white stroke-[0.5]" />
          <line x1="200" y1="265" x2="200" y2="275" className="stroke-white" />
          <text x="125" y="265" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">BASIC 150</text>
          <g transform="translate(260, 80)">
             <rect x="0" y="0" width="100" height="30" className="stroke-white fill-blueprint-900" />
             <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
             <line x1="70" y1="0" x2="70" y2="30" className="stroke-white" />
             <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">⌖</text>
             <text x="50" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">Ø0.5</text>
             <text x="85" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">A|B|C</text>
             <path d="M 0 15 L -20 15 L -35 120" className="stroke-white" />
             <circle cx="205" cy="148" r="2" className="fill-white stroke-none" />
          </g>
        </g>
      );
      
    case 'perpendicularity':
      return (
        <g>
          <line x1="50" y1="250" x2="350" y2="250" className="stroke-white stroke-2" />
          <text x="360" y="255" className="fill-white font-mono text-sm stroke-none">A</text>
          <g transform="translate(200, 250)">
             <path d="M 0 0 L -10 20 L 10 20 Z" className="fill-blueprint-900 stroke-white" />
             <rect x="-10" y="20" width="20" height="20" className="stroke-white fill-blueprint-900" />
             <text x="0" y="35" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">A</text>
          </g>
          <line x1="150" y1="250" x2="150" y2="50" className="stroke-white stroke-2" />
          <motion.line x1="140" y1="250" x2="140" y2="50" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.line x1="160" y1="250" x2="160" y2="50" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
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

    case 'parallelism':
      return (
        <g>
          <line x1="50" y1="250" x2="350" y2="250" className="stroke-white stroke-2" />
          <text x="360" y="255" className="fill-white font-mono text-sm stroke-none">A</text>
          <g transform="translate(200, 250)">
             <path d="M 0 0 L -10 20 L 10 20 Z" className="fill-blueprint-900 stroke-white" />
             <rect x="-10" y="20" width="20" height="20" className="stroke-white fill-blueprint-900" />
             <text x="0" y="35" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">A</text>
          </g>
          <line x1="50" y1="150" x2="350" y2="150" className="stroke-white stroke-2" />
          <motion.line x1="50" y1="140" x2="350" y2="140" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.line x1="50" y1="160" x2="350" y2="160" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <g transform="translate(150, 50)">
             <rect x="0" y="0" width="80" height="30" className="stroke-white fill-blueprint-900" />
             <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
             <line x1="60" y1="0" x2="60" y2="30" className="stroke-white" />
             <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">∥</text>
             <text x="45" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.1</text>
             <text x="70" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">A</text>
             <path d="M 40 30 L 40 150" className="stroke-white marker-end" />
          </g>
        </g>
      );

    case 'circularity':
      return (
        <g>
          <circle cx="200" cy="150" r="80" className="stroke-white stroke-2" />
          <motion.circle cx="200" cy="150" r="75" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.circle cx="200" cy="150" r="85" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <g transform="translate(200, 150)">
             <line x1="0" y1="0" x2="120" y2="-120" className="stroke-white" />
             <g transform="translate(120, -150)">
                <rect x="0" y="0" width="60" height="30" className="stroke-white fill-blueprint-900" />
                <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
                <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">○</text>
                <text x="45" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.1</text>
             </g>
          </g>
        </g>
      );

    case 'fits':
      return (
        <g>
          {/* Shaft */}
          <rect x="50" y="120" width="140" height="60" className="stroke-white fill-blueprint-900" />
          <text x="120" y="155" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">SHAFT (g6)</text>
          
          {/* Hole */}
          <path d="M 210 50 L 210 250 L 350 250 L 350 50 Z M 210 115 L 350 115 L 350 185 L 210 185 Z" className="stroke-white fill-blueprint-900" fillRule="evenodd" />
          <text x="280" y="100" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">HOLE (H7)</text>
          
          {/* Clearance Zone */}
          <motion.rect 
            x="190" y="120" width="20" height="60" 
            className="fill-green-500/30 stroke-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
          />
          <text x="200" y="220" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">CLEARANCE</text>
          <line x1="200" y1="200" x2="200" y2="180" className="stroke-white stroke-[0.5]" />
        </g>
      );

    case 'welding':
      return (
        <g>
          <line x1="50" y1="200" x2="350" y2="200" className="stroke-white stroke-2" />
          <line x1="200" y1="200" x2="200" y2="100" className="stroke-white stroke-2" />
          
          {/* Weld Symbol */}
          <line x1="200" y1="150" x2="300" y2="150" className="stroke-white" />
          <path d="M 300 150 L 290 145 L 290 155 Z" className="fill-white" />
          <path d="M 200 150 L 150 100" className="stroke-white" />
          
          {/* Fillet Symbol */}
          <path d="M 240 150 L 240 130 L 260 150" className="stroke-white fill-none" />
          <text x="230" y="145" textAnchor="end" className="fill-white font-mono text-xs stroke-none">5</text>
          
          {/* Weld Bead */}
          <path d="M 195 200 Q 200 195 205 200" className="stroke-white fill-none" />
          <path d="M 200 195 L 200 150" className="stroke-white stroke-dashed stroke-[0.5]" />
        </g>
      );

    case 'thread':
      return (
        <g>
          {/* Bolt Head */}
          <rect x="50" y="100" width="60" height="100" className="stroke-white fill-blueprint-900" />
          
          {/* Threaded Shaft */}
          <rect x="110" y="120" width="200" height="60" className="stroke-white fill-blueprint-900" />
          
          {/* Threads */}
          <path d="M 110 120 L 310 120" className="stroke-white" />
          <path d="M 110 180 L 310 180" className="stroke-white" />
          
          {/* Thread Crests */}
          <line x1="110" y1="125" x2="310" y2="125" className="stroke-white stroke-[0.5]" />
          <line x1="110" y1="175" x2="310" y2="175" className="stroke-white stroke-[0.5]" />
          
          {/* Dimension */}
          <line x1="110" y1="200" x2="110" y2="220" className="stroke-white" />
          <line x1="310" y1="200" x2="310" y2="220" className="stroke-white" />
          <line x1="110" y1="210" x2="310" y2="210" className="stroke-white" />
          <text x="210" y="235" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">M20 x 2.5</text>
        </g>
      );

    case 'metrology':
      return (
        <g>
          {/* Part */}
          <path d="M 100 200 L 300 200 L 300 150 L 250 100 L 100 100 Z" className="stroke-white fill-blueprint-900 stroke-2" />
          
          {/* CMM Probe */}
          <line x1="200" y1="20" x2="200" y2="80" className="stroke-red-500 stroke-2" />
          <circle cx="200" cy="90" r="10" className="fill-red-500" />
          
          {/* Points */}
          <circle cx="150" cy="100" r="2" className="fill-green-500" />
          <circle cx="200" cy="100" r="2" className="fill-green-500" />
          <circle cx="250" cy="100" r="2" className="fill-green-500" />
          
          <text x="200" y="50" textAnchor="start" className="fill-white font-mono text-xs stroke-none ml-2"> PROBE</text>
        </g>
      );

    default:
      return (
        <g className="opacity-50">
          <text x="200" y="150" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">DIAGRAM NOT AVAILABLE</text>
          <rect x="100" y="130" width="200" height="40" className="stroke-white stroke-dashed fill-none" />
        </g>
      );
  }
}
