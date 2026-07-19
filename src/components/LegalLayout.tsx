/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  /** Avertissement « brouillon à valider » affiché en bas de page */
  disclaimer?: string;
  children: ReactNode;
}

/**
 * Coque commune aux pages légales (confidentialité, mentions légales) :
 * en-tête compact + colonne de texte lisible.
 */
const LegalLayout = ({ title, subtitle, disclaimer, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-app text-app transition-colors duration-300">
      {/* En-tête */}
      <section className="relative academic-gradient text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-blue-50/60 text-xs font-bold uppercase tracking-[0.2em] mb-5">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-accent">{title}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-blue-50/80 leading-relaxed font-sans font-light">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20 bg-app">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">{children}</div>

          {disclaimer && (
            <div className="mt-14 flex items-start gap-3 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">{disclaimer}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

/** Bloc de section légale : titre + contenu. */
export const LegalSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </div>
);

export default LegalLayout;
