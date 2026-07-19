import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Search } from 'lucide-react';
import { cn } from '../lib/utils';
import ThemeToggle from './ThemeToggle';
import logoPng from '@/Img/LOGO PNG.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Bibliothèque', path: '/library' },
    { name: 'À propos', path: '/about' },
    { name: 'Contribuer', path: '/contribute' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-nav text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="bg-white p-1 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-500 group-hover:rotate-3 flex items-center justify-center w-14 h-14 overflow-hidden">
                <img
                  src={logoPng}
                  alt="RACP-IMSP Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-sans font-extrabold text-sm tracking-tight text-white uppercase">
                  Réseau Alumni
                </span>
                <span className="font-sans font-medium text-[9px] text-accent uppercase tracking-[0.3em] mt-1">
                  Classes Préparatoires
                </span>
                <span className="font-serif italic text-sm text-white/90 mt-0.5">
                  RACP - IMSP
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300",
                    location.pathname === link.path
                      ? "text-accent bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-white/10 flex items-center space-x-4">
                <ThemeToggle />
                <Link
                  to="/library"
                  className="btn-premium btn-primary !py-2.5 !px-6 text-[10px]"
                >
                  <div className="flex items-center space-x-2">
                    <Search className="h-3.5 w-3.5" />
                    <span>Explorer</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 focus:outline-none transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? "text-accent bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
