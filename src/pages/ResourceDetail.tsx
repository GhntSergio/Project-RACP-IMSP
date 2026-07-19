import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  Clock, 
  User, 
  Tag, 
  Layers, 
  AlertCircle,
  FileText,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { mockResources, pendingResources } from '../data/mockResources';
import ResourceCard from '../components/ResourceCard';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const ResourceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const resource = [...mockResources, ...pendingResources].find(r => r.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!resource) {
    return (
      <div className="min-h-screen bg-app text-app flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ressource non trouvée</h2>
          <Link to="/library" className="text-primary hover:underline">Retour à la bibliothèque</Link>
        </div>
      </div>
    );
  }

  const relatedResources = mockResources
    .filter(r => r.subject === resource.subject && r.id !== resource.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-app text-app py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs / Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Retour</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card-bg rounded-3xl shadow-sm border border-card-border overflow-hidden"
            >
              <div className="relative h-64 sm:h-96">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-accent text-primary text-[10px] font-bold uppercase rounded">
                      {resource.category}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                    {resource.title}
                  </h1>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-card-border">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">Auteur / Source</span>
                      <span className="text-sm font-medium">{resource.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">Date de publication</span>
                      <span className="text-sm font-medium">{resource.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Layers className="h-5 w-5 text-muted-foreground" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">Niveau</span>
                      <span className="text-sm font-medium">{resource.level}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Tag className="h-5 w-5 text-muted-foreground" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">Matière</span>
                      <span className="text-sm font-medium">{resource.subject}</span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-blue dark:prose-invert max-w-none mb-10">
                  <h3 className="text-xl font-bold mb-4">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {resource.longDescription || resource.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Cette ressource a été mise à disposition par le RACP-IMSP pour soutenir votre parcours académique. Elle est destinée à un usage strictement personnel et éducatif.
                  </p>
                </div>

                {/* Legal Notice */}
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mb-10">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">Usage Responsable</h4>
                      <p className="text-sm text-primary/80 leading-relaxed">
                        Le RACP-IMSP s'efforce de respecter les droits de propriété intellectuelle. Si vous êtes l'auteur d'une ressource et que vous souhaitez son retrait, merci de nous contacter. L'usage commercial de ces ressources est strictement interdit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-grow academic-button flex items-center justify-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Télécharger la ressource</span>
                  </button>
                  <button className="bg-app border border-card-border text-app px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-card-bg transition-all">
                    <Share2 className="h-5 w-5" />
                    <span>Partager</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Access Info */}
            <div className="bg-card-bg p-6 rounded-3xl shadow-sm border border-card-border">
              <h3 className="text-lg font-bold mb-4">Statut d'accès</h3>
              <div className="flex items-center space-x-3 p-4 bg-app rounded-2xl border border-card-border">
                <div className={cn(
                  "p-2 rounded-lg",
                  resource.access === 'libre' ? "bg-emerald-500/10 text-emerald-500" : "bg-primary/10 text-primary"
                )}>
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider">
                    Accès {resource.access}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {resource.access === 'libre' 
                      ? "Disponible pour tous les visiteurs." 
                      : "Réservé aux membres du réseau RACP-IMSP."}
                  </p>
                </div>
              </div>
            </div>

            {/* Related Resources */}
            <div>
              <h3 className="text-lg font-bold mb-6">Ressources similaires</h3>
              <div className="space-y-6">
                {relatedResources.length > 0 ? (
                  relatedResources.map(r => (
                    <ResourceCard key={r.id} resource={r} />
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground italic">Aucune ressource similaire trouvée.</p>
                )}
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-primary text-white p-6 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
              <h3 className="text-lg font-bold mb-4 relative z-10">Besoin d'aide ?</h3>
              <p className="text-sm text-blue-100 mb-6 relative z-10">
                Vous ne trouvez pas ce que vous cherchez ou vous avez une question sur cette ressource ?
              </p>
              <Link to="/contact" className="inline-block bg-accent text-primary px-6 py-2 rounded-lg font-bold text-sm hover:bg-yellow-500 transition-all relative z-10">
                Contacter le support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;
