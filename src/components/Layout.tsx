
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

export const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change (mobile)
  React.useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900 border-b border-slate-800 flex items-center px-4 z-50">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-slate-300 hover:text-white p-2"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <span className="ml-3 font-bold text-white">GD&T Base</span>
      </div>

      {/* Sidebar Backdrop (Mobile) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={clsx(
        "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:h-screen",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full lg:w-auto pt-16 lg:pt-0 p-4 lg:p-8 overflow-y-auto h-screen">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
