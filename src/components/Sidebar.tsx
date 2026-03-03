
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, BookOpen, Settings, Info, PenTool, Database } from 'lucide-react';
import { clsx } from 'clsx';

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-slate-900 h-full flex flex-col border-r border-slate-800 text-slate-300">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-white font-bold text-lg flex items-center gap-2">
          <Database className="w-5 h-5 text-blueprint-500" />
          GD&T Base
        </h1>
        <p className="text-xs text-slate-500 mt-1">Engineering Knowledge Hub</p>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <NavItem to="/" icon={<LayoutGrid size={18} />} label="Dashboard" />
        
        <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Categories
        </div>
        <NavItem to="/category/GD&T" icon={<PenTool size={18} />} label="GD&T Symbols" />
        <NavItem to="/category/Fits & Limits" icon={<Settings size={18} />} label="Fits & Limits" />
        <NavItem to="/category/Metrology" icon={<LayoutGrid size={18} />} label="Metrology" />
        <NavItem to="/category/DFMA" icon={<Settings size={18} />} label="DFMA" />
        <NavItem to="/category/Manufacturing" icon={<BookOpen size={18} />} label="Manufacturing" />
        <NavItem to="/category/Standards" icon={<Info size={18} />} label="Standards Ref" />
      </nav>

      <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
        v1.0.0 • ASME Y14.5-2018
      </div>
    </div>
  );
};

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      clsx(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium",
        isActive
          ? "bg-blueprint-900 text-white"
          : "hover:bg-slate-800 hover:text-white"
      )
    }
  >
    {icon}
    {label}
  </NavLink>
);
