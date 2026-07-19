import React, { Suspense } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Tags, 
  Users, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  ChevronRight,
  ShieldCheck,
  Command as CommandIcon
} from 'lucide-react';
import { cn } from '../../lib/utils';
import ThemeToggle from '../ThemeToggle';
import CommandPalette from '../CommandPalette';
import PageLoader from '../PageLoader';

const AdminLayout: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/admin' },
    { icon: FileText, label: 'Ressources', path: '/admin/resources' },
    { icon: Tags, label: 'Catégories', path: '/admin/categories' },
    { icon: Users, label: 'Auteurs & Contributeurs', path: '/admin/authors' },
    { icon: ShieldCheck, label: 'Modération', path: '/admin/moderation' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <CommandPalette />
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 dark:bg-slate-900 text-white flex flex-col flex-shrink-0 border-r border-slate-800">
        <div className="p-6 flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20">
            A
          </div>
          <span className="font-bold text-lg tracking-tight">IMSP Admin</span>
        </div>

        <nav className="flex-grow px-4 space-y-1 mt-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all group",
                  isActive 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                )}
              >
                <item.icon className={cn("h-5 w-5", isActive ? "text-white" : "text-slate-500 group-hover:text-white")} />
                <span className="font-medium text-sm">{item.label}</span>
                {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-all w-full text-left">
            <LogOut className="h-5 w-5" />
            <span className="font-medium text-sm">Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 flex-shrink-0 transition-colors duration-300">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 w-96 group focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <Search className="h-4 w-4 text-slate-400 mr-2" />
            <input 
              type="text" 
              placeholder="Rechercher (Ctrl+K)..." 
              className="bg-transparent border-none outline-none text-sm w-full text-slate-900 dark:text-slate-100"
              readOnly
              onClick={() => {
                const event = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true });
                document.dispatchEvent(event);
              }}
            />
            <div className="hidden sm:flex items-center space-x-1 px-1.5 py-0.5 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Ctrl</span>
              <span>K</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button className="relative p-2 text-slate-400 hover:text-primary transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>
            
            <div className="flex items-center space-x-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Admin IMSP</p>
                <p className="text-[10px] text-slate-500">Super Administrateur</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-700 shadow-sm overflow-hidden">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-grow overflow-y-auto p-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
