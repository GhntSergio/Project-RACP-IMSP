/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CalendarDays, Bell, ArrowRight } from 'lucide-react';

const Actualites = () => {
  return (
    <div className="min-h-screen bg-app text-app transition-colors duration-300">
      {/* Hero */}
      <section className="relative academic-gradient text-white py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">
              Actualités & Événements
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">La vie du réseau</h1>
            <p className="text-xl text-blue-50/80 max-w-2xl mx-auto leading-relaxed font-sans font-light">
              Conférences, journées d'orientation, rencontres alumni et annonces du réseau —
              retrouvez ici toute l'actualité du RACP-IMSP.
            </p>
          </motion.div>
        </div>
      </section>

      {/* À venir */}
      <section className="py-24 bg-app">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-12 md:p-16 rounded-[2.5rem] bg-card-bg border border-card-border">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8">
              <CalendarDays className="h-8 w-8" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Les premières actualités arrivent bientôt</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Nous préparons la publication de nos événements et annonces. En attendant, suivez-nous
              sur les réseaux sociaux et n'hésitez pas à nous contacter pour toute information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="academic-button">
                <Bell className="h-4 w-4" />
                <span>Nous contacter</span>
              </Link>
              <Link
                to="/association"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest border border-card-border text-app hover:border-primary/50 transition-all"
              >
                Découvrir l'association
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actualites;
