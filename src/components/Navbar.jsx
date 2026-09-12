import { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  LogIn, 
  Sparkles, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Maintenance System', 
      path: '/maintenance-system',
      badge: 'Flagship' 
    },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about-us' },
    { name: 'Contact', path: '/contact-us' },
  ];

  const MAINTENANCE_PORTAL_URL = 'https://maintenance-pro.netlify.app/login';

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="sticky top-0 z-50 w-full pt-3 px-4 sm:px-6 lg:px-8 transition-all duration-300"
    >
      <div 
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 border ${
          scrolled 
            ? 'bg-[#0f1115]/85 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]' 
            : 'bg-[#13151b]/70 backdrop-blur-md border-white/[0.07] shadow-lg'
        }`}
      >
        <div className="flex items-center justify-between h-12">
          
          {/* Brand Logo with Orange Braces Icon */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-full bg-[#181a20] p-1.5 border border-white/10 flex items-center justify-center shadow-lg shadow-[#FD6703]/10 transition-transform duration-300 group-hover:border-[#FD6703]/50"
            >
              <img 
                src="/logo.png" 
                alt="CodeBraces Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="font-extrabold text-xl tracking-tight text-white">Code</span>
                <span className="font-extrabold text-xl tracking-tight text-[#FD6703]">Braces</span>
              </div>
              <span className="text-[9px] tracking-widest text-gray-400 uppercase font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>SaaS & Labs</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center bg-[#171920]/80 p-1 rounded-full border border-white/[0.08]">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div 
                        layoutId="activeNav" 
                        className="absolute inset-0 rounded-full bg-[#FD6703]/15 border border-[#FD6703]/30" 
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }} 
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                    {item.badge && (
                      <span className="relative z-10 inline-flex items-center text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded-full font-bold bg-[#FD6703]/20 text-[#FD6703] border border-[#FD6703]/30">
                        <Sparkles className="w-2 h-2 mr-0.5" />
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={MAINTENANCE_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-200 bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 transition-all duration-200 hover:border-[#FD6703]/60 group"
              title="Launch Live Maintenance Portal"
            >
              <LogIn className="w-3.5 h-3.5 text-[#FD6703] group-hover:scale-110 transition-transform" />
              <span>Portal Login</span>
              <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-[#FD6703]" />
            </a>

            <button
              onClick={() => navigate('/contact-us')}
              className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-full font-bold text-xs group shimmer-btn"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#FD6703] to-[#ff7e29] group-hover:from-[#ff7e29] group-hover:to-[#FD6703] absolute"></span>
              <span className="relative px-4 py-1.5 transition-all ease-out bg-[#0f1115] rounded-full group-hover:bg-opacity-0 text-white flex items-center gap-1.5">
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={MAINTENANCE_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1b1e25] text-[#FD6703] border border-white/10"
              title="Portal Login"
            >
              <LogIn className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-[#1b1e25] text-gray-200 hover:text-white border border-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-2 bg-[#121419]/95 backdrop-blur-2xl rounded-2xl border border-white/10 p-4 space-y-3 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#FD6703] text-white font-bold'
                        : 'text-gray-300 hover:bg-white/[0.05] hover:text-white'
                    }`
                  }
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-[#FD6703]/20 text-[#FD6703] border border-[#FD6703]/30">
                      Product
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={MAINTENANCE_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 rounded-xl text-center text-xs font-semibold bg-white/[0.05] text-white flex items-center justify-center gap-2 border border-white/10"
              >
                <LogIn className="w-3.5 h-3.5 text-[#FD6703]" />
                <span>Maintenance Portal Login</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/contact-us');
                }}
                className="w-full py-2.5 rounded-xl text-center text-xs font-bold bg-[#FD6703] text-white flex items-center justify-center gap-1.5 shadow-lg shadow-[#FD6703]/20"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
