/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { History, ArrowRight, Zap } from 'lucide-react';
import { POLES } from '../data/poles';
import campusAerien from '@/Img/campus-aerien.jpg';
import salleInformatique from '@/Img/salle-informatique.jpg';
import portailImsp from '@/Img/portail-imsp.jpg';

const Association = () => {
  return (
    <div className="min-h-screen bg-app text-app transition-colors duration-300">
      {/* Header */}
      <section className="relative academic-gradient text-white py-32 overflow-hidden">
        <img
          src={campusAerien}
          alt="Vue aérienne du campus de l'IMSP"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">
              L'Association
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Bâtir l'Avenir par <br />
              <span className="italic text-accent">l'Excellence</span> &{' '}
              <span className="italic text-accent">l'Entraide</span>
            </h1>
            <p className="text-xl text-blue-50/80 max-w-3xl mx-auto leading-relaxed font-sans font-light">
              Le Réseau Alumni des Classes Préparatoires de l'IMSP (RACP-IMSP) est une initiative
              dédiée à la promotion de l'excellence académique et professionnelle, structurée
              autour de quatre pôles complémentaires.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contexte & Justification */}
      <section className="py-24 bg-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <History className="text-primary h-8 w-8" />
                Contexte & Justification
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Depuis plusieurs années, les classes préparatoires de l'IMSP se distinguent par la
                  qualité de leur formation, contribuant à l'émergence d'étudiants brillants,
                  rigoureux et ambitieux, appelés à intégrer de grandes écoles de renom au Bénin
                  comme à l'international.
                </p>
                <p>
                  Toutefois, plusieurs défis subsistent : l'absence d'un cadre formel d'échange entre
                  anciens et promotions actuelles, le manque de ressources académiques organisées, et
                  une visibilité encore insuffisante des débouchés professionnels et académiques.
                </p>
                <p className="font-medium text-app">
                  C'est dans cette perspective qu'a été créé le RACP-IMSP : renforcer les liens
                  intergénérationnels, mettre à disposition des ressources de qualité et améliorer la
                  lisibilité des opportunités offertes aux étudiants.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-card-border">
                <img
                  src={salleInformatique}
                  alt="Salle informatique de l'IMSP"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold mb-1">Excellence</div>
                <div className="text-xs uppercase tracking-widest opacity-80">Valeur Fondamentale</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Les 4 Pôles */}
      <section className="py-24 bg-card-bg border-y border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
              Notre organisation
            </span>
            <h2 className="text-4xl font-bold mb-4">Les 4 Pôles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              L'action du réseau s'articule autour de quatre pôles, chacun porteur d'une mission
              claire. Cliquez sur un pôle pour le découvrir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {POLES.map((pole, i) => {
              const Icon = pole.icon;
              return (
                <motion.div
                  key={pole.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/association/${pole.slug}`}
                    className="group h-full flex flex-col p-8 rounded-3xl bg-app border border-card-border hover:border-primary/50 hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Pôle {pole.num}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{pole.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {pole.mission}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                      Découvrir
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Résultats Attendus */}
      <section className="py-24 bg-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Résultats Attendus</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  'Une plateforme numérique interactive et fonctionnelle.',
                  'Un programme de mentorat structuré et pérenne.',
                  'Une base de données alumni mise à jour régulièrement.',
                  "Des événements annuels de retrouvailles et d'échanges.",
                ].map((result) => (
                  <div key={result} className="flex items-start gap-4">
                    <div className="mt-1 bg-accent text-primary rounded-full p-1">
                      <Zap className="h-4 w-4" />
                    </div>
                    <p className="text-lg text-blue-50/90">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institution */}
      <section className="py-24 bg-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">
                L'Institution
              </span>
              <h2 className="text-4xl font-bold mb-8">L'IMSP de Dangbo</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                L'Institut de Mathématiques et de Sciences Physiques (IMSP) de Dangbo est un centre
                d'excellence de l'Université d'Abomey-Calavi au Bénin. Créé en 1988, il est reconnu
                internationalement pour la qualité de sa formation et de sa recherche.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Il abrite les Classes Préparatoires aux Grandes Écoles (CPGE), un cursus intensif de
                deux ans. Le RACP-IMSP est le trait d'union entre ces étudiants et le monde
                professionnel.
              </p>
              <a
                href="https://imsp-uac.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-4 text-primary font-bold uppercase tracking-widest text-xs"
              >
                <span>Visiter le site officiel</span>
                <div className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src={portailImsp}
                  alt="Portail d'entrée de l'IMSP"
                  className="rounded-[2rem] shadow-lg w-full aspect-[3/4] object-cover border border-card-border"
                />
                <div className="bg-accent h-24 rounded-[2rem]"></div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-primary h-24 rounded-[2rem]"></div>
                <img
                  src={campusAerien}
                  alt="Vue aérienne du campus de l'IMSP"
                  className="rounded-[2rem] shadow-lg w-full aspect-[3/4] object-cover border border-card-border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Association;
