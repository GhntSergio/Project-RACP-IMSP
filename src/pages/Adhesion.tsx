/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  UserPlus,
  Scale,
  ArrowRight,
  Users,
  BookOpen,
  CalendarDays,
  Vote,
  GraduationCap,
  FileText,
  BadgeCheck,
  PartyPopper,
} from 'lucide-react';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe2sCxVMVwlTNCQUS9cnwj_UWDeEXdGaxgQbrt35Vh1rdFZog/viewform';

const infos = [
  {
    icon: UserPlus,
    title: 'Qui peut adhérer ?',
    desc: "Tout ancien ou actuel élève des classes préparatoires de l'IMSP.",
  },
  {
    icon: Scale,
    title: 'Droits & devoirs',
    desc: 'Participer aux AG, voter, proposer, accéder aux ressources, dans le respect des textes du réseau.',
  },
  {
    icon: ArrowRight,
    title: 'Comment adhérer',
    desc: 'Remplissez le formulaire en ligne ; le bureau revient vers vous rapidement.',
  },
];

const avantages = [
  { icon: Users, title: "L'annuaire des alumni", desc: 'Retrouvez vos promotions et élargissez votre réseau (à venir).' },
  { icon: GraduationCap, title: 'Le mentorat', desc: "Accompagnez un(e) étudiant(e) ou bénéficiez d'un(e) mentor." },
  { icon: BookOpen, title: 'La bibliothèque', desc: 'Annales, fiches écoles, ressources vidéo et documents.' },
  { icon: CalendarDays, title: 'Les événements', desc: "Conférences, journées d'orientation et rencontres." },
  { icon: Vote, title: 'La voix au chapitre', desc: 'Participez aux décisions en assemblée générale.' },
];

const etapes = [
  { icon: FileText, title: 'Remplir le formulaire', desc: 'Quelques informations sur votre parcours à l’IMSP.' },
  { icon: BadgeCheck, title: 'Validation', desc: 'Le bureau confirme votre adhésion et vous souhaite la bienvenue.' },
  { icon: PartyPopper, title: 'Bienvenue dans le réseau', desc: 'Vous accédez aux ressources et pouvez vous impliquer.' },
];

const Adhesion = () => {
  return (
    <div className="min-h-screen bg-app text-app transition-colors duration-300">
      {/* Hero */}
      <section className="relative academic-gradient text-white py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">
              Adhésion
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Rejoindre le réseau</h1>
            <p className="text-xl text-blue-50/80 max-w-2xl mx-auto leading-relaxed font-sans font-light mb-10">
              L'adhésion ouvre l'accès à l'annuaire, aux ressources, au mentorat et à la vie
              associative du RACP-IMSP.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-highlight hover:opacity-90 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg shadow-highlight/25 transition-all active:scale-95"
            >
              Ouvrir le formulaire
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Infos clés */}
      <section className="py-20 bg-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infos.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-8 rounded-3xl bg-card-bg border border-card-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{info.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-24 bg-card-bg border-y border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
              Vos avantages
            </span>
            <h2 className="text-4xl font-bold">Ce que l'adhésion vous apporte</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avantages.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="p-7 rounded-3xl bg-app border border-card-border hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-24 bg-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
              En pratique
            </span>
            <h2 className="text-4xl font-bold">Adhérer en 3 étapes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {etapes.map((e, i) => {
              const Icon = e.icon;
              return (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-8 rounded-3xl bg-card-bg border border-card-border"
                >
                  <div className="absolute -top-4 -left-2 text-6xl font-bold text-primary/10 select-none">
                    {i + 1}
                  </div>
                  <div className="relative w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{e.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{e.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt(e) à rejoindre le RACP-IMSP ?</h2>
              <p className="text-blue-50/80 mb-10">L'adhésion ne prend que quelques minutes.</p>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-highlight hover:opacity-90 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg shadow-highlight/25 transition-all active:scale-95"
              >
                Adhérer maintenant
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Adhesion;
