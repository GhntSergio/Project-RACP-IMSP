import React from 'react';
import { 
  Users, 
  FileText, 
  Eye, 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  CheckCircle2, 
  XCircle,
  TrendingUp,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';
import { pendingResources } from '../../data/mockResources';
import { cn } from '../../lib/utils';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { toast } from 'sonner';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Ressources', value: '1,284', icon: FileText, change: '+12%', trend: 'up', color: 'bg-blue-500' },
    { label: 'Utilisateurs Actifs', value: '856', icon: Users, change: '+5.4%', trend: 'up', color: 'bg-purple-500' },
    { label: 'Vues Totales', value: '45.2k', icon: Eye, change: '-2.1%', trend: 'down', color: 'bg-emerald-500' },
    { label: 'En Attente', value: pendingResources.length.toString(), icon: Clock, change: '+3', trend: 'up', color: 'bg-amber-500' },
  ];

  const recentActivities = [
    { user: 'Jean-Pierre D.', action: 'a soumis une nouvelle fiche', target: 'Électromagnétisme', time: 'Il y a 2h', status: 'pending' },
    { user: 'Admin', action: 'a validé la ressource', target: 'Annales Mines-Ponts', time: 'Il y a 5h', status: 'approved' },
    { user: 'Sarah L.', action: 'a mis à jour son profil', target: 'Auteur', time: 'Il y a 8h', status: 'info' },
    { user: 'Admin', action: 'a rejeté la ressource', target: 'Cours de Yoga', time: 'Hier', status: 'rejected' },
  ];

  const chartData = [
    { name: 'Lun', views: 4000, downloads: 2400 },
    { name: 'Mar', views: 3000, downloads: 1398 },
    { name: 'Mer', views: 2000, downloads: 9800 },
    { name: 'Jeu', views: 2780, downloads: 3908 },
    { name: 'Ven', views: 1890, downloads: 4800 },
    { name: 'Sam', views: 2390, downloads: 3800 },
    { name: 'Dim', views: 3490, downloads: 4300 },
  ];

  const pieData = [
    { name: 'Maths', value: 400 },
    { name: 'Physique', value: 300 },
    { name: 'Informatique', value: 300 },
    { name: 'Orientation', value: 200 },
  ];

  const COLORS = ['#003d7a', '#00b4d8', '#10b981', '#f59e0b'];

  const handleExport = () => {
    toast.promise(new Promise(resolve => setTimeout(resolve, 2000)), {
      loading: 'Préparation de l\'exportation...',
      success: 'Données exportées avec succès !',
      error: 'Erreur lors de l\'exportation.',
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white font-serif">Tableau de bord</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Bienvenue dans l'espace d'administration de l'IMSP.</p>
        </div>
        <button 
          onClick={handleExport}
          className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
        >
          <ArrowUpRight className="h-4 w-4" />
          <span>Exporter les données</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("p-3 rounded-xl text-white shadow-lg", stat.color)}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className={cn(
                "flex items-center space-x-1 text-xs font-bold px-2 py-1 rounded-full",
                stat.trend === 'up' ? "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400" : "bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400"
              )}>
                {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                <span>{stat.change}</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <Activity className="h-5 w-5 text-primary" />
              <span>Analytique des ressources</span>
            </h3>
            <select className="text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none text-slate-600 dark:text-slate-300">
              <option>7 derniers jours</option>
              <option>30 derniers jours</option>
            </select>
          </div>
          <div className="p-6 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#003d7a" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#003d7a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94a3b8' }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94a3b8' }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' 
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#003d7a" 
                  fillOpacity={1} 
                  fill="url(#colorViews)" 
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribution Chart */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
          <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Répartition par matière</span>
          </h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 space-y-3">
            {pieData.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{item.name}</span>
                </div>
                <span className="text-xs font-bold text-slate-900 dark:text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <Activity className="h-5 w-5 text-primary" />
              <span>Activités récentes</span>
            </h3>
            <button className="text-xs font-bold text-primary hover:underline">Voir tout</button>
          </div>
          <div className="divide-y divide-slate-50 dark:divide-slate-800">
            {recentActivities.map((activity, index) => (
              <div key={index} className="p-4 flex items-center space-x-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                  activity.status === 'pending' ? "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400" :
                  activity.status === 'approved' ? "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400" :
                  activity.status === 'rejected' ? "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400" :
                  "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                )}>
                  {activity.status === 'pending' ? <Clock className="h-5 w-5" /> :
                   activity.status === 'approved' ? <CheckCircle2 className="h-5 w-5" /> :
                   activity.status === 'rejected' ? <XCircle className="h-5 w-5" /> :
                   <Activity className="h-5 w-5" />}
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-sm text-slate-900 dark:text-slate-100">
                    <span className="font-bold">{activity.user}</span> {activity.action} <span className="font-bold text-primary dark:text-accent">"{activity.target}"</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-primary text-white rounded-2xl p-6 shadow-xl shadow-primary/20 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg mb-2">Conseil du jour</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Pensez à vérifier régulièrement les ressources en attente pour maintenir la bibliothèque à jour et encourager les contributeurs.
            </p>
          </div>
          <div className="mt-8">
            <button className="w-full py-3 bg-white text-primary rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
              Accéder à la modération
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
