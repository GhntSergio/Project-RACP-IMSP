import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, GraduationCap, Lightbulb, ShieldCheck, Heart, Globe, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { mockResources } from '../data/mockResources';
import ResourceCard from '../components/ResourceCard';
import photoJpg from '@/Img/photo.jpg';

const Home = () => {
  const featuredResources = mockResources.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Recipe 11 inspired */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/5 dark:bg-primary/20 border border-primary/10 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary dark:text-accent">
                  Réseau Alumni IMSP
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 text-slate-900 dark:text-white">
                Excellence, <br />
                <span className="text-primary italic font-serif">Entraide</span> & <br />
                Visibilité.
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg font-sans">
                Créer un réseau dynamique, solidaire et structuré entre les anciens et les actuels étudiants des classes préparatoires de l'IMSP.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/alumni" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center justify-center space-x-2">
                  <span>Rejoindre le Réseau</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/about" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center">
                  Notre Mission
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src={photoJpg} 
                  alt="IMSP Excellence" 
                  className="w-full h-[650px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
              
              {/* Floating Element - Recipe 11 style */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [-6, -4, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-12 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 z-20 max-w-[240px]"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary dark:text-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Impact</span>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  "L'excellence n'est pas un acte, mais une habitude."
                </p>
              </motion.div>

              {/* Decorative Rail Text */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 writing-vertical-rl rotate-180 text-[10px] font-bold uppercase tracking-[0.5em] text-slate-300 dark:text-slate-700">
                Réseau Alumni Classes Préparatoires IMSP
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Anciens Étudiants", value: "1000+" },
              { label: "Ressources Partagées", value: "500+" },
              { label: "Mentors Actifs", value: "50+" },
              { label: "Écoles Partenaires", value: "20+" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-primary dark:text-accent mb-2">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Axes - Axe 1, 2, 3 */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-primary dark:text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Nos Axes Stratégiques</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Trois Piliers pour l'Excellence</h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Soutenir les étudiants",
                axe: "Axe 1",
                desc: "Appui académique et matériel, bibliothèque partagée, tutorat et préparation aux concours d'excellence.",
                color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Valoriser le réseau",
                axe: "Axe 2",
                desc: "Base de données exhaustive, plateforme interactive et promotion des parcours des diplômés à l'international.",
                color: "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400"
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Insertion & Carrière",
                axe: "Axe 3",
                desc: "Mentorat intergénérationnel, coaching, partenariats entreprises et soutien aux métiers émergents (IA, Data).",
                color: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl transition-all duration-500"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500", item.color)}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">{item.axe}</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-sans text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Preview */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="text-primary dark:text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Bibliothèque Partagée</span>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white !mb-0">Ressources Académiques</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-4 font-sans">Accédez aux ouvrages, annales et supports de cours partagés par la communauté.</p>
            </div>
            <Link to="/library" className="mt-8 md:mt-0 group flex items-center space-x-3 text-primary dark:text-accent font-bold text-sm uppercase tracking-widest">
              <span>Explorer le catalogue</span>
              <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Soutenez <br />
                <span className="italic font-serif text-accent">l'Excellence.</span>
              </h2>
              <p className="text-xl text-blue-100/80 mb-12 font-sans font-light">
                Contribuez au fonds de soutien RACP-IMSP pour financer les manuels, les bourses et les projets innovants des étudiants.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/support" className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-50 transition-colors flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>Faire un don</span>
                </Link>
                <Link to="/contribute" className="bg-primary-foreground/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Partager un ouvrage</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShieldCheck className="h-8 w-8 text-primary dark:text-accent" />
            </div>
            <blockquote className="text-3xl md:text-4xl font-serif italic text-slate-800 dark:text-slate-200 leading-relaxed">
              "Le Réseau Alumni est le pont indispensable entre notre héritage d'excellence et les ambitions de la nouvelle génération."
            </blockquote>
            <div className="mt-8">
              <div className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm">Comité de Pilotage</div>
              <div className="text-slate-500 dark:text-slate-400 text-xs mt-1">RACP-IMSP</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
