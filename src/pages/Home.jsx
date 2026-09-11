import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  QrCode, 
  Sparkles, 
  Globe, 
  ShoppingCart, 
  Cpu, 
  CheckCircle2, 
  Smartphone, 
  Layers, 
  Zap, 
  ChevronRight,
  Star,
  Users,
  Clock,
  Send,
  Wrench,
  ShieldCheck
} from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  // Project Estimator State
  const [selectedProjectType, setSelectedProjectType] = useState('ecommerce');

  const estimatorData = {
    maintenance: {
      title: "Society Maintenance System",
      desc: "Cloud platform with Flat QR UPI payments, WhatsApp billing, and treasurer ledger.",
      timeline: "Instant Setup (24 - 48 Hours)",
      features: ["Flat-wise dynamic QR codes", "Automated WhatsApp invoices", "Admin dues reconciliation", "Defaulter management", "Society balance sheet export"],
      badge: "Flagship SaaS"
    },
    informational: {
      title: "Informational & Corporate Website",
      desc: "Fast, elegant business websites built to showcase your brand and generate qualified inbound leads.",
      timeline: "1 - 2 Weeks",
      features: ["Custom bespoke UI/UX design", "Mobile-responsive layouts", "SEO optimization & meta tags", "Fast loading Vite/React architecture", "Contact forms & Google Analytics"],
      badge: "Web Service"
    },
    ecommerce: {
      title: "E-Commerce Online Store",
      desc: "Full-scale online stores engineered for high conversion rates, seamless checkout, and sales.",
      timeline: "2 - 4 Weeks",
      features: ["Product catalog & smart filtering", "Secure payment gateways (UPI, Cards, NetBanking)", "Shopping cart & checkout flow", "Order management & notifications", "Inventory & promo coupon system"],
      badge: "Web Service"
    },
    custom: {
      title: "Custom Software & Web Application",
      desc: "Tailored web applications, internal operational tools, and SaaS MVPs with custom databases.",
      timeline: "3 - 6 Weeks",
      features: ["Role-based authentication & RBAC", "Complex database modeling (Mongo/Postgres)", "REST/GraphQL API integrations", "Interactive admin dashboards & analytics", "Cloud deployment & automated CI/CD"],
      badge: "Engineering"
    }
  };

  return (
    <div className="bg-[#191b1f] text-gray-200 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 overflow-hidden border-b border-[#2d3038]">
        {/* Glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FD6703]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Pill Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#262930] border border-[#FD6703]/40 text-xs font-bold shadow-lg shadow-[#FD6703]/5">
              <span className="w-2 h-2 rounded-full bg-[#FD6703] animate-pulse" />
              <span className="text-[#FD6703] uppercase tracking-wider">Meet Our Flagship Product</span>
              <span className="text-gray-400">|</span>
              <Link to="/maintenance-system" className="text-white hover:text-[#FD6703] transition-colors flex items-center gap-1">
                <span>Society Maintenance System</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Building Tomorrow's Software & <span className="text-[#FD6703]">SaaS Products</span>
            </h1>

            <p className="text-base sm:text-xl text-[#9da4b2] max-w-2xl mx-auto leading-relaxed">
              We engineer our flagship <strong>Housing Society Maintenance Operating System</strong> and provide high-impact 
              <strong> Custom Software</strong> and <strong>Web Development</strong> — from lightning-fast informational websites to high-volume e-commerce stores.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <Link
                to="/maintenance-system"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-[#FD6703] text-[#191b1f] hover:bg-[#e65c00] transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-[#FD6703]/25 hover:scale-105"
              >
                <Building2 className="w-5 h-5 text-[#191b1f]" />
                <span>Explore Maintenance System</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-[#262930] hover:bg-[#323640] text-white border border-[#3e4450] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4 text-[#FD6703]" />
                <span>View Web & Software Services</span>
              </Link>
            </div>

            {/* Quick credibility stats */}
            <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="p-4 rounded-2xl bg-[#202328]/80 border border-[#2f343e] backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-white">99.4%</div>
                <div className="text-xs text-[#9da4b2] mt-1 font-medium">Society Dues Cleared</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#202328]/80 border border-[#2f343e] backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-[#FD6703]">30+</div>
                <div className="text-xs text-[#9da4b2] mt-1 font-medium">Delivered Projects</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#202328]/80 border border-[#2f343e] backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-white">24/7</div>
                <div className="text-xs text-[#9da4b2] mt-1 font-medium">Automated WhatsApp Alerts</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#202328]/80 border border-[#2f343e] backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">100%</div>
                <div className="text-xs text-[#9da4b2] mt-1 font-medium">Transparent Delivery</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FLAGSHIP PRODUCT HIGHLIGHT SECTION */}
      <section className="py-20 bg-[#16181b] border-b border-[#2d3038] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Column: Product Narrative */}
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FD6703]/15 text-[#FD6703] border border-[#FD6703]/30 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CodeBraces Flagship Innovation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Society Maintenance Management, <span className="text-[#FD6703]">Reimagined</span>
              </h2>

              <p className="text-base text-[#9da4b2] leading-relaxed">
                Housing societies and residential complexes struggle every month with delayed payments, lost receipts, and tedious UPI matching. 
                Our flagship <strong>CodeBraces Maintenance System</strong> replaces manual registers with automated flat-wise QR codes, WhatsApp invoicing, and real-time committee ledger balancing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <QrCode className="w-5 h-5 text-[#FD6703] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Dynamic UPI QR Codes</h4>
                    <p className="text-xs text-[#9da4b2]">Pre-tagged with flat numbers for instantaneous zero-error reconciliation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <Send className="w-5 h-5 text-[#38bdf8] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">WhatsApp Delivery</h4>
                    <p className="text-xs text-[#9da4b2]">Automatic reminders and PDF tax receipts delivered right to resident smartphones.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <ShieldCheck className="w-5 h-5 text-[#34d399] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Treasurer Control Panel</h4>
                    <p className="text-xs text-[#9da4b2]">Live tracking of defaulters, expenses, sinking funds, and audit balances.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <Wrench className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Facility Ticket System</h4>
                    <p className="text-xs text-[#9da4b2]">Track lift repairs, water tankers, security, and resident complaints.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/maintenance-system"
                  className="px-6 py-3 rounded-xl font-bold bg-[#FD6703] text-black hover:bg-[#e65c00] transition-all flex items-center gap-2 shadow-lg shadow-[#FD6703]/20"
                >
                  <span>Explore Product Features & Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/login"
                  className="px-6 py-3 rounded-xl font-semibold bg-[#262930] hover:bg-[#30353f] text-white border border-[#3e4450] transition-all flex items-center gap-2"
                >
                  <Smartphone className="w-4 h-4 text-[#FD6703]" />
                  <span>Try Demo Login</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Live Interactive Preview Card */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-[#202328] rounded-3xl border border-[#393e47] p-6 shadow-2xl relative overflow-hidden">
                
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#30353f]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs text-gray-400 font-mono ml-2">codebraces.app/portal</span>
                  </div>
                  <span className="text-[11px] font-semibold bg-[#FD6703]/20 text-[#FD6703] px-2.5 py-0.5 rounded-full">
                    Live Society Preview
                  </span>
                </div>

                {/* Simulated UI Content */}
                <div className="space-y-4">
                  {/* Top Society Banner */}
                  <div className="bg-[#18191d] p-4 rounded-xl border border-[#2e333d] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Grand View Towers CHS</div>
                      <div className="text-xs text-gray-400">Wing B • Flat #402 • Rajesh Sharma</div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 uppercase">Status</span>
                      <div className="text-xs font-bold text-amber-400">Bill Generated</div>
                    </div>
                  </div>

                  {/* QR Box & Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-[#191b1f] p-4 rounded-xl border border-[#2e333d]">
                    <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow">
                      <QrCode className="w-28 h-28 text-black" />
                      <span className="text-[10px] font-mono text-gray-700 font-semibold mt-1">UPI: chs.cb@icici</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between text-gray-400">
                        <span>Maintenance Fee:</span>
                        <span className="text-white font-medium">₹ 2,800</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Sinking Fund:</span>
                        <span className="text-white font-medium">₹ 500</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Water & Common Power:</span>
                        <span className="text-white font-medium">₹ 200</span>
                      </div>
                      <div className="pt-2 border-t border-[#343942] flex justify-between font-bold">
                        <span className="text-white">Total Payable:</span>
                        <span className="text-[#FD6703] text-sm">₹ 3,500.00</span>
                      </div>
                    </div>
                  </div>

                  {/* Committee KPI Strip */}
                  <div className="p-3.5 rounded-xl bg-[#252932] border border-[#353b47] flex items-center justify-between text-xs">
                    <div>
                      <span className="text-gray-400 block">September Collections</span>
                      <span className="text-white font-bold text-sm">98.2% Done (₹ 4,12,500)</span>
                    </div>
                    <Link
                      to="/maintenance-system"
                      className="text-[#FD6703] hover:underline font-bold text-xs flex items-center gap-1"
                    >
                      <span>View Full MMS Tour</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CORE SERVICES SECTION (FROM INFO SITES TO E-COM TO CUSTOM SOFTWARE) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#262930] text-[#FD6703] border border-[#FD6703]/30 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Digital Engineering & Web Development</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tailored Development For Every Growth Stage
          </h2>

          <p className="text-base text-[#9da4b2] leading-relaxed">
            Beyond our flagship SaaS product, we deliver end-to-end digital solutions: from fast informational corporate websites that convert visitors to enterprise e-commerce platforms and custom software architectures.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Custom Software Development */}
          <div className="bg-[#202328] rounded-2xl border border-[#32363f] p-8 hover:border-[#FD6703]/50 transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FD6703]/15 text-[#FD6703] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FD6703]">Enterprise Solutions</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#FD6703] transition-colors">
                Custom Software Development
              </h3>
              <p className="text-sm text-[#9da4b2] leading-relaxed">
                Bespoke enterprise applications, operational control panels, workflow automations, and scalable SaaS platforms built specifically around your business logic.
              </p>
              <ul className="space-y-2.5 text-xs text-gray-300 pt-2 border-t border-[#2e333d]">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FD6703]" /> Enterprise Dashboards & Portals</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FD6703]" /> REST & GraphQL Cloud APIs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FD6703]" /> Secure Multi-Role Permissions (RBAC)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FD6703]" /> Scalable MongoDB & PostgreSQL Schemas</li>
              </ul>
            </div>

            <div className="pt-6">
              <Link
                to="/services#custom-software"
                className="text-sm font-bold text-[#FD6703] hover:underline flex items-center gap-1.5"
              >
                <span>Explore Custom Software</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Informational & Corporate Websites */}
          <div className="bg-[#202328] rounded-2xl border border-[#32363f] p-8 hover:border-[#FD6703]/50 transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/15 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Brand Presence</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                Informational & Corporate Websites
              </h3>
              <p className="text-sm text-[#9da4b2] leading-relaxed">
                High-performance corporate websites, portfolios, and agency landing pages designed to reflect your authority, captivate visitors, and convert traffic into qualified inquiries.
              </p>
              <ul className="space-y-2.5 text-xs text-gray-300 pt-2 border-t border-[#2e333d]">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Ultra-Fast Vite & React Architectures</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Fully Responsive Mobile-First Design</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Technical SEO & Structured Data</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Inbound Lead Generation Forms</li>
              </ul>
            </div>

            <div className="pt-6">
              <Link
                to="/services#web-development"
                className="text-sm font-bold text-sky-400 hover:underline flex items-center gap-1.5"
              >
                <span>Explore Informational Sites</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: E-Commerce Stores & Online Shops */}
          <div className="bg-[#202328] rounded-2xl border border-[#32363f] p-8 hover:border-[#FD6703]/50 transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Online Retail</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                E-Commerce Stores & Marketplaces
              </h3>
              <p className="text-sm text-[#9da4b2] leading-relaxed">
                Turn visitors into repeat buyers. We build high-converting storefronts with frictionless shopping carts, multi-channel payment gateways, and intuitive inventory backends.
              </p>
              <ul className="space-y-2.5 text-xs text-gray-300 pt-2 border-t border-[#2e333d]">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> UPI, Credit Cards, NetBanking, COD</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Dynamic Product Catalogs & Filters</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Automated Cart Abandonment Recovery</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Order Tracking & WhatsApp Status</li>
              </ul>
            </div>

            <div className="pt-6">
              <Link
                to="/services#ecommerce-stores"
                className="text-sm font-bold text-emerald-400 hover:underline flex items-center gap-1.5"
              >
                <span>Explore E-Commerce Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </section>

      {/* INTERACTIVE ESTIMATOR & SCOPE BUILDER */}
      <section className="py-20 bg-[#16181b] border-y border-[#2d3038]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[#FD6703] text-xs uppercase font-bold tracking-wider">Plan Your Project</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Interactive Scope & Timeline Estimator</h2>
            <p className="text-sm text-[#9da4b2]">
              Select what you are looking to build to view standard deliverables and estimated delivery velocity.
            </p>
          </div>

          <div className="bg-[#202328] rounded-3xl border border-[#393e47] p-6 sm:p-10 shadow-2xl">
            
            {/* Project Type Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { key: 'maintenance', label: 'Maintenance System', icon: Building2 },
                { key: 'informational', label: 'Info / Corporate Site', icon: Globe },
                { key: 'ecommerce', label: 'E-Commerce Store', icon: ShoppingCart },
                { key: 'custom', label: 'Custom Software App', icon: Cpu }
              ].map(tab => {
                const IconComponent = tab.icon;
                const isSelected = selectedProjectType === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setSelectedProjectType(tab.key)}
                    className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col gap-2 ${
                      isSelected
                        ? 'bg-[#FD6703] text-black border-[#FD6703] shadow-lg font-bold'
                        : 'bg-[#18191d] text-gray-300 border-[#2e333d] hover:border-gray-500 hover:text-white'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${isSelected ? 'text-black' : 'text-[#FD6703]'}`} />
                    <span className="text-sm font-semibold">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Estimator Details Card */}
            {estimatorData[selectedProjectType] && (
              <div className="bg-[#18191d] rounded-2xl border border-[#2e333d] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-3 py-1 rounded-full font-bold bg-[#FD6703]/20 text-[#FD6703] border border-[#FD6703]/30">
                      {estimatorData[selectedProjectType].badge}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#FD6703]" />
                      Estimated Timeline: <strong className="text-white">{estimatorData[selectedProjectType].timeline}</strong>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {estimatorData[selectedProjectType].title}
                  </h3>

                  <p className="text-sm text-[#9da4b2] leading-relaxed">
                    {estimatorData[selectedProjectType].desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">Key Included Deliverables:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {estimatorData[selectedProjectType].features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-[#FD6703] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-[#202328] p-6 rounded-xl border border-[#32363f] text-center space-y-4">
                  <span className="text-xs text-gray-400 uppercase tracking-wider block">Get Exact Specifications</span>
                  <div className="text-xl font-bold text-white">Ready to proceed?</div>
                  <p className="text-xs text-[#9da4b2]">
                    Receive a comprehensive proposal and architectural breakdown tailored to your budget.
                  </p>
                  <button
                    onClick={() => navigate('/contact-us')}
                    className="w-full py-3 rounded-xl font-bold bg-[#FD6703] text-black hover:bg-[#e65c00] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FD6703]/20"
                  >
                    <span>Request Detailed Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* WHY CHOOSE CODEBRACES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-[#FD6703] text-xs uppercase font-bold tracking-wider">Engineering Rigor</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Why Forward-Thinking Businesses & Societies Choose CodeBraces
            </h2>
            <p className="text-sm text-[#9da4b2] leading-relaxed">
              We operate differently from typical agencies. Because we actively build, deploy, and maintain our own proprietary SaaS platform (the Maintenance System), our custom software and web development services benefit from true production-grade resilience.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d] flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FD6703]/15 text-[#FD6703] flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Lightning Velocity & Clean Code</h4>
                  <p className="text-xs text-[#9da4b2] mt-1">We utilize modern stacks (Vite, React, Tailwind, Node.js) ensuring sub-second load times and easily maintainable architectures.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d] flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FD6703]/15 text-[#FD6703] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Security & Audit Compliance</h4>
                  <p className="text-xs text-[#9da4b2] mt-1">From cryptographic hash checks on society transactions to PCI-compliant e-commerce checkouts, your data remains impenetrable.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d] flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FD6703]/15 text-[#FD6703] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Direct Engineer Collaboration</h4>
                  <p className="text-xs text-[#9da4b2] mt-1">No middlemen or non-technical account managers. You work directly with the software engineers writing your code.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Testimonials / Trust Elements */}
          <div className="space-y-6">
            <div className="bg-[#202328] p-6 rounded-2xl border border-[#393e47] space-y-3">
              <div className="flex text-[#FD6703] gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-gray-300 italic leading-relaxed">
                "CodeBraces transformed our 180-flat society's maintenance collection. Previously, committee members spent 3 weekends every month chasing cheques and reconciling UPI screenshots. Now, residents scan their flat QR, payments reflect immediately, and our collection rate touched 99%."
              </p>
              <div className="pt-2 border-t border-[#2e333d] flex items-center justify-between text-xs">
                <span className="font-bold text-white">Praveen Nair</span>
                <span className="text-gray-400">Treasurer, Royal Palm Residency</span>
              </div>
            </div>

            <div className="bg-[#202328] p-6 rounded-2xl border border-[#393e47] space-y-3">
              <div className="flex text-[#FD6703] gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-gray-300 italic leading-relaxed">
                "We engaged CodeBraces to construct our multi-category e-commerce storefront. The checkout is buttery smooth, mobile conversion spiked by 34%, and their custom inventory tracking dashboard saves our fulfillment team hours every morning."
              </p>
              <div className="pt-2 border-t border-[#2e333d] flex items-center justify-between text-xs">
                <span className="font-bold text-white">Ananya K.</span>
                <span className="text-gray-400">Founder, Aura Living Goods</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GLOBAL FAQ */}
      <section className="py-20 bg-[#16181b] border-t border-[#2d3038]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FD6703] text-xs uppercase font-bold tracking-wider">Got Questions?</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-[#202328] border border-[#2e333d]">
              <h4 className="text-base font-semibold text-white">Can CodeBraces build both custom software and informational websites?</h4>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                Yes! We cater to projects across all complexities — from sleek 5-page informational business websites to custom multi-tenant SaaS systems, e-commerce storefronts, and our flagship Society Maintenance System.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#202328] border border-[#2e333d]">
              <h4 className="text-base font-semibold text-white">How do we get started with the Maintenance System for our building?</h4>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                You can test the live demo right now on our Portal Login page or schedule a 15-minute onboarding session with our team. We handle all initial flat data imports from your existing spreadsheets so your committee is live within 48 hours.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#202328] border border-[#2e333d]">
              <h4 className="text-base font-semibold text-white">Do you offer post-launch maintenance retainers for websites & apps?</h4>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                Absolutely. We provide ongoing support plans including server monitoring, automated daily backups, security patching, and monthly design/feature additions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-r from-[#FD6703] via-[#e65c00] to-[#ff7e29] text-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Ready to Build With CodeBraces?
          </h2>
          <p className="text-base sm:text-lg font-semibold max-w-2xl mx-auto text-black/85">
            Whether you want to automate your society's maintenance billing or construct high-impact web and e-commerce applications, we're ready to engineer it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-[#191b1f] text-white hover:bg-black transition-all shadow-xl"
            >
              Get a Free Project Estimate
            </Link>
            <Link
              to="/maintenance-system"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white text-black hover:bg-gray-100 transition-all shadow-lg"
            >
              Learn More About Maintenance System
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;