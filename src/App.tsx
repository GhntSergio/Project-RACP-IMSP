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
const Association = lazy(() => import('./pages/Association'));
const PoleDetail = lazy(() => import('./pages/PoleDetail'));
const Contribute = lazy(() => import('./pages/Contribute'));
const Contact = lazy(() => import('./pages/Contact'));
const Adhesion = lazy(() => import('./pages/Adhesion'));
const Actualites = lazy(() => import('./pages/Actualites'));
const Confidentialite = lazy(() => import('./pages/Confidentialite'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const DevenirParrain = lazy(() => import('./pages/DevenirParrain'));
const DevenirFilleul = lazy(() => import('./pages/DevenirFilleul'));
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
          <Route path="/association" element={<Public Page={Association} />} />
          <Route path="/association/:slug" element={<Public Page={PoleDetail} />} />
          <Route path="/devenir-parrain" element={<Public Page={DevenirParrain} />} />
          <Route path="/devenir-filleul" element={<Public Page={DevenirFilleul} />} />
          <Route path="/actualites" element={<Public Page={Actualites} />} />
          <Route path="/adhesion" element={<Public Page={Adhesion} />} />
          <Route path="/confidentialite" element={<Public Page={Confidentialite} />} />
          <Route path="/mentions-legales" element={<Public Page={MentionsLegales} />} />
          <Route path="/contribute" element={<Public Page={Contribute} />} />
          <Route path="/contact" element={<Public Page={Contact} />} />

          {/* Redirects for renamed/missing pages to avoid broken links */}
          <Route path="/about" element={<Navigate to="/association" replace />} />
          <Route path="/alumni" element={<Navigate to="/association" replace />} />
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
