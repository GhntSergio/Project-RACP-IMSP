import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Globe, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">Contact</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Restons en <span className="italic font-serif text-accent">Lien</span>
            </h1>
            <p className="text-xl text-blue-50/80 max-w-2xl mx-auto font-sans font-light">
              Une question sur une ressource ? Un partenariat ? Ou simplement envie de discuter ? Notre équipe est à votre écoute.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card-bg p-10 rounded-[3rem] shadow-2xl border border-card-border"
              >
                <h3 className="text-2xl font-bold mb-10">Informations</h3>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: <Mail className="h-6 w-6 text-primary" />,
                      label: "Email",
                      value: "racp-imsp@racp-imsp.org",
                      color: "bg-primary/10"
                    },
                    {
                      icon: <Phone className="h-6 w-6 text-primary" />,
                      label: "Téléphone",
                      value: "Contact via Email / Réseaux",
                      color: "bg-primary/10"
                    },
                    {
                      icon: <MapPin className="h-6 w-6 text-primary" />,
                      label: "Adresse",
                      value: "IMSP, Dangbo, Bénin",
                      color: "bg-primary/10"
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-5 group">
                      <div className={cn("p-4 rounded-2xl shrink-0 transition-transform duration-500 group-hover:scale-110", item.color)}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1">{item.label}</p>
                        {item.label === "Email" ? (
                          <a href={`mailto:${item.value}`} className="font-semibold break-all font-sans hover:text-primary transition-colors text-app">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-semibold break-all font-sans text-app">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-10 border-t border-card-border">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Suivez-nous</p>
                  <div className="flex space-x-4">
                    {[
                      { icon: <Facebook className="h-5 w-5" />, url: "https://www.facebook.com/profile.php?id=61579263734893" },
                      { icon: <Instagram className="h-5 w-5" />, url: "https://www.instagram.com/racp_imsp?igsh=MTMzNmo5YmhhOGV2bQ==" },
                      { icon: <Linkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/racp-imsp-41597937b/" }
                    ].map((social, i) => (
                      <a 
                        key={i}
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-app p-4 rounded-2xl text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 border border-card-border"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-accent p-10 rounded-[3rem] shadow-2xl text-primary relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full transition-transform duration-700 group-hover:scale-150"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Réseau Alumni</h3>
                <p className="text-sm leading-relaxed mb-8 relative z-10 font-sans opacity-90">
                  Rejoignez la communauté des anciens de l'IMSP et participez au rayonnement de notre institut.
                </p>
                <Link to="/alumni" className="inline-flex items-center space-x-3 font-bold uppercase tracking-widest text-xs relative z-10 group/link">
                  <span>Devenir membre</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card-bg p-10 md:p-16 rounded-[4rem] shadow-2xl border border-card-border"
              >
                {submitted ? (
                  <div className="text-center py-20">
                    <div className="bg-emerald-500/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8">
                      <Send className="h-10 w-10 text-emerald-500" />
                    </div>
                    <h2 className="text-4xl font-bold mb-6">Message envoyé !</h2>
                    <p className="text-muted-foreground mb-10 font-sans">Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="academic-button"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-3 tracking-[0.2em]">Nom</label>
                        <input required type="text" className="w-full p-4 rounded-2xl border border-card-border focus:ring-2 focus:ring-primary/5 focus:border-primary outline-none transition-all bg-app font-sans text-sm text-app" placeholder="Votre nom" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-3 tracking-[0.2em]">Email</label>
                        <input required type="email" className="w-full p-4 rounded-2xl border border-card-border focus:ring-2 focus:ring-primary/5 focus:border-primary outline-none transition-all bg-app font-sans text-sm text-app" placeholder="votre@email.com" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-3 tracking-[0.2em]">Sujet</label>
                      <input required type="text" className="w-full p-4 rounded-2xl border border-card-border focus:ring-2 focus:ring-primary/5 focus:border-primary outline-none transition-all bg-app font-sans text-sm text-app" placeholder="De quoi souhaitez-vous discuter ?" />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-3 tracking-[0.2em]">Message</label>
                      <textarea required rows={6} className="w-full p-4 rounded-2xl border border-card-border focus:ring-2 focus:ring-primary/5 focus:border-primary outline-none transition-all bg-app font-sans text-sm text-app" placeholder="Votre message ici..."></textarea>
                    </div>

                    <button type="submit" className="w-full academic-button !rounded-2xl flex items-center justify-center space-x-3">
                      <Send className="h-4 w-4" />
                      <span>Envoyer le message</span>
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
