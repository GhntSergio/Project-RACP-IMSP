/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, Check, Users, Heart } from 'lucide-react';
import { POLES, getPole } from '../data/poles';

const PoleDetail = () => {
  const { slug } = useParams();
  const pole = getPole(slug);

  // Slug inconnu → retour au hub de l'association
  if (!pole) return <Navigate to="/association" replace />;

  const Icon = pole.icon;
  const others = POLES.filter((p) => p.slug !== pole.slug);
  const isMentorat = pole.slug === 'academique-mentorat';

  return (
    <div className="min-h-screen bg-app text-app transition-colors duration-300">
      {/* Hero */}
      <section className="relative academic-gradient text-white py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/association"
              className="inline-flex items-center gap-2 text-blue-50/70 hover:text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> L'Association
            </Link>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                <Icon className="h-8 w-8 text-accent" />
              </div>
              <span className="text-accent font-bold text-[11px] uppercase tracking-[0.3em]">
                Pôle {pole.num}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{pole.title}</h1>
            <p className="text-xl text-blue-50/80 max-w-3xl leading-relaxed font-sans font-light">
              {pole.mission}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Responsabilités */}
      <section className="py-24 bg-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
              Ce que fait ce pôle
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Nos responsabilités</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pole.responsibilities.map((resp, i) => (
              <motion.div
                key={resp}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-7 rounded-3xl bg-card-bg border border-card-border hover:border-primary/50 transition-all flex items-start gap-4"
              >
                <div className="mt-0.5 bg-primary/10 text-primary rounded-full p-1.5 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-app font-medium leading-relaxed">{resp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Mentorat (Pôle 1 uniquement) */}
      {isMentorat && (
        <section className="py-24 bg-card-bg border-y border-card-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
                Programme phare
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Le mentorat RACP-IMSP</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Un accompagnement personnalisé qui relie les anciens (parrains et marraines) aux
                étudiants actuels (filleul·e·s) : orientation, méthodologie de travail, choix de
                filière et projets d'avenir. Un binôme, un suivi régulier, un impact concret.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Parrain / marraine */}
              <div className="p-8 rounded-3xl bg-app border border-card-border flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Devenir parrain / marraine</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  Ancien·ne de la prépa, partagez votre expérience et guidez un·e étudiant·e dans
                  son parcours. Quelques heures par mois suffisent pour faire la différence.
                </p>
                <Link to="/devenir-parrain" className="academic-button">
                  <span>Je veux accompagner</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Filleul */}
              <div className="p-8 rounded-3xl bg-app border border-card-border flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Être accompagné·e</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  Étudiant·e en prépa, bénéficiez des conseils d'un·e aîné·e qui est passé·e par là :
                  méthodes, orientation, motivation et mise en relation.
                </p>
                <Link to="/devenir-filleul" className="academic-button">
                  <span>Je cherche un mentor</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-8">
              Candidature en ligne en quelques minutes — le pôle Académique & Mentorat étudie chaque
              demande.
            </p>
          </div>
        </section>
      )}

      {/* Autres pôles */}
      <section className="py-24 bg-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10">Explorer les autres pôles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {others.map((p) => {
              const OIcon = p.icon;
              return (
                <Link
                  key={p.slug}
                  to={`/association/${p.slug}`}
                  className="group p-7 rounded-3xl bg-card-bg border border-card-border hover:border-primary/50 hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <OIcon className="h-6 w-6" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    Pôle {p.num}
                  </div>
                  <div className="font-bold text-lg flex items-center justify-between">
                    {p.short}
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoleDetail;
