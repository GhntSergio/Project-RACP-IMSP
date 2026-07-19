/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy, type ComponentType } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';

// Chargement paresseux des pages : chaque page (et l'espace admin, qui embarque
// recharts/cmdk) est isolée dans son propre chunk et n'est téléchargée qu'à la visite.
const Home = lazy(() => import('./pages/Home'));
const Library = lazy(() => import('./pages/Library'));
const ResourceDetail = lazy(() => import('./pages/ResourceDetail'));
const About = lazy(() => import('./pages/About'));
const Contribute = lazy(() => import('./pages/Contribute'));
const Contact = lazy(() => import('./pages/Contact'));
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Resources = lazy(() => import('./pages/admin/Resources'));
const Categories = lazy(() => import('./pages/admin/Categories'));
const Authors = lazy(() => import('./pages/admin/Authors'));

// Coque publique : Navbar et Footer restent chargés d'emblée (petits, toujours
// visibles) ; seul le contenu de la page passe par Suspense pour éviter le saut de mise en page.
const Public = ({ Page }: { Page: ComponentType }) => (
  <>
    <Navbar />
    <main className="flex-grow flex flex-col">
      <Suspense fallback={<PageLoader />}>
        <Page />
      </Suspense>
    </main>
    <Footer />
  </>
);

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans selection:bg-accent selection:text-primary">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Public Page={Home} />} />
          <Route path="/library" element={<Public Page={Library} />} />
          <Route path="/resource/:id" element={<Public Page={ResourceDetail} />} />
          <Route path="/about" element={<Public Page={About} />} />
          <Route path="/contribute" element={<Public Page={Contribute} />} />
          <Route path="/contact" element={<Public Page={Contact} />} />

          {/* Redirects for missing pages to avoid broken links */}
          <Route path="/alumni" element={<Navigate to="/about" replace />} />
          <Route path="/support" element={<Navigate to="/contact" replace />} />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <Suspense fallback={<PageLoader />}>
                <AdminLayout />
              </Suspense>
            }
          >
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
