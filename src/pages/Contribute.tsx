import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Upload, CheckCircle2, AlertTriangle, FileText, Info } from 'lucide-react';

const Contribute = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-app flex items-center justify-center py-20 transition-colors duration-300">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-card-bg p-16 rounded-[3rem] shadow-2xl text-center max-w-xl mx-4 border border-card-border"
        >
          <div className="bg-emerald-500/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="h-12 w-12 text-emerald-500" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Merci pour votre contribution !</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed font-sans">
            Votre proposition a été envoyée avec succès au comité académique. Nous allons l'examiner et vous recevrez un email dès qu'elle sera validée et publiée.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="academic-button"
          >
            Proposer une autre ressource
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-app text-app py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">Partage</span>
            <h1 className="text-5xl font-bold mb-8">Contribuer à la Bibliothèque</h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-sans font-light">
              Vous possédez des ressources de qualité ? Partagez-les avec la communauté et participez à l'excellence des étudiants de l'IMSP.
            </p>

            <div className="space-y-10">
              {[
                {
                  icon: <Info className="h-6 w-6 text-primary" />,
                  title: "Qui peut contribuer ?",
                  desc: "Les alumni, les professeurs, et même les étudiants actuels (pour des fiches de synthèse ou des témoignages) peuvent proposer du contenu.",
                  color: "bg-primary/10"
                },
                {
                  icon: <AlertTriangle className="h-6 w-6 text-amber-600" />,
                  title: "Cadre Légal & Éthique",
                  desc: "Assurez-vous d'avoir les droits de diffusion sur les documents partagés. Le RACP-IMSP se réserve le droit de refuser tout contenu ne respectant pas la propriété intellectuelle.",
                  color: "bg-amber-500/10"
                },
                {
                  icon: <FileText className="h-6 w-6 text-emerald-600" />,
                  title: "Processus de Validation",
                  desc: "Chaque ressource est examinée par notre comité académique avant publication pour garantir la véracité des informations et la qualité pédagogique.",
                  color: "bg-emerald-500/10"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6 group">
                  <div className={cn("p-4 rounded-2xl shrink-0 transition-transform duration-500 group-hover:scale-110", item.color)}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card-bg p-10 md:p-16 rounded-[3.5rem] shadow-2xl border border-card-border relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[4rem] -z-10"></div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-3 tracking-[0.2em]">Nom complet</label>
                  <input required type="text" className="w-full p-4 rounded-2xl border border-card-border focus:ring-2 focus:ring-primary/5 focus:border-primary outline-none transition-all bg-app font-sans text-sm text-app" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-3 tracking-[0.2em]">Email</label>
                  <input required type="email" className="w-full p-4 rounded-2xl border border-card-border focus:ring-2 focus:ring-primary/5 focus:border-primary outline-none transition-all bg-app font-sans text-sm text-app" placeholder="jean@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-3 tracking-[0.2em]">Titre de la ressource</label>
                <input required type="text" className="w-full p-4 rounded-2xl border border-card-border focus:ring-2 focus:ring-primary/5 focus:border-primary outline-none transition-all bg-app font-sans text-sm text-app" placeholder="Ex: Fiche de révision - Thermodynamique" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-3 tracking-[0.2em]">Catégorie</label>
                  <select className="w-full p-4 rounded-2xl border border-card-border focus:ring-2 focus:ring-primary/5 focus:border-primary outline-none transition-all bg-app font-sans text-sm text-app appearance-none">
                    <option>Ressources académiques</option>
                    <option>Annales & Concours</option>
                    <option>Méthodologie</option>
                    <option>Orientation</option>
                    <option>Témoignage</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-3 tracking-[0.2em]">Matière</label>
                  <select className="w-full p-4 rounded-2xl border border-card-border focus:ring-2 focus:ring-primary/5 focus:border-primary outline-none transition-all bg-app font-sans text-sm text-app appearance-none">
                    <option>Mathématiques</option>
                    <option>Physique</option>
                    <option>Chimie</option>
                    <option>Informatique</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-3 tracking-[0.2em]">Description courte</label>
                <textarea rows={3} className="w-full p-4 rounded-2xl border border-card-border focus:ring-2 focus:ring-primary/5 focus:border-primary outline-none transition-all bg-app font-sans text-sm text-app" placeholder="Décrivez brièvement le contenu..."></textarea>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-3 tracking-[0.2em]">Fichier / Lien</label>
                <div className="border-2 border-dashed border-card-border rounded-[2rem] p-10 text-center hover:border-primary hover:bg-primary/[0.02] transition-all cursor-pointer group">
                  <div className="w-16 h-16 bg-app rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Upload className="h-8 w-8 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">Cliquez pour uploader ou glissez-déposez</p>
                  <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-widest">PDF, ZIP, MP4 • Max 50 Mo</p>
                </div>
              </div>

              <button type="submit" className="w-full academic-button !rounded-2xl">
                Envoyer ma proposition
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
