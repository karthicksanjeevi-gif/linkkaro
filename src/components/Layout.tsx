import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { currentUser, userData, logout } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find Jobs', path: '/jobs' },
    { name: 'Find Workers', path: '/workers' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans overflow-x-hidden">
      {/* Navigation Bar */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="bg-emerald-700 text-white shadow-md sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-400 text-slate-900 font-extrabold p-2 rounded-xl text-xl tracking-wider shadow"
            >
              LK
            </motion.div>
            <div>
              <span className="text-2xl font-black tracking-tight block leading-none">LinkKaro</span>
              <span className="text-[10px] text-emerald-200 uppercase tracking-wider font-semibold">Rural Job Connect</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`relative hover:text-amber-300 transition capitalize px-2 py-1 ${location.pathname === link.path ? 'text-amber-300 font-bold' : ''}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-amber-300 rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold">{userData?.name || currentUser.email}</span>
                <button onClick={logout} className="text-emerald-200 hover:text-white text-sm font-bold">Logout</button>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-amber-300 font-bold text-sm transition">Login</Link>
                <Link to="/register">
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-4 py-2 rounded-xl text-sm transition shadow"
                  >
                    Join Now
                  </motion.button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-emerald-800 flex flex-col gap-3 border-t border-emerald-600 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    onClick={() => setMenuOpen(false)}
                    className="text-left font-semibold py-1 hover:text-amber-300 transition"
                  >
                    {link.name}
                  </Link>
                ))}
                {currentUser ? (
                  <button onClick={() => { logout(); setMenuOpen(false); }} className="text-left font-semibold py-1 text-emerald-200">Logout</button>
                ) : (
                  <Link to="/login" onClick={() => setMenuOpen(false)} className="text-left font-semibold py-1">Login</Link>
                )}
                {!currentUser && (
                  <Link to="/register" onClick={() => setMenuOpen(false)} className="bg-amber-400 text-slate-900 font-bold py-2 rounded-xl text-center mt-2 block">
                    Join Now
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content Area */}
      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 border-t border-slate-800 mt-auto z-10 relative">
        <div className="max-w-6xl mx-auto text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-xl font-bold text-white tracking-tight">LinkKaro</span>
            <p className="text-xs text-slate-400 mt-1">Connecting Local Talent with Local Opportunity</p>
          </div>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} LinkKaro. All rights reserved. Rural & Semi-Urban Job Connect Platform.
          </p>
        </div>
      </footer>
    </div>
  );
}
