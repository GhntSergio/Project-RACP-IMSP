import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Facebook, Twitter, Linkedin, Globe, Instagram } from 'lucide-react';
import logoPng from '@/assets/brand/logo-racp.png';

const Footer = () => {
  return (
    <footer className="bg-slate-950 dark:bg-black text-slate-400 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-1 rounded-lg flex items-center justify-center w-11 h-11 overflow-hidden">
                <img
                  src={logoPng}
                  alt="RACP-IMSP Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">RACP-IMSP</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Le Réseau Alumni des Classes Préparatoires de l'IMSP (Dangbo, Bénin) œuvre pour l'excellence académique et l'accompagnement des futurs leaders scientifiques.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61579263734893" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/racp_imsp?igsh=MTMzNmo5YmhhOGV2bQ==" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/in/racp-imsp-41597937b/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Accueil</Link></li>
              <li><Link to="/library" className="hover:text-accent transition-colors">Bibliothèque</Link></li>
              <li><Link to="/association" className="hover:text-accent transition-colors">L'Association</Link></li>
              <li><Link to="/contribute" className="hover:text-accent transition-colors">Contribuer</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Ressources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/library" className="hover:text-accent transition-colors">Annales & Concours</Link></li>
              <li><Link to="/library" className="hover:text-accent transition-colors">Cours Fondamentaux</Link></li>
              <li><Link to="/library" className="hover:text-accent transition-colors">Orientation</Link></li>
              <li><Link to="/library" className="hover:text-accent transition-colors">Méthodologie</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:racp-imsp@racp-imsp.org" className="hover:text-accent transition-colors break-all">racp-imsp@racp-imsp.org</a>
              </li>
              <li className="flex items-start space-x-3">
                <Globe className="h-5 w-5 text-accent shrink-0" />
                <span>IMSP, Dangbo, Bénin</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 dark:border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest">
          <p>© 2026 RACP-IMSP. Excellence & Solidarité.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/admin" className="hover:text-white transition-colors">Administration</Link>
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
