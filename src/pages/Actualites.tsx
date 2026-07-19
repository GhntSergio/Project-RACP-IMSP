/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  UserPlus,
  GraduationCap,
  Mail,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';

const annonces = [
  {
    icon: Sparkles,
    tag: 'Réseau',
    date: 'Juillet 2026',
    title: 'Le RACP-IMSP est lancé',
    desc: "Le Réseau Alumni des Classes Préparatoires de l'IMSP ouvre son site officiel : bibliothèque, mentorat et vie associative réunis en un seul lieu.",
    to: '/association',
    cta: "Découvrir l'association",
  },
  {
    icon: UserPlus,
    tag: 'Adhésion',
    date: 'Juillet 2026',
    title: 'Les adhésions sont ouvertes',
    desc: "Anciens et actuels élèves de la prépa : rejoignez le réseau pour accéder à l'annuaire, aux ressources et au mentorat.",
    to: '/adhesion',
    cta: 'Adhérer',
  },
  {
    icon: GraduationCap,
    tag: 'Mentorat',
    date: 'Juillet 2026',
    title: 'Le programme de mentorat démarre',
    desc: 'Appel à parrains/marraines et à filleul·e·s : construisons ensemble des binômes pour accompagner la nouvelle génération.',
    to: '/association/academique-mentorat',
    cta: 'En savoir plus',
  },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61579263734893' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/racp_imsp?igsh=MTMzNmo5YmhhOGV2bQ==' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/racp-imsp-41597937b/' },
];

const Actualites = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true); // mode démo : aucune donnée transmise
  };

  return (
    <div className="min-h-screen bg-app text-app transition-colors duration-300">
      {/* Hero */}
      <section className="relative academic-gradient text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">
              Actualités & Événements
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">La vie du réseau</h1>
            <p className="text-xl text-blue-50/80 max-w-2xl mx-auto leading-relaxed font-sans font-light">
              Annonces, événements et temps forts du RACP-IMSP — pour rester connecté·e à la
              communauté.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Annonces */}
      <section className="py-24 bg-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
              À la une
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Dernières annonces</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {annonces.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col p-8 rounded-3xl bg-card-bg border border-card-border hover:border-primary/50 hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {a.date}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">
                    {a.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{a.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{a.desc}</p>
                  <Link
                    to={a.to}
                    className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs"
                  >
                    {a.cta}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-card-bg border-y border-card-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
            <Mail className="h-7 w-7" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Recevez les actualités</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Inscrivez-vous à la newsletter pour être prévenu·e des prochains événements et annonces
            du réseau.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-medium">Merci ! Votre inscription est bien prise en compte.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="flex-grow p-4 rounded-2xl border border-card-border focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all bg-app font-sans text-sm text-app"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 whitespace-nowrap"
              >
                S'inscrire
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Événements à venir + réseaux */}
      <section className="py-24 bg-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Événements à venir */}
          <div className="p-10 rounded-[2.5rem] bg-card-bg border border-card-border">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <CalendarDays className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Événements à venir</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conférences, journées d'orientation et rencontres alumni seront annoncées ici très
              bientôt. Inscrivez-vous à la newsletter pour ne rien manquer.
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="p-10 rounded-[2.5rem] bg-primary text-white">
            <h2 className="text-2xl font-bold mb-3">Suivez-nous</h2>
            <p className="text-blue-50/80 leading-relaxed mb-8">
              Retrouvez l'actualité du réseau au quotidien sur nos réseaux sociaux.
            </p>
            <div className="flex flex-wrap gap-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 px-5 py-3 rounded-xl font-bold text-sm transition-all"
                  >
                    <Icon className="h-5 w-5" />
                    {s.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actualites;
