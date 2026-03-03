
import React from 'react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

interface BlueprintCanvasProps {
  type: 'flatness' | 'straightness' | 'position' | 'circularity' | 'cylindricity' | 'perpendicularity' | 'parallelism' | 'angularity' | 'profile' | 'profile-line' | 'runout' | 'concentricity' | 'symmetry' | 'datum' | 'datum-system' | 'fits' | 'welding' | 'thread' | 'metrology' | 'surface-finish' | 'modifiers' | 'material-modifiers' | 'rule-1' | 'independency' | 'iso-14405' | 'injection-molding' | 'sheet-metal' | 'cnc-machining' | 'stackup' | 'generic' | 'iso-22081';
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
          <defs>
             <pattern id="hatch" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                <line x1="0" y="0" x2="0" y2="10" className="stroke-blueprint-700" strokeWidth="1" />
             </pattern>
          </defs>

          {/* Hole Left Wall */}
          <rect x="90" y="50" width="40" height="200" className="stroke-white fill-blueprint-900" />
          <rect x="90" y="50" width="40" height="200" fill="url(#hatch)" className="stroke-none opacity-50" />
          
          {/* Hole Right Wall */}
          <rect x="270" y="50" width="40" height="200" className="stroke-white fill-blueprint-900" />
          <rect x="270" y="50" width="40" height="200" fill="url(#hatch)" className="stroke-none opacity-50" />
          
          {/* Connecting lines (dashed) */}
          <line x1="130" y1="50" x2="270" y2="50" className="stroke-blueprint-500 stroke-dashed stroke-[0.5]" />
          <line x1="130" y1="250" x2="270" y2="250" className="stroke-blueprint-500 stroke-dashed stroke-[0.5]" />

          {/* Shaft */}
          <rect x="150" y="30" width="100" height="240" className="stroke-white fill-blueprint-800" />
          <text x="200" y="150" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">SHAFT</text>
          <text x="200" y="170" textAnchor="middle" className="fill-blueprint-300 font-mono text-xs stroke-none">(g6)</text>

          {/* Hole Label */}
          <text x="320" y="150" textAnchor="start" className="fill-white font-mono text-sm stroke-none">HOLE</text>
          <text x="320" y="170" textAnchor="start" className="fill-blueprint-300 font-mono text-xs stroke-none">(H7)</text>
          <line x1="315" y1="145" x2="290" y2="145" className="stroke-white stroke-[0.5]" />
          <circle cx="290" cy="145" r="2" className="fill-white" />

