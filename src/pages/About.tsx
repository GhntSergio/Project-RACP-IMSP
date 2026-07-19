import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, Award, Users, BookOpen, ArrowRight, Shield, Zap, Heart, Globe, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-app text-app transition-colors duration-300">
      {/* Header */}
      <section className="relative academic-gradient text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">Notre Mission</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Bâtir l'Avenir par <br />
              <span className="italic font-serif text-accent">l'Excellence</span> & <span className="italic font-serif text-accent">l'Entraide</span>
            </h1>
            <p className="text-xl text-blue-50/80 max-w-3xl mx-auto leading-relaxed font-sans font-light">
              Le Réseau Alumni des Classes Préparatoires de l'IMSP (RACP-IMSP) est une initiative dédiée à la promotion de l'excellence académique et professionnelle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Context & Justification */}
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
                  Depuis plusieurs années, les classes préparatoires de l’IMSP se distinguent par la qualité de leur formation, contribuant à l’émergence d’étudiants brillants, rigoureux et ambitieux, appelés à intégrer des grandes écoles de renom ou à poursuivre des parcours universitaires particulièrement exigeants, tant au Bénin qu’à l’international. Cette dynamique témoigne de l’excellence académique portée par l’institution et de son rôle central dans la formation des élites scientifiques.
                </p>
                <p>
                  Toutefois, en dépit de ces performances remarquables, plusieurs défis structurels subsistent. On observe notamment l’absence d’un cadre formel favorisant les échanges entre les anciens étudiants et les promotions actuelles, limitant ainsi les opportunités de mentorat, de partage d’expérience et de transmission de bonnes pratiques. Par ailleurs, le manque de ressources académiques organisées et accessibles constitue un frein supplémentaire à l’optimisation des performances des étudiants. Enfin, la visibilité des débouchés professionnels et académiques demeure encore insuffisante, ce qui peut entraver la projection des étudiants dans leur parcours futur.
                </p>
                <p className="font-medium text-app">
                  C’est dans cette perspective qu’a été créé le RACP-IMSP, avec pour vocation de structurer et de dynamiser cette communauté. À travers des initiatives concrètes, pérennes et collectives, le réseau ambitionne de renforcer les liens intergénérationnels, de mettre à disposition des ressources académiques de qualité et d’améliorer la lisibilité des opportunités offertes aux étudiants. Il s’inscrit ainsi comme un levier essentiel de valorisation des parcours et d’accompagnement vers l’excellence.
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
                  src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800&h=450&auto=format&fit=crop" 
                  alt="IMSP Campus" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
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

      {/* Strategic Axes */}
      <section className="py-24 bg-card-bg border-y border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Axes Stratégiques</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre action se décline en trois piliers fondamentaux pour un impact durable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Soutenir les étudiants",
                desc: "Accompagnement académique, mentorat et mise à disposition de ressources pédagogiques de qualité."
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Valoriser le réseau",
                desc: "Création d'une base de données dynamique et organisation d'événements de networking."
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Insertion & Carrière",
                desc: "Partage d'opportunités de stages, d'emplois et orientation vers les grandes écoles."
              }
            ].map((axe, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-app border border-card-border hover:border-primary/50 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {axe.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{axe.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{axe.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-24 bg-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Résultats Attendus</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  "Une plateforme numérique interactive et fonctionnelle.",
                  "Un programme de mentorat structuré et pérenne.",
                  "Une base de données alumni mise à jour régulièrement.",
                  "Des événements annuels de retrouvailles et d'échanges."
                ].map((result, i) => (
                  <div key={i} className="flex items-start gap-4">
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
              <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">L'Institution</span>
              <h2 className="text-4xl font-bold mb-8">L'IMSP de Dangbo</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                L'Institut de Mathématiques et de Sciences Physiques (IMSP) de Dangbo est un centre d'excellence de l'Université d'Abomey-Calavi au Bénin. Créé en 1988, il est reconnu internationalement pour la qualité de sa formation et de sa recherche.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Il abrite les Classes Préparatoires aux Grandes Écoles (CPGE), un cursus intensif de deux ans préparant les étudiants aux concours d'entrée des écoles d'ingénieurs les plus prestigieuses. Le RACP-IMSP est le trait d'union entre ces étudiants et le monde professionnel.
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
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&h=500&auto=format&fit=crop" alt="IMSP 1" className="rounded-[2rem] shadow-lg w-full aspect-[3/4] object-cover border border-card-border" referrerPolicy="no-referrer" />
                <div className="bg-accent h-24 rounded-[2rem]"></div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-primary h-24 rounded-[2rem]"></div>
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400&h=500&auto=format&fit=crop" alt="IMSP 2" className="rounded-[2rem] shadow-lg w-full aspect-[3/4] object-cover border border-card-border" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
