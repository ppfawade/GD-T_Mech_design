/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { TopicViewer } from './pages/TopicViewer';
import { CategoryPage } from './pages/CategoryPage';
import { StandardsPage } from './pages/StandardsPage';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="topic/:id" element={<TopicViewer />} />
            <Route path="category/Standards" element={<StandardsPage />} />
            <Route path="category/:category" element={<CategoryPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