          {/* Clearance Zone Highlight (Left Side) */}
          <motion.rect 
            x="130" y="50" width="20" height="200" 
            className="fill-green-500/40 stroke-none"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Clearance Label */}
          <text x="120" y="30" textAnchor="end" className="fill-green-400 font-mono text-sm stroke-none font-bold">CLEARANCE</text>
          <path d="M 125 35 L 138 60" className="stroke-green-400 stroke-[1]" />
          <circle cx="140" cy="65" r="2" className="fill-green-400" />
          
          {/* Radial Dimension Arrows */}
          <line x1="130" y1="220" x2="150" y2="220" className="stroke-green-400 stroke-[0.5]" />
          <path d="M 130 220 L 135 218 L 135 222 Z" className="fill-green-400 stroke-none" />
          <path d="M 150 220 L 145 218 L 145 222 Z" className="fill-green-400 stroke-none" />
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

    case 'cylindricity':
      return (
        <g>
          {/* Cylinder Side View */}
          <rect x="100" y="50" width="200" height="100" className="stroke-white fill-blueprint-900" />
          <ellipse cx="100" cy="100" rx="20" ry="50" className="stroke-white fill-blueprint-900" />
          <path d="M 300 50 A 20 50 0 0 1 300 150" className="stroke-white fill-none" />
          
          {/* Tolerance Zone (Cross Section) */}
          <g transform="translate(200, 220)">
            <circle cx="0" cy="0" r="40" className="stroke-white stroke-2 fill-none" />
            <motion.circle cx="0" cy="0" r="35" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
            <motion.circle cx="0" cy="0" r="45" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
            <text x="0" y="60" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">TOLERANCE ZONE</text>
          </g>
          
          {/* FCF */}
          <g transform="translate(250, 80)">
             <rect x="0" y="0" width="60" height="30" className="stroke-white fill-blueprint-900" />
             <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
             <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">⌭</text>
             <text x="45" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.1</text>
             <path d="M 0 15 L -50 15" className="stroke-white marker-end" />
          </g>
        </g>
      );

    case 'angularity':
      return (
        <g>
          {/* Base Datum A */}
          <line x1="50" y1="250" x2="350" y2="250" className="stroke-white stroke-2" />
          <text x="360" y="255" className="fill-white font-mono text-sm stroke-none">A</text>
          <g transform="translate(200, 250)">
             <path d="M 0 0 L -10 20 L 10 20 Z" className="fill-blueprint-900 stroke-white" />
             <rect x="-10" y="20" width="20" height="20" className="stroke-white fill-blueprint-900" />
             <text x="0" y="35" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">A</text>
          </g>
          
          {/* Angled Surface */}
          <path d="M 100 250 L 250 100" className="stroke-white stroke-2" />
          
          {/* Tolerance Zone */}
          <motion.path d="M 100 240 L 250 90" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.path d="M 100 260 L 250 110" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          
          {/* Angle Dimension */}
          <path d="M 150 250 A 50 50 0 0 0 185 215" className="stroke-white fill-none" />
          <text x="190" y="230" className="fill-white font-mono text-xs stroke-none">45°</text>
          
          {/* FCF */}
          <g transform="translate(250, 50)">
             <rect x="0" y="0" width="80" height="30" className="stroke-white fill-blueprint-900" />
             <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
             <line x1="60" y1="0" x2="60" y2="30" className="stroke-white" />
             <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">∠</text>
             <text x="45" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.2</text>
             <text x="70" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">A</text>
             <path d="M 0 30 L -20 60" className="stroke-white marker-end" />
          </g>
        </g>
      );

    case 'runout':
      return (
        <g>
          {/* Shaft */}
          <rect x="50" y="130" width="300" height="40" className="stroke-white fill-blueprint-900" />
          <line x1="40" y1="150" x2="360" y2="150" className="stroke-blueprint-500 stroke-dashed stroke-[0.5]" />
          
          {/* V-Blocks (Datum A-B) */}
          <path d="M 80 170 L 100 190 L 120 170" className="stroke-white fill-none" />
          <path d="M 280 170 L 300 190 L 320 170" className="stroke-white fill-none" />
          
          {/* Dial Indicator */}
          <g transform="translate(200, 80)">
             <circle cx="0" cy="0" r="20" className="stroke-white fill-blueprint-900" />
             <line x1="0" y1="20" x2="0" y2="50" className="stroke-white" />
             <path d="M 0 50 L -3 55 L 3 55 Z" className="fill-white" />
             <line x1="0" y1="0" x2="10" y2="-10" className="stroke-red-500 stroke-2" />
             <text x="0" y="-25" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">FIM</text>
          </g>
          
          {/* Rotation Arrow */}
          <path d="M 370 140 A 10 10 0 1 1 370 160" className="stroke-white fill-none marker-end" />
          
          {/* FCF */}
          <g transform="translate(150, 220)">
             <rect x="0" y="0" width="100" height="30" className="stroke-white fill-blueprint-900" />
             <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
             <line x1="70" y1="0" x2="70" y2="30" className="stroke-white" />
             <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">↗</text>
             <text x="50" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.1</text>
             <text x="85" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">A-B</text>
          </g>
        </g>
      );

    case 'cnc-machining':
      return (
        <g>
          {/* Part Outline */}
          <rect x="50" y="50" width="300" height="200" className="stroke-white fill-blueprint-900" />
          
          {/* Pocket with Radii */}
          <path d="M 100 100 L 250 100 A 20 20 0 0 1 270 120 L 270 180 A 20 20 0 0 1 250 200 L 100 200 A 20 20 0 0 1 80 180 L 80 120 A 20 20 0 0 1 100 100 Z" className="stroke-white fill-none stroke-2" />
          
          {/* Tool Path (Trochoidal) */}
          <motion.path 
            d="M 110 110 A 10 10 0 0 1 120 120 A 10 10 0 0 1 130 110" 
            className="stroke-blueprint-500 stroke-dashed stroke-[0.5]"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Radius Callout */}
          <line x1="270" y1="120" x2="320" y2="80" className="stroke-white stroke-[0.5]" />
          <text x="325" y="75" className="fill-white font-mono text-xs stroke-none">R20 (Tool Ø12)</text>
          
          {/* Depth Callout */}
          <text x="175" y="150" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">POCKET DEPTH 15</text>
        </g>
      );

    case 'stackup':
      return (
        <g>
          {/* Stackup Diagram */}
          <line x1="50" y1="150" x2="350" y2="150" className="stroke-blueprint-700 stroke-[0.5]" />
          
          {/* Part A */}
          <rect x="50" y="100" width="100" height="50" className="stroke-white fill-blueprint-800" />
          <text x="100" y="130" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">A</text>
          <line x1="50" y1="90" x2="150" y2="90" className="stroke-white marker-start marker-end" />
          <text x="100" y="80" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">10 ±0.1</text>
          
          {/* Part B */}
          <rect x="150" y="100" width="120" height="50" className="stroke-white fill-blueprint-800" />
          <text x="210" y="130" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">B</text>
          <line x1="150" y1="90" x2="270" y2="90" className="stroke-white marker-start marker-end" />
          <text x="210" y="80" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">12 ±0.2</text>
          
          {/* Gap */}
          <line x1="270" y1="100" x2="270" y2="160" className="stroke-white stroke-dashed" />
          <line x1="350" y1="100" x2="350" y2="160" className="stroke-white stroke-dashed" />
          <line x1="270" y1="130" x2="350" y2="130" className="stroke-green-400 marker-start marker-end stroke-2" />
          <text x="310" y="120" textAnchor="middle" className="fill-green-400 font-mono text-xs stroke-none font-bold">GAP (?)</text>
          
          {/* Calculation */}
          <text x="200" y="220" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">Worst Case: ±0.3</text>
          <text x="200" y="240" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">RSS: ±0.22</text>
        </g>
      );

    case 'concentricity':
      return (
        <g>
          {/* Datum Axis */}
          <line x1="50" y1="150" x2="350" y2="150" className="stroke-blueprint-500 stroke-dashed stroke-[0.5]" />
          <text x="360" y="155" className="fill-white font-mono text-sm stroke-none">A</text>
          
          {/* Feature */}
          <circle cx="200" cy="150" r="60" className="stroke-white stroke-2 fill-none" />
          
          {/* Tolerance Zone */}
          <circle cx="200" cy="150" r="10" className="stroke-blueprint-500 stroke-dashed fill-none" strokeDasharray="4 4" />
          <text x="200" y="130" textAnchor="middle" className="fill-blueprint-300 font-mono text-xs stroke-none">TOL ZONE Ø0.1</text>
          
          {/* Median Points (Conceptual) */}
          <circle cx="198" cy="150" r="2" className="fill-red-500" />
          <circle cx="202" cy="150" r="2" className="fill-red-500" />
          
          {/* FCF */}
          <g transform="translate(250, 220)">
             <rect x="0" y="0" width="80" height="30" className="stroke-white fill-blueprint-900" />
             <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
             <line x1="60" y1="0" x2="60" y2="30" className="stroke-white" />
             <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">◎</text>
             <text x="45" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.1</text>
             <text x="70" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">A</text>
             <path d="M 0 15 L -50 15" className="stroke-white marker-end" />
          </g>
        </g>
      );

    case 'symmetry':
      return (
        <g>
          {/* Datum Plane A */}
          <line x1="200" y1="50" x2="200" y2="250" className="stroke-blueprint-500 stroke-dashed stroke-[0.5]" />
          <text x="200" y="265" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">A</text>
          
          {/* Feature (Slot) */}
          <rect x="150" y="100" width="100" height="100" className="stroke-white fill-none stroke-2" />
          
          {/* Tolerance Zone */}
          <line x1="195" y1="100" x2="195" y2="200" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" />
          <line x1="205" y1="100" x2="205" y2="200" className="stroke-blueprint-500 stroke-dashed" strokeDasharray="4 4" />
          
          {/* Median Points */}
          <circle cx="202" cy="120" r="2" className="fill-red-500" />
          <circle cx="198" cy="180" r="2" className="fill-red-500" />
          
          {/* FCF */}
          <g transform="translate(260, 135)">
             <rect x="0" y="0" width="80" height="30" className="stroke-white fill-blueprint-900" />
             <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
             <line x1="60" y1="0" x2="60" y2="30" className="stroke-white" />
             <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">⌯</text>
             <text x="45" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.1</text>
             <text x="70" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">A</text>
             <path d="M 0 15 L -10 15" className="stroke-white marker-end" />
          </g>
        </g>
      );

    case 'profile-line':
      return (
        <g>
          {/* Surface Profile */}
          <path d="M 50 200 Q 150 100 250 200 T 350 150" className="stroke-white stroke-2 fill-none" />
          
          {/* Tolerance Zone */}
          <path d="M 50 190 Q 150 90 250 190 T 350 140" className="stroke-blueprint-500 stroke-dashed fill-none" strokeDasharray="4 4" />
          <path d="M 50 210 Q 150 110 250 210 T 350 160" className="stroke-blueprint-500 stroke-dashed fill-none" strokeDasharray="4 4" />
          
          {/* Cross Section Indicator */}
          <line x1="200" y1="50" x2="200" y2="250" className="stroke-blueprint-300 stroke-dashed stroke-[0.5]" />
          <text x="205" y="60" className="fill-blueprint-300 font-mono text-xs stroke-none">CROSS SECTION A-A</text>
          
          {/* FCF */}
          <g transform="translate(100, 50)">
             <rect x="0" y="0" width="80" height="30" className="stroke-white fill-blueprint-900" />
             <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
             <line x1="60" y1="0" x2="60" y2="30" className="stroke-white" />
             <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">⌒</text>
             <text x="45" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.2</text>
             <text x="70" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">A</text>
             <path d="M 40 30 L 100 150" className="stroke-white marker-end" />
          </g>
        </g>
      );

    case 'rule-1':
      return (
        <g>
          {/* MMC Boundary (Perfect Cylinder) */}
          <rect x="50" y="100" width="300" height="100" className="stroke-blueprint-500 stroke-dashed fill-none" strokeDasharray="4 4" />
          <text x="200" y="90" textAnchor="middle" className="fill-blueprint-300 font-mono text-xs stroke-none">MMC BOUNDARY (PERFECT FORM)</text>
          
          {/* Actual Part (Bent but fits) */}
          <path d="M 50 110 Q 200 140 350 110 L 350 190 Q 200 220 50 190 Z" className="stroke-white fill-blueprint-900 opacity-80" />
          <text x="200" y="150" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">ACTUAL PART</text>
          
          {/* Dimension */}
          <line x1="50" y1="210" x2="50" y2="230" className="stroke-white" />
          <line x1="350" y1="210" x2="350" y2="230" className="stroke-white" />
          <line x1="50" y1="220" x2="350" y2="220" className="stroke-white" />
          <text x="200" y="240" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">Ø10 ±0.1</text>
          
          {/* Note */}
          <text x="200" y="260" textAnchor="middle" className="fill-green-400 font-mono text-xs stroke-none">MUST NOT VIOLATE MMC BOUNDARY</text>
        </g>
      );

    case 'independency':
      return (
        <g>
          {/* MMC Boundary */}
          <rect x="50" y="100" width="300" height="100" className="stroke-blueprint-500 stroke-dashed fill-none opacity-50" strokeDasharray="4 4" />
          
          {/* Actual Part (Bent and violates boundary) */}
          <path d="M 50 80 Q 200 180 350 80 L 350 180 Q 200 280 50 180 Z" className="stroke-white fill-blueprint-900" />
          
          {/* Dimension with Independency Symbol */}
          <line x1="50" y1="250" x2="350" y2="250" className="stroke-white" />
          <text x="200" y="270" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">Ø10 ±0.1 Ⓘ</text>
          
          {/* Labels */}
          <text x="200" y="130" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">SIZE IS OK</text>
          <text x="200" y="50" textAnchor="middle" className="fill-yellow-400 font-mono text-xs stroke-none">FORM CAN EXCEED SIZE TOLERANCE</text>
          
          {/* Circle I symbol detail */}
          <circle cx="245" cy="265" r="8" className="stroke-white fill-none" />
          <text x="245" y="269" textAnchor="middle" className="fill-white font-sans text-xs stroke-none font-bold">I</text>
        </g>
      );

    case 'datum-system':
      return (
        <g>
          {/* 3D Block Representation */}
          <path d="M 100 200 L 250 200 L 350 150 L 200 150 Z" className="stroke-white fill-blueprint-800" /> {/* Top */}
          <path d="M 100 200 L 100 100 L 250 100 L 250 200 Z" className="stroke-white fill-blueprint-900" /> {/* Front */}
          <path d="M 250 200 L 350 150 L 350 50 L 250 100 Z" className="stroke-white fill-blueprint-800" /> {/* Side */}
          
          {/* Primary Datum A (Bottom - 3 Points) */}
          <circle cx="130" cy="180" r="4" className="fill-red-500 stroke-white" />
          <circle cx="220" cy="180" r="4" className="fill-red-500 stroke-white" />
          <circle cx="175" cy="130" r="4" className="fill-red-500 stroke-white" />
          <text x="175" y="220" className="fill-red-500 font-mono text-xs stroke-none font-bold">A (3 PTS)</text>
          
          {/* Secondary Datum B (Back - 2 Points) */}
          <circle cx="150" cy="150" r="4" className="fill-green-500 stroke-white" />
          <circle cx="300" cy="150" r="4" className="fill-green-500 stroke-white" />
          <text x="300" y="130" className="fill-green-500 font-mono text-xs stroke-none font-bold">B (2 PTS)</text>
          
          {/* Tertiary Datum C (Side - 1 Point) */}
          <circle cx="300" cy="100" r="4" className="fill-blue-500 stroke-white" />
          <text x="360" y="100" className="fill-blue-500 font-mono text-xs stroke-none font-bold">C (1 PT)</text>
          
          {/* Axes */}
          <line x1="50" y1="250" x2="90" y2="250" className="stroke-blueprint-300 marker-end" />
          <text x="95" y="255" className="fill-blueprint-300 font-mono text-xs stroke-none">X</text>
          <line x1="50" y1="250" x2="50" y2="210" className="stroke-blueprint-300 marker-end" />
          <text x="45" y="205" className="fill-blueprint-300 font-mono text-xs stroke-none">Z</text>
          <line x1="50" y1="250" x2="80" y2="230" className="stroke-blueprint-300 marker-end" />
          <text x="85" y="230" className="fill-blueprint-300 font-mono text-xs stroke-none">Y</text>
        </g>
      );

    case 'material-modifiers':
      return (
        <g>
          {/* Table Header */}
          <rect x="50" y="50" width="300" height="30" className="stroke-white fill-blueprint-800" />
          <text x="200" y="70" textAnchor="middle" className="fill-white font-mono text-sm stroke-none font-bold">BONUS TOLERANCE CALCULATION</text>
          
          {/* Table Rows */}
          <rect x="50" y="80" width="300" height="120" className="stroke-white fill-none" />
          <line x1="50" y1="120" x2="350" y2="120" className="stroke-white" />
          <line x1="50" y1="160" x2="350" y2="160" className="stroke-white" />
          <line x1="150" y1="80" x2="150" y2="200" className="stroke-white" />
          <line x1="250" y1="80" x2="250" y2="200" className="stroke-white" />
          
          {/* Headers */}
          <text x="100" y="100" textAnchor="middle" className="fill-blueprint-300 font-mono text-xs stroke-none">HOLE SIZE</text>
          <text x="200" y="100" textAnchor="middle" className="fill-blueprint-300 font-mono text-xs stroke-none">BONUS</text>
          <text x="300" y="100" textAnchor="middle" className="fill-blueprint-300 font-mono text-xs stroke-none">TOTAL TOL</text>
          
          {/* Row 1 (MMC) */}
          <text x="100" y="140" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">Ø9.9 (MMC)</text>
          <text x="200" y="140" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0</text>
          <text x="300" y="140" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.1</text>
          
          {/* Row 2 (Nominal) */}
          <text x="100" y="180" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">Ø10.0</text>
          <text x="200" y="180" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.1</text>
          <text x="300" y="180" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.2</text>
          
          {/* FCF Example */}
          <g transform="translate(130, 230)">
             <rect x="0" y="0" width="140" height="30" className="stroke-white fill-blueprint-900" />
             <line x1="30" y1="0" x2="30" y2="30" className="stroke-white" />
             <line x1="100" y1="0" x2="100" y2="30" className="stroke-white" />
             <text x="15" y="22" textAnchor="middle" className="fill-white font-sans text-lg stroke-none">⌖</text>
             <text x="65" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">Ø0.1 Ⓜ</text>
             <text x="120" y="22" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">A</text>
          </g>
        </g>
      );

    case 'iso-14405':
      return (
        <g>
          {/* Legend Background */}
          <rect x="260" y="20" width="130" height="100" className="fill-blueprint-900 stroke-blueprint-500 opacity-80" />
          
          {/* Real Feature (Irregular Blob) */}
          <path 
            d="M 150 50 
               C 220 50, 250 100, 250 150 
               C 250 220, 200 260, 150 250 
               C 80 240, 40 200, 50 150 
               C 60 90, 100 50, 150 50 Z" 
            className="stroke-white fill-blueprint-800 stroke-2 opacity-60" 
          />
          <text x="150" y="150" textAnchor="middle" className="fill-white font-mono text-xs stroke-none opacity-50">REAL FEATURE</text>

          {/* LP (Two Point Size) */}
          <line x1="50" y1="150" x2="250" y2="150" className="stroke-yellow-400 stroke-2" strokeDasharray="4 4" />
          <circle cx="50" cy="150" r="3" className="fill-yellow-400 stroke-none" />
          <circle cx="250" cy="150" r="3" className="fill-yellow-400 stroke-none" />
          <text x="280" y="40" className="fill-yellow-400 font-mono text-xs stroke-none font-bold">LP: 2-POINT</text>

          {/* GX (Maximum Inscribed - Inner Circle) */}
          <circle cx="155" cy="155" r="85" className="stroke-green-400 fill-none stroke-2" strokeDasharray="2 2" />
          <text x="280" y="60" className="fill-green-400 font-mono text-xs stroke-none font-bold">GX: MAX INSCRIBED</text>

          {/* GN (Minimum Circumscribed - Outer Circle) */}
          <circle cx="145" cy="148" r="110" className="stroke-red-400 fill-none stroke-2" strokeDasharray="6 2" />
          <text x="280" y="80" className="fill-red-400 font-mono text-xs stroke-none font-bold">GN: MIN CIRCUMSCRIBED</text>
          
          {/* GG (Least Squares - Average) */}
          <circle cx="150" cy="150" r="98" className="stroke-blue-400 fill-none stroke-2" />
          <text x="280" y="100" className="fill-blue-400 font-mono text-xs stroke-none font-bold">GG: LEAST SQUARES</text>

          {/* Dimension Line Example */}
          <line x1="50" y1="280" x2="250" y2="280" className="stroke-white" />
          <line x1="50" y1="270" x2="50" y2="290" className="stroke-white" />
          <line x1="250" y1="270" x2="250" y2="290" className="stroke-white" />
          <text x="150" y="295" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">Ø20 ±0.1 ⒼⓃ</text>
        </g>
      );

    case 'cnc-machining':
      return (
        <g>
          {/* Pocket with Internal Radii */}
          <path d="M 50 50 L 250 50 L 250 200 L 50 200 Z" className="stroke-white fill-blueprint-800 stroke-2" />
          <path d="M 80 80 L 220 80 L 220 170 L 80 170 Z" className="stroke-white fill-blueprint-900 stroke-2" />
          
          {/* Tool Path */}
          <circle cx="80" cy="80" r="10" className="stroke-yellow-400 fill-none stroke-dashed" />
          <text x="95" y="75" className="fill-yellow-400 font-mono text-xs stroke-none">TOOL Ø20</text>
          
          {/* Corner Radius */}
          <path d="M 80 95 A 15 15 0 0 1 95 80" className="stroke-green-400 fill-none stroke-2" />
          <text x="100" y="100" className="fill-green-400 font-mono text-xs stroke-none font-bold">R15 (R_part {'>'} R_tool)</text>
          
          {/* Deep Hole */}
          <rect x="300" y="50" width="40" height="200" className="stroke-white fill-blueprint-800" />
          <line x1="320" y1="50" x2="320" y2="250" className="stroke-blueprint-300 stroke-dashed" />
          <text x="350" y="150" className="fill-white font-mono text-xs stroke-none" style={{ writingMode: 'vertical-rl' }}>DEPTH {'<'} 5x DIA</text>
        </g>
      );

    case 'injection-molding':
      return (
        <g>
          {/* Part Cross Section */}
          <path d="M 50 250 L 100 50 L 300 50 L 350 250" className="stroke-white fill-none stroke-2" />
          <path d="M 50 250 L 350 250" className="stroke-blueprint-500 stroke-dashed" />
          
          {/* Draft Angle */}
          <line x1="100" y1="50" x2="100" y2="250" className="stroke-red-400 stroke-dashed opacity-50" />
          <path d="M 100 200 A 50 50 0 0 0 90 250" className="stroke-yellow-400 fill-none" />
          <text x="110" y="150" className="fill-yellow-400 font-mono text-xs stroke-none">DRAFT 1°-2°</text>
          
          {/* Uniform Wall */}
          <path d="M 120 50 L 120 230 L 280 230 L 280 50" className="stroke-white fill-blueprint-800 opacity-50" />
          <text x="200" y="140" textAnchor="middle" className="fill-green-400 font-mono text-xs stroke-none">UNIFORM WALL</text>
          
          {/* Rib with Sink Mark Warning */}
          <path d="M 200 230 L 200 280" className="stroke-white fill-none" />
          <path d="M 190 230 L 195 280 L 205 280 L 210 230" className="stroke-white fill-blueprint-700" />
          <text x="230" y="270" className="fill-red-400 font-mono text-xs stroke-none">RIB {'<'} 60% WALL</text>
        </g>
      );

    case 'sheet-metal':
      return (
        <g>
          {/* Bent Part */}
          <path d="M 50 200 L 150 200 A 20 20 0 0 0 170 180 L 170 50" className="stroke-white fill-none stroke-4" />
          
          {/* Bend Radius */}
          <circle cx="150" cy="180" r="20" className="stroke-green-400 fill-none stroke-dashed" />
          <line x1="150" y1="180" x2="170" y2="180" className="stroke-green-400" />
          <text x="120" y="170" className="fill-green-400 font-mono text-xs stroke-none">R {'>='} T</text>
          
          {/* Hole Placement */}
          <circle cx="100" cy="200" r="10" className="stroke-white fill-blueprint-900" />
          <line x1="150" y1="200" x2="150" y2="230" className="stroke-blueprint-300" /> {/* Bend Line Start */}
          <line x1="110" y1="200" x2="110" y2="230" className="stroke-blueprint-300" /> {/* Hole Edge */}
          <line x1="110" y1="220" x2="150" y2="220" className="stroke-yellow-400 marker-end marker-start" />
          <text x="130" y="240" textAnchor="middle" className="fill-yellow-400 font-mono text-xs stroke-none">Dist {'>'} 2.5T + R</text>
          
          {/* Relief Cut Detail */}
          <rect x="250" y="100" width="100" height="100" className="stroke-white fill-blueprint-800" />
          <path d="M 250 150 L 280 150 L 280 170 L 250 170" className="stroke-white fill-blueprint-900" />
          <text x="300" y="165" className="fill-white font-mono text-xs stroke-none">RELIEF CUT</text>
        </g>
      );

    case 'surface-finish':
      return (
        <g>
          {/* Surface Line */}
          <line x1="50" y1="200" x2="350" y2="200" className="stroke-white stroke-2" />
          
          {/* Roughness Profile (Magnified) */}
          <path d="M 50 200 L 55 195 L 60 205 L 65 198 L 70 202 L 75 195 L 80 205 L 85 200" className="stroke-blueprint-500 stroke-[0.5] fill-none" />
          <text x="70" y="185" textAnchor="middle" className="fill-blueprint-300 font-mono text-[10px] stroke-none">PROFILE</text>

          {/* Symbol 1: Ra 6.3 / Rz 25 */}
          <g transform="translate(120, 200)">
             <path d="M 0 0 L 10 -20 L 20 0" className="stroke-white fill-none" />
             <line x1="10" y1="-20" x2="20" y2="-40" className="stroke-white" />
             <line x1="20" y1="-40" x2="45" y2="-40" className="stroke-white" />
             <text x="32" y="-45" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">6.3</text>
             <text x="10" y="20" textAnchor="middle" className="fill-blueprint-300 font-mono text-xs stroke-none">Rz 25</text>
          </g>

          {/* Symbol 2: Ra 3.2 / Rz 12.5 */}
          <g transform="translate(200, 200)">
             <path d="M 0 0 L 10 -20 L 20 0" className="stroke-white fill-none" />
             <line x1="10" y1="-20" x2="20" y2="-40" className="stroke-white" />
             <line x1="20" y1="-40" x2="45" y2="-40" className="stroke-white" />
             <text x="32" y="-45" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">3.2</text>
             <text x="10" y="20" textAnchor="middle" className="fill-blueprint-300 font-mono text-xs stroke-none">Rz 12.5</text>
          </g>

          {/* Symbol 3: Ra 0.8 / Rz 3.2 */}
          <g transform="translate(280, 200)">
             <path d="M 0 0 L 10 -20 L 20 0" className="stroke-white fill-none" />
             <line x1="10" y1="-20" x2="20" y2="-40" className="stroke-white" />
             <line x1="20" y1="-40" x2="45" y2="-40" className="stroke-white" />
             <text x="32" y="-45" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.8</text>
             <text x="10" y="20" textAnchor="middle" className="fill-blueprint-300 font-mono text-xs stroke-none">Rz 3.2</text>
          </g>

          {/* Title */}
          <text x="200" y="60" textAnchor="middle" className="fill-white font-mono text-sm stroke-none font-bold">SURFACE TEXTURE (Ra vs Rz)</text>
          <text x="200" y="80" textAnchor="middle" className="fill-blueprint-300 font-mono text-xs stroke-none">VALUES IN MICROMETERS (µm)</text>
          
          {/* Relationship Note */}
          <rect x="100" y="100" width="200" height="40" className="stroke-blueprint-500 fill-blueprint-900/50 stroke-dashed" rx="4" />
          <text x="200" y="125" textAnchor="middle" className="fill-yellow-400 font-mono text-xs stroke-none">Rule of Thumb: Rz ≈ 4 x Ra</text>
        </g>
      );

    case 'iso-22081':
      return (
        <g>
          {/* General Note Box */}
          <g transform="translate(50, 30)">
            <rect x="0" y="0" width="300" height="60" className="stroke-white fill-none" />
            <text x="10" y="20" className="fill-white font-mono text-xs stroke-none">GENERAL TOLERANCE (ISO 22081):</text>
            
            {/* Feature Control Frame */}
            <g transform="translate(10, 30)">
              <rect x="0" y="0" width="200" height="20" className="stroke-white fill-none" />
              <line x1="30" y1="0" x2="30" y2="20" className="stroke-white" />
              <line x1="80" y1="0" x2="80" y2="20" className="stroke-white" />
              <line x1="110" y1="0" x2="110" y2="20" className="stroke-white" />
              <line x1="140" y1="0" x2="140" y2="20" className="stroke-white" />
              
              {/* Profile Symbol */}
              <path d="M 15 15 A 8 8 0 0 1 15 5" className="stroke-white fill-none" />
              
              <text x="55" y="14" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">0.2</text>
              <text x="95" y="14" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">A</text>
              <text x="125" y="14" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">B</text>
              <text x="155" y="14" textAnchor="middle" className="fill-white font-mono text-sm stroke-none">C</text>
            </g>
          </g>

          {/* 3D Block Representation */}
          <g transform="translate(150, 150)">
            {/* Top Face (Datum A reference, but visible) */}
            <path d="M 0 0 L 100 -50 L 200 0 L 100 50 Z" className="stroke-white fill-blueprint-900/50" />
            
            {/* Front Face (Datum C) */}
            <path d="M 0 0 L 100 50 L 100 150 L 0 100 Z" className="stroke-white fill-blueprint-900/50" />
            
            {/* Side Face (Datum B) */}
            <path d="M 100 50 L 200 0 L 200 100 L 100 150 Z" className="stroke-white fill-blueprint-900/50" />

            {/* Datum A Symbol (Bottom) */}
            <g transform="translate(100, 150)">
               <line x1="0" y1="0" x2="0" y2="20" className="stroke-white" />
               <rect x="-10" y="20" width="20" height="20" className="stroke-white fill-blueprint-900" />
               <text x="0" y="35" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">A</text>
            </g>

            {/* Datum B Symbol (Side) */}
            <g transform="translate(200, 50)">
               <line x1="0" y1="0" x2="20" y2="0" className="stroke-white" />
               <rect x="20" y="-10" width="20" height="20" className="stroke-white fill-blueprint-900" />
               <text x="30" y="5" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">B</text>
            </g>

             {/* Datum C Symbol (Front) */}
            <g transform="translate(0, 50)">
               <line x1="0" y1="0" x2="-20" y2="0" className="stroke-white" />
               <rect x="-40" y="-10" width="20" height="20" className="stroke-white fill-blueprint-900" />
               <text x="-30" y="5" textAnchor="middle" className="fill-white font-mono text-xs stroke-none">C</text>
            </g>
          </g>

          {/* Explanation Text */}
          <text x="200" y="320" textAnchor="middle" className="fill-blueprint-300 font-mono text-xs stroke-none">
            Profile applies to all integral surfaces relative to A|B|C
          </text>
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
