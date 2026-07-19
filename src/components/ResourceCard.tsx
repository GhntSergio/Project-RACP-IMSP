import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Video, Book, Award, Eye, ExternalLink, ArrowRight } from 'lucide-react';
import { Resource } from '../types';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface ResourceCardProps {
  resource: Resource;
  viewMode?: 'grid' | 'list';
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, viewMode = 'grid' }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileText className="h-4 w-4" />;
      case 'Vidéo': return <Video className="h-4 w-4" />;
      case 'Fiche': return <Award className="h-4 w-4" />;
      case 'Annale': return <Book className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeBadgeStyles = (type: string) => {
    switch (type) {
      case 'PDF': return 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-100 dark:border-red-500/20';
      case 'Vidéo': return 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-500/20';
      case 'Fiche': return 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-500/20';
      case 'Annale': return 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20';
      case 'Livre': return 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20';
      case 'Guide': return 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-100 dark:border-cyan-500/20';
      case 'Témoignage': return 'bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-500/20';
      default: return 'bg-slate-50 dark:bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-500/20';
    }
  };

  const getAccessBadge = (access: string) => {
    switch (access) {
      case 'libre':
        return <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-200/50 dark:border-green-500/20 uppercase backdrop-blur-md">Libre</span>;
      case 'interne':
        return <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-500/20 uppercase backdrop-blur-md">Interne</span>;
      case 'restreint':
        return <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200/50 dark:border-red-500/20 uppercase backdrop-blur-md">Restreint</span>;
      default:
        return null;
    }
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all p-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 group relative"
      >
        <div className="relative w-full sm:w-40 h-28 rounded-lg overflow-hidden flex-shrink-0 shadow-inner bg-slate-50 dark:bg-slate-800">
          <img
            src={resource.thumbnail}
            alt={resource.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-2 left-2">
            {getAccessBadge(resource.access)}
          </div>
        </div>

        <div className="flex-grow min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={cn(
              "px-2 py-0.5 rounded border text-[9px] font-bold uppercase tracking-wider flex items-center gap-1",
              getTypeBadgeStyles(resource.type)
            )}>
              {getTypeIcon(resource.type)}
              {resource.type}
            </span>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{resource.subject}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{resource.level}</span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 truncate group-hover:text-primary dark:group-hover:text-accent transition-colors font-serif">
            {resource.title}
          </h3>

          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mb-3 font-sans leading-relaxed">
            {resource.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[9px] font-bold text-primary dark:text-accent border border-primary/20">
                {resource.author.charAt(0)}
              </div>
              <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">{resource.author}</span>
            </div>
            <div className="h-3 w-[1px] bg-slate-200 dark:bg-slate-700"></div>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 font-sans">{resource.date}</span>
          </div>
        </div>

        <div className="flex-shrink-0 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-50 dark:border-slate-800 mt-auto sm:mt-0">
          <Link
            to={`/resource/${resource.id}`}
            className="flex items-center justify-center space-x-2 bg-primary/5 dark:bg-accent/10 hover:bg-primary hover:text-white text-primary dark:text-accent px-5 py-2.5 rounded-lg font-bold text-xs transition-all group/btn"
          >
            <span>Détails</span>
            <Eye className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full group overflow-hidden"
    >
      <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-3 right-3 z-10">
          {getAccessBadge(resource.access)}
        </div>
        <div className={cn(
          "absolute bottom-3 left-3 flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider shadow-sm border backdrop-blur-md",
          getTypeBadgeStyles(resource.type)
        )}>
          {getTypeIcon(resource.type)}
          <span>{resource.type}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center space-x-2 text-[9px] font-bold text-accent uppercase tracking-widest mb-2">
          <span>{resource.subject}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
          <span>{resource.level}</span>
        </div>
        <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2 mb-2 leading-snug group-hover:text-primary dark:group-hover:text-accent transition-colors font-serif">
          {resource.title}
        </h3>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 flex-grow font-sans leading-relaxed">
          {resource.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-0.5">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[8px] font-bold text-primary dark:text-accent border border-primary/20">
                {resource.author.charAt(0)}
              </div>
              <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 truncate max-w-[70px]">{resource.author}</span>
            </div>
            <span className="text-[9px] text-slate-400 dark:text-slate-500 font-sans ml-7">{resource.date}</span>
          </div>
          <Link
            to={`/resource/${resource.id}`}
            className="flex items-center space-x-1 text-primary dark:text-accent font-bold text-[10px] uppercase tracking-wider hover:text-accent transition-colors group/link"
          >
            <span>Voir</span>
            <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
