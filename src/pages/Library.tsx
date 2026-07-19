import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, ChevronDown, X, LayoutGrid, List } from 'lucide-react';
import { mockResources } from '../data/mockResources';
import { CATEGORIES, SUBJECTS, LEVELS, TYPES } from '../types';
import ResourceCard from '../components/ResourceCard';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest');

  const filteredResources = useMemo(() => {
    let results = mockResources.filter(resource => {
      const isPublished = resource.status === 'publié';
      const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            resource.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || resource.category === selectedCategory;
      const matchesSubject = !selectedSubject || resource.subject === selectedSubject;
      const matchesLevel = !selectedLevel || resource.level === selectedLevel;
      const matchesType = !selectedType || resource.type === selectedType;

      return isPublished && matchesSearch && matchesCategory && matchesSubject && matchesLevel && matchesType;
    });

    // Sorting
    results.sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

    return results;
  }, [searchQuery, selectedCategory, selectedSubject, selectedLevel, selectedType, sortBy]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSubject(null);
    setSelectedLevel(null);
    setSelectedType(null);
    setSearchQuery('');
  };

  const FilterSection = ({ title, options, selected, setter }: { title: string, options: string[], selected: string | null, setter: (val: string | null) => void }) => (
    <div className="mb-8">
      <h3 className="text-[10px] font-bold text-muted-foreground uppercase mb-4 tracking-[0.2em]">{title}</h3>
      <div className="space-y-2">
        <button
          onClick={() => setter(null)}
          className={cn(
            "w-full text-left px-3 py-2 rounded-lg text-xs transition-all font-medium",
            selected === null ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-card-bg/50"
          )}
        >
          Tous
        </button>
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => setter(opt)}
            className={cn(
              "w-full text-left px-3 py-2 rounded-lg text-xs transition-all font-medium",
              selected === opt ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-card-bg/50"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-app text-app pb-20 transition-colors duration-300">
      {/* Hero Search Section */}
      <section className="bg-primary pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Ressources & Savoir</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">Bibliothèque Numérique</h1>
              <p className="text-blue-50/80 text-lg mb-10 font-sans max-w-2xl leading-relaxed">
                Explorez notre catalogue exhaustif de ressources académiques : cours magistraux, annales de concours, fiches de synthèse et guides d'orientation.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group max-w-2xl"
            >
              <div className="absolute -inset-1 bg-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden p-1 border border-white/10">
                <div className="pl-5 pr-3">
                  <Search className="text-slate-400 h-6 w-6" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher un cours, un auteur, une matière..."
                  className="w-full py-5 text-slate-900 dark:text-white bg-transparent outline-none font-sans text-lg placeholder:text-slate-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-primary hover:bg-blue-800 text-white px-10 py-5 rounded-xl font-bold transition-all hidden md:block mr-1">
                  Rechercher
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24 bg-card-bg rounded-2xl border border-card-border p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-card-border">
                <h2 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  <Filter className="h-4 w-4 text-primary" />
                  Filtres
                </h2>
                {(selectedCategory || selectedSubject || selectedLevel || selectedType) && (
                  <button onClick={clearFilters} className="text-[10px] font-bold text-red-500 hover:text-red-600 uppercase tracking-tighter">
                    Effacer
                  </button>
                )}
              </div>

              <FilterSection title="Matière" options={SUBJECTS} selected={selectedSubject} setter={setSelectedSubject} />
              <FilterSection title="Niveau" options={LEVELS} selected={selectedLevel} setter={setSelectedLevel} />
              <FilterSection title="Type" options={TYPES} selected={selectedType} setter={setSelectedType} />
              <FilterSection title="Catégorie" options={CATEGORIES} selected={selectedCategory} setter={setSelectedCategory} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow">
            {/* Controls Bar */}
            <div className="bg-card-bg rounded-2xl shadow-sm border border-card-border p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-card-border bg-app text-muted-foreground text-xs font-bold uppercase tracking-wider"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Filtres</span>
                </button>
                
                <div className="flex items-center gap-2 ml-auto sm:ml-0">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hidden sm:block">Trier par</span>
                  <select
                    className="bg-app border-none text-xs font-bold text-app rounded-lg py-2 px-3 outline-none focus:ring-1 focus:ring-primary/20"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                  >
                    <option value="newest">Plus récent</option>
                    <option value="oldest">Plus ancien</option>
                    <option value="title">Titre (A-Z)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                  <span className="text-primary">{filteredResources.length}</span> résultats
                </p>
                
                <div className="flex bg-app p-1 rounded-xl border border-card-border">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={cn(
                      "p-2 rounded-lg transition-all",
                      viewMode === 'grid' ? "bg-card-bg text-primary shadow-sm" : "text-muted-foreground hover:text-app"
                    )}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={cn(
                      "p-2 rounded-lg transition-all",
                      viewMode === 'list' ? "bg-card-bg text-primary shadow-sm" : "text-muted-foreground hover:text-app"
                    )}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="lg:hidden overflow-hidden mb-8"
                >
                  <div className="bg-card-bg p-6 rounded-2xl border border-card-border shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <select
                      className="w-full p-3 rounded-xl border border-card-border text-xs font-bold outline-none focus:border-primary bg-app text-app uppercase tracking-wider"
                      value={selectedSubject || ''}
                      onChange={(e) => setSelectedSubject(e.target.value || null)}
                    >
                      <option value="">Toutes les matières</option>
                      {SUBJECTS.map(sub => <option key={sub} value={sub}>{sub}</option>)}
                    </select>
                    <select
                      className="w-full p-3 rounded-xl border border-card-border text-xs font-bold outline-none focus:border-primary bg-app text-app uppercase tracking-wider"
                      value={selectedLevel || ''}
                      onChange={(e) => setSelectedLevel(e.target.value || null)}
                    >
                      <option value="">Tous les niveaux</option>
                      {LEVELS.map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
                    </select>
                    <select
                      className="w-full p-3 rounded-xl border border-card-border text-xs font-bold outline-none focus:border-primary bg-app text-app uppercase tracking-wider"
                      value={selectedType || ''}
                      onChange={(e) => setSelectedType(e.target.value || null)}
                    >
                      <option value="">Tous les types</option>
                      {TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                    <button
                      onClick={clearFilters}
                      className="w-full py-3 rounded-xl bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider"
                    >
                      Réinitialiser
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Active Filter Badges */}
            {(selectedCategory || selectedSubject || selectedLevel || selectedType) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedSubject && (
                  <span className="flex items-center gap-2 bg-card-bg border border-card-border px-3 py-1.5 rounded-full text-[10px] font-bold text-muted-foreground shadow-sm">
                    {selectedSubject}
                    <X className="h-3 w-3 cursor-pointer text-muted-foreground hover:text-red-500" onClick={() => setSelectedSubject(null)} />
                  </span>
                )}
                {selectedLevel && (
                  <span className="flex items-center gap-2 bg-card-bg border border-card-border px-3 py-1.5 rounded-full text-[10px] font-bold text-muted-foreground shadow-sm">
                    {selectedLevel}
                    <X className="h-3 w-3 cursor-pointer text-muted-foreground hover:text-red-500" onClick={() => setSelectedLevel(null)} />
                  </span>
                )}
                {selectedType && (
                  <span className="flex items-center gap-2 bg-card-bg border border-card-border px-3 py-1.5 rounded-full text-[10px] font-bold text-muted-foreground shadow-sm">
                    {selectedType}
                    <X className="h-3 w-3 cursor-pointer text-muted-foreground hover:text-red-500" onClick={() => setSelectedType(null)} />
                  </span>
                )}
              </div>
            )}

            {/* Results Grid/List */}
            {filteredResources.length > 0 ? (
              <div className={cn(
                viewMode === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" 
                  : "flex flex-col gap-4"
              )}>
                {filteredResources.map(resource => (
                  <ResourceCard key={resource.id} resource={resource} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              <div className="bg-card-bg rounded-3xl p-20 text-center border border-dashed border-card-border shadow-sm">
                <div className="bg-app w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Search className="h-12 w-12 text-muted-foreground/20" />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-serif">Aucune ressource trouvée</h3>
                <p className="text-muted-foreground mb-10 max-w-md mx-auto font-sans leading-relaxed">
                  Nous n'avons pas trouvé de résultats correspondant à vos critères. Essayez d'élargir votre recherche ou de réinitialiser les filtres.
                </p>
                <button
                  onClick={clearFilters}
                  className="academic-button"
                >
                  Tout afficher
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Library;
