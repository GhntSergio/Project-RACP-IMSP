import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  ChevronRight, 
  FileText, 
  MoreVertical,
  LayoutGrid,
  List
} from 'lucide-react';
import { CATEGORIES } from '../../types';
import { mockResources } from '../../data/mockResources';
import { motion, AnimatePresence } from 'motion/react';

const Categories: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState<string[]>([...CATEGORIES]);

  const filteredCategories = categories.filter(c => 
    c.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getResourceCount = (category: string) => {
    return mockResources.filter(r => r.category === category).length;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white font-serif">Gestion des Catégories</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Organisez les ressources par thématiques et catégories.</p>
        </div>
        <button className="flex items-center justify-center space-x-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
          <Plus className="h-5 w-5" />
          <span>Nouvelle catégorie</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="relative flex-grow lg:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Rechercher une catégorie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:border-primary dark:text-white transition-colors"
          />
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-slate-100 dark:bg-slate-800 text-primary dark:text-accent rounded-lg shadow-sm">
            <LayoutGrid className="h-5 w-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-primary dark:hover:text-accent transition-colors">
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group relative"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/5 dark:bg-primary/10 rounded-xl text-primary dark:text-accent border border-primary/10">
                  <FileText className="h-6 w-6" />
                </div>
                <button className="p-1 text-slate-300 hover:text-slate-600 dark:hover:text-slate-400 transition-colors">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-accent transition-colors">{category}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">{getResourceCount(category)} ressources associées</p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <button className="flex items-center space-x-1 text-xs font-bold text-primary dark:text-accent hover:underline">
                  <span>Détails</span>
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Categories;
