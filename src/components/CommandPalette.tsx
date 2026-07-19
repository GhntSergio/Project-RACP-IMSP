import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, FileText, Users, Folder, Settings, Home, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { mockResources } from '../data/mockResources';

const CommandPalette: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] p-4 bg-slate-900/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <Command label="Command Menu" className="flex flex-col h-full">
              <div className="flex items-center px-4 border-b border-slate-100 dark:border-slate-800">
                <Search className="h-5 w-5 text-slate-400 mr-3" />
                <Command.Input
                  placeholder="Rechercher une ressource, un auteur ou une page..."
                  className="flex-grow py-4 bg-transparent outline-none text-slate-900 dark:text-slate-100 text-sm"
                />
                <div className="flex items-center space-x-1 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>ESC</span>
                </div>
              </div>

              <Command.List className="max-h-[350px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
                <Command.Empty className="p-8 text-center text-sm text-slate-500">
                  Aucun résultat trouvé.
                </Command.Empty>

                <Command.Group heading="Navigation" className="px-2 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <CommandItem icon={Home} label="Accueil" onSelect={() => runCommand(() => navigate('/'))} />
                  <CommandItem icon={FileText} label="Bibliothèque" onSelect={() => runCommand(() => navigate('/library'))} />
                  <CommandItem icon={Settings} label="Administration" onSelect={() => runCommand(() => navigate('/admin'))} />
                </Command.Group>

                <Command.Group heading="Ressources Récentes" className="px-2 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-50 dark:border-slate-800 mt-2">
                  {mockResources.slice(0, 5).map((resource) => (
                    <CommandItem
                      key={resource.id}
                      icon={FileText}
                      label={resource.title}
                      subLabel={resource.author}
                      onSelect={() => runCommand(() => navigate(`/resource/${resource.id}`))}
                    />
                  ))}
                </Command.Group>

                <Command.Group heading="Administration" className="px-2 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-50 dark:border-slate-800 mt-2">
                  <CommandItem icon={Folder} label="Gérer les ressources" onSelect={() => runCommand(() => navigate('/admin/resources'))} />
                  <CommandItem icon={Users} label="Gérer les auteurs" onSelect={() => runCommand(() => navigate('/admin/authors'))} />
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const CommandItem: React.FC<{
  icon: any;
  label: string;
  subLabel?: string;
  onSelect: () => void;
}> = ({ icon: Icon, label, subLabel, onSelect }) => (
  <Command.Item
    onSelect={onSelect}
    className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 group transition-colors aria-selected:bg-slate-50 dark:aria-selected:bg-slate-800/50"
  >
    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-primary dark:group-hover:text-accent transition-colors">
      <Icon className="h-4 w-4" />
    </div>
    <div className="ml-3 flex-grow">
      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{label}</p>
      {subLabel && <p className="text-[10px] text-slate-400">{subLabel}</p>}
    </div>
    <ArrowRight className="h-4 w-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
  </Command.Item>
);

export default CommandPalette;
