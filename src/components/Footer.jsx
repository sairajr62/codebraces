import { Link } from 'react-router-dom';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  QrCode, 
  Layers,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const MAINTENANCE_PORTAL_URL = 'https://maintenance-pro.netlify.app/login';

  return (
    <footer className="bg-[#141619] border-t border-[#2d3038] text-gray-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col with Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#22252a] p-1 border border-[#393e47] flex items-center justify-center shadow-md shadow-[#FD6703]/10 transition-transform group-hover:scale-105">
                <img 
                  src="/logo.png" 
                  alt="CodeBraces Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-baseline">
                <span className="font-extrabold text-2xl tracking-tight text-white">Code</span>
                <span className="font-extrabold text-2xl tracking-tight text-[#FD6703]">Braces</span>
              </div>
            </Link>
            
            <p className="text-sm text-[#9da4b2] max-w-sm leading-relaxed">
              Empowering residential communities and modern businesses with our flagship 
              <strong className="text-white"> Maintenance Management System</strong> alongside tailor-made 
              <strong className="text-white"> Custom Software</strong> and <strong className="text-white">High-Converting Web Platforms</strong>.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22252a] text-[#FD6703] text-xs font-semibold border border-[#393e47]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enterprise Grade Security</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22252a] text-[#34d399] text-xs font-semibold border border-[#393e47]">
                <QrCode className="w-3.5 h-3.5" />
                <span>Instant QR Reconciliation</span>
              </div>
            </div>
          </div>

          {/* Flagship Product */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#FD6703]" />
              Flagship Product
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/maintenance-system" className="hover:text-[#FD6703] transition-colors flex items-center justify-between group">
                  <span>Maintenance System</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#FD6703] transition-colors" />
                </Link>
              </li>
              <li>
                <Link to="/maintenance-system" className="text-gray-400 hover:text-white transition-colors">
                  QR & UPI Auto-Payments
                </Link>
              </li>
              <li>
                <Link to="/maintenance-system" className="text-gray-400 hover:text-white transition-colors">
                  Society Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="/maintenance-system" className="text-gray-400 hover:text-white transition-colors">
                  WhatsApp Dues Reminders
                </Link>
              </li>
              <li>
                <a 
                  href={MAINTENANCE_PORTAL_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FD6703] transition-colors flex items-center gap-1.5 font-semibold"
                >
                  <span>Launch Live Portal</span>
                  <span className="text-[10px] bg-[#FD6703]/20 text-[#FD6703] px-1.5 py-0.5 rounded border border-[#FD6703]/30">Live App</span>
                  <ExternalLink className="w-3 h-3 text-[#FD6703]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#FD6703]" />
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#custom-software" className="hover:text-[#FD6703] transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services#web-development" className="hover:text-[#FD6703] transition-colors">
                  Informational Websites
                </Link>
              </li>
              <li>
                <Link to="/services#ecommerce-stores" className="hover:text-[#FD6703] transition-colors">
                  E-Commerce Storefronts
                </Link>
              </li>
              <li>
                <Link to="/services#maintenance-retainers" className="hover:text-[#FD6703] transition-colors">
                  Web & App Maintenance Retainers
                </Link>
              </li>
              <li>
                <Link to="/services#tech-stack" className="hover:text-[#FD6703] transition-colors">
                  Tech Architecture & APIs
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Company */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm text-[#9da4b2]">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#FD6703] mt-0.5 shrink-0" />
                <a href="mailto:contact@codebraces.com" className="hover:text-white transition-colors">
                  contact@codebraces.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FD6703] mt-0.5 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FD6703] mt-0.5 shrink-0" />
                <span>Mumbai / Pune, Maharashtra, India</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#FD6703] hover:underline"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#252830] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6e7687] gap-4">
          <p>© {new Date().getFullYear()} CodeBraces Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about-us" className="hover:text-gray-400 transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-gray-400 transition-colors">Services</Link>
            <Link to="/contact-us" className="hover:text-gray-400 transition-colors">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
