import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Spotlight from '../components/ui/Spotlight';

const PortalLogin = () => {
  const MAINTENANCE_PORTAL_URL = 'https://maintenance-pro.netlify.app/login';
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = MAINTENANCE_PORTAL_URL;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0b0c0e] text-gray-200 min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background glow with brand orange */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#FD6703" />

      <div className="max-w-md w-full mx-auto space-y-6 relative z-10">
        
        {/* Header link */}
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xs text-gray-400 hover:text-[#FD6703] flex items-center gap-1 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span>Back to CodeBraces</span>
          </Link>
          <span className="text-[11px] font-bold text-[#FD6703] bg-[#FD6703]/15 px-2.5 py-0.5 rounded-full border border-[#FD6703]/30">
            Maintenance SaaS Portal
          </span>
        </div>

        {/* Redirecting Card */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[#121419] rounded-3xl border border-white/10 p-8 shadow-2xl space-y-6 text-center"
        >
          
          {/* Logo */}
          <motion.div 
            animate={{ y: [-3, 3] }} 
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
            className="w-16 h-16 rounded-2xl bg-[#181a22] p-2 border border-white/10 mx-auto shadow-lg shadow-[#FD6703]/20 flex items-center justify-center"
          >
            <img 
              src="/logo.png" 
              alt="CodeBraces Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-white">Maintenance System Portal</h2>
            <p className="text-xs text-[#9da4b2]">
              Redirecting you to the live application at <br />
              <span className="font-mono text-[#FD6703] font-semibold">maintenance-pro.netlify.app</span>
            </p>
          </div>

          {/* Animated Spinner & Status */}
          <div className="py-4 space-y-3">
            <div className="w-12 h-12 border-4 border-[#FD6703] border-t-transparent rounded-full animate-spin mx-auto" />
            <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
              Launching portal in 
              <AnimatePresence mode="popLayout">
                <motion.span 
                  key={countdown}
                  initial={{ y: 10, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }} 
                  exit={{ y: -10, opacity: 0 }}
                  className="font-bold text-white font-mono text-sm inline-block"
                >
                  {countdown}
                </motion.span>
              </AnimatePresence>
              s...
            </div>
          </div>

          {/* Direct Button */}
          <a
            href={MAINTENANCE_PORTAL_URL}
            className="w-full py-3.5 rounded-xl font-bold bg-[#FD6703] text-white hover:bg-[#e65c00] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FD6703]/25"
          >
            <span>Proceed to Login Immediately</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="pt-2 border-t border-[#2e333d] flex items-center justify-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4 text-[#34d399]" />
            <span>Secure Society Authentication Gateway</span>
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default PortalLogin;
