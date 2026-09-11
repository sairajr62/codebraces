import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  LogIn, 
  Sparkles, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Maintenance System', 
      path: '/maintenance-system',
      badge: 'Flagship Product' 
    },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact-us' },
  ];

  const MAINTENANCE_PORTAL_URL = 'https://maintenance-pro.netlify.app/login';

  return (
    <header className="sticky top-0 z-50 bg-[#18191d]/90 backdrop-blur-md border-b border-[#2d3038]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with Orange Braces Icon */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-[#22252a] p-1 border border-[#393e47] flex items-center justify-center shadow-lg shadow-[#FD6703]/10 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#FD6703]/60">
              <img 
                src="/logo.png" 
                alt="CodeBraces Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="font-extrabold text-2xl tracking-tight text-white">Code</span>
                <span className="font-extrabold text-2xl tracking-tight text-[#FD6703]">Braces</span>
              </div>
              <span className="text-[10px] tracking-widest text-[#9da4b2] uppercase font-semibold">
                Software & SaaS Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center bg-[#22252a]/90 p-1.5 rounded-full border border-[#393e47]">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#FD6703] text-white shadow-md shadow-[#FD6703]/30 font-bold'
                      : 'text-[#d1d5db] hover:text-[#FD6703] hover:bg-[#2c3038]'
                  }`
                }
              >
                {item.name}
                {item.badge && (
                  <span className="inline-flex items-center text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold bg-[#FD6703]/20 text-[#FD6703] border border-[#FD6703]/40">
                    <Sparkles className="w-2.5 h-2.5 mr-1" />
                    Product
                  </span>
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
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#282c33] hover:bg-[#343942] border border-[#3e4450] transition-all duration-200 hover:border-[#FD6703]/60 group"
              title="Launch Maintenance System Portal"
            >
              <LogIn className="w-4 h-4 text-[#FD6703] group-hover:scale-110 transition-transform" />
              <span>Portal Login</span>
              <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-[#FD6703]" />
            </a>

            <button
              onClick={() => navigate('/contact-us')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#FD6703] to-[#ff7e29] hover:brightness-110 shadow-md shadow-[#FD6703]/30 transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={MAINTENANCE_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#282c33] text-[#FD6703] border border-[#3e4450]"
              title="Portal Login"
            >
              <LogIn className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[#282c33] text-gray-200 hover:text-white border border-[#3e4450]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#1f2227] border-b border-[#393e47] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#FD6703] text-white font-bold'
                      : 'text-gray-300 hover:bg-[#2a2e36] hover:text-white'
                  }`
                }
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-[#FD6703]/20 text-[#FD6703] border border-[#FD6703]/40">
                    Product
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-[#393e47] flex flex-col gap-2">
            <a
              href={MAINTENANCE_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl text-center font-semibold bg-[#2a2e36] text-white flex items-center justify-center gap-2 border border-[#444a56] hover:border-[#FD6703]"
            >
              <LogIn className="w-4 h-4 text-[#FD6703]" />
              <span>Maintenance Portal Login</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/contact-us');
              }}
              className="w-full py-3 rounded-xl text-center font-bold bg-[#FD6703] text-white flex items-center justify-center gap-2 shadow-md shadow-[#FD6703]/25"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
