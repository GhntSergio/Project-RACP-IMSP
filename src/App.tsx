/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Library from './pages/Library';
import ResourceDetail from './pages/ResourceDetail';
import About from './pages/About';
import Contribute from './pages/Contribute';
import Contact from './pages/Contact';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Resources from './pages/admin/Resources';
import Categories from './pages/admin/Categories';
import Authors from './pages/admin/Authors';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans selection:bg-accent selection:text-primary">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<><Navbar /><main className="flex-grow"><Home /></main><Footer /></>} />
          <Route path="/library" element={<><Navbar /><main className="flex-grow"><Library /></main><Footer /></>} />
          <Route path="/resource/:id" element={<><Navbar /><main className="flex-grow"><ResourceDetail /></main><Footer /></>} />
          <Route path="/about" element={<><Navbar /><main className="flex-grow"><About /></main><Footer /></>} />
          <Route path="/contribute" element={<><Navbar /><main className="flex-grow"><Contribute /></main><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><main className="flex-grow"><Contact /></main><Footer /></>} />
          
          {/* Redirects for missing pages to avoid broken links */}
          <Route path="/alumni" element={<Navigate to="/about" replace />} />
          <Route path="/support" element={<Navigate to="/contact" replace />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="resources" element={<Resources />} />
            <Route path="categories" element={<Categories />} />
            <Route path="authors" element={<Authors />} />
            <Route path="moderation" element={<Resources />} /> {/* Reuse Resources for moderation for now */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
