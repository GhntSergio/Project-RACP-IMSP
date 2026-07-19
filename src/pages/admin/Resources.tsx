import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle2, 
  XCircle, 
  Eye, 
  Edit2, 
  Trash2,
  Clock,
  Shield,
  Globe,
  Lock,
  ChevronRight
} from 'lucide-react';
import { mockResources, pendingResources } from '../../data/mockResources';
import { Resource, AccessLevel, ResourceStatus, CATEGORIES, SUBJECTS, LEVELS, TYPES } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { toast } from 'sonner';

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'published' | 'pending'>('published');
  const [searchQuery, setSearchQuery] = useState('');
  const [allResources, setAllResources] = useState<Resource[]>([...mockResources]);
  const [allPending, setAllPending] = useState<Resource[]>([...pendingResources]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newResource, setNewResource] = useState<Partial<Resource>>({
    title: '',
    description: '',
    category: CATEGORIES[0],
    subject: SUBJECTS[0],
    level: LEVELS[0],
    type: TYPES[0],
    author: '',
    access: 'libre',
    status: 'en attente',
    date: new Date().toISOString().split('T')[0]
  });

  const handleAddResource = (e: React.FormEvent) => {
    e.preventDefault();
    const resource: Resource = {
      ...newResource as Resource,
      id: `new-${Date.now()}`,
      thumbnail: `https://picsum.photos/seed/${Date.now()}/400/300`,
      contentUrl: '#'
    };
    setAllPending(prev => [resource, ...prev]);
    setShowAddModal(false);
    toast.success('Ressource soumise pour validation !');
    // Reset form
    setNewResource({
      title: '',
      description: '',
      category: CATEGORIES[0],
      subject: SUBJECTS[0],
      level: LEVELS[0],
      type: TYPES[0],
      author: '',
      access: 'libre',
      status: 'en attente',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const filteredResources = allResources.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPending = allPending.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApprove = (id: string) => {
    const resource = allPending.find(r => r.id === id);
    if (resource) {
      setAllPending(prev => prev.filter(r => r.id !== id));
      setAllResources(prev => [{ ...resource, status: 'publié' }, ...prev]);
      toast.success('Ressource approuvée et publiée !');
    }
  };

  const handleReject = (id: string) => {
    setAllPending(prev => prev.filter(r => r.id !== id));
    toast.error('Ressource rejetée.');
  };

  const getAccessIcon = (access: AccessLevel) => {
    switch (access) {
      case 'libre': return <Globe className="h-3 w-3 text-green-500" />;
      case 'interne': return <Shield className="h-3 w-3 text-blue-500" />;
      case 'restreint': return <Lock className="h-3 w-3 text-red-500" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white font-serif">Gestion des Ressources</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Gérez, validez et organisez le contenu de la bibliothèque.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="flex items-center justify-center space-x-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
        >
          <Plus className="h-5 w-5" />
          <span>Ajouter une ressource</span>
        </button>
      </div>

      {/* Add Resource Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
            >
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white font-serif">Nouvelle Ressource</h2>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                >
                  <XCircle className="h-6 w-6 text-slate-400" />
                </button>
              </div>
              
              <form onSubmit={handleAddResource} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Titre</label>
                    <input 
                      required
                      type="text" 
                      value={newResource.title}
                      onChange={(e) => setNewResource({...newResource, title: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:border-primary dark:text-white"
                      placeholder="Ex: Annales Mathématiques 2024"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Auteur</label>
                    <input 
                      required
                      type="text" 
                      value={newResource.author}
                      onChange={(e) => setNewResource({...newResource, author: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:border-primary dark:text-white"
                      placeholder="Ex: Jean Dupont"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Description courte</label>
                  <textarea 
                    required
                    value={newResource.description}
                    onChange={(e) => setNewResource({...newResource, description: e.target.value})}
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:border-primary h-20 resize-none dark:text-white"
                    placeholder="Brève description de la ressource..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Catégorie</label>
                    <select 
                      value={newResource.category}
                      onChange={(e) => setNewResource({...newResource, category: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:border-primary dark:text-white"
                    >
                      {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Matière</label>
                    <select 
                      value={newResource.subject}
                      onChange={(e) => setNewResource({...newResource, subject: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:border-primary dark:text-white"
                    >
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Niveau</label>
                    <select 
                      value={newResource.level}
                      onChange={(e) => setNewResource({...newResource, level: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:border-primary dark:text-white"
                    >
                      {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Type</label>
                    <select 
                      value={newResource.type}
                      onChange={(e) => setNewResource({...newResource, type: e.target.value as any})}
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:border-primary dark:text-white"
                    >
                      {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Accès</label>
                    <select 
                      value={newResource.access}
                      onChange={(e) => setNewResource({...newResource, access: e.target.value as any})}
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:border-primary dark:text-white"
                    >
                      <option value="libre">Libre</option>
                      <option value="interne">Interne</option>
                      <option value="restreint">Restreint</option>
                    </select>
                  </div>
                </div>
              </form>

              <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end space-x-3 bg-slate-50 dark:bg-slate-900/50">
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                  Annuler
                </button>
                <button 
                  onClick={handleAddResource}
                  className="px-8 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                >
                  Enregistrer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Tabs & Search */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab('published')}
            className={cn(
              "px-6 py-2 rounded-lg text-sm font-bold transition-all",
              activeTab === 'published' ? "bg-white dark:bg-slate-700 text-primary dark:text-accent shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            )}
          >
            Publiées ({allResources.length})
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={cn(
              "px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center space-x-2",
              activeTab === 'pending' ? "bg-white dark:bg-slate-700 text-primary dark:text-accent shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            )}
          >
            <span>En attente</span>
            {allPending.length > 0 && (
              <span className="bg-amber-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                {allPending.length}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex-grow lg:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:border-primary dark:text-white transition-colors"
            />
          </div>
          <button className="p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-accent transition-colors">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Resource List */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ressource</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Auteur / Matière</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Accès</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            <AnimatePresence mode="popLayout">
              {(activeTab === 'published' ? filteredResources : filteredPending).map((resource) => (
                <motion.tr
                  key={resource.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100 dark:border-slate-800">
                        <img src={resource.thumbnail} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[200px]">{resource.title}</p>
                        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{resource.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{resource.author}</p>
                    <p className="text-[10px] text-primary dark:text-accent font-bold uppercase tracking-widest">{resource.subject}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1.5 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg w-fit">
                      {getAccessIcon(resource.access)}
                      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">{resource.access}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">{resource.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end space-x-2">
                      {activeTab === 'pending' ? (
                        <>
                          <button 
                            onClick={() => handleApprove(resource.id)}
                            className="p-2 text-green-500 hover:bg-green-50 dark:hover:bg-green-500/10 rounded-lg transition-colors"
                            title="Approuver"
                          >
                            <CheckCircle2 className="h-5 w-5" />
                          </button>
                          <button 
                            onClick={() => handleReject(resource.id)}
                            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                            title="Rejeter"
                          >
                            <XCircle className="h-5 w-5" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="p-2 text-slate-400 hover:text-primary dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
        
        {(activeTab === 'published' ? filteredResources : filteredPending).length === 0 && (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-slate-300 dark:text-slate-600" />
            </div>
            <h3 className="text-slate-900 dark:text-white font-bold">Aucune ressource trouvée</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Essayez de modifier vos critères de recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
