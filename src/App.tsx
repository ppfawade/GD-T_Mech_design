/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Loader2 } from 'lucide-react';

// Lazy load page components for better performance
const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ default: module.Dashboard })));
const TopicViewer = lazy(() => import('./pages/TopicViewer').then(module => ({ default: module.TopicViewer })));
const CategoryPage = lazy(() => import('./pages/CategoryPage').then(module => ({ default: module.CategoryPage })));
const StandardsPage = lazy(() => import('./pages/StandardsPage').then(module => ({ default: module.StandardsPage })));

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full min-h-[50vh] text-slate-400">
    <Loader2 className="w-8 h-8 animate-spin" />
    <span className="ml-3 text-sm font-medium">Loading module...</span>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Suspense fallback={<LoadingFallback />}>
                <Dashboard />
              </Suspense>
            } />
            <Route path="topic/:id" element={
              <Suspense fallback={<LoadingFallback />}>
                <TopicViewer />
              </Suspense>
            } />
            <Route path="category/Standards" element={
              <Suspense fallback={<LoadingFallback />}>
                <StandardsPage />
              </Suspense>
            } />
            <Route path="category/:category" element={
              <Suspense fallback={<LoadingFallback />}>
                <CategoryPage />
              </Suspense>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
