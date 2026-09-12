import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  ArrowRight, 
  Sparkles, 
  Globe, 
  ShoppingCart, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  ChevronRight,
  Clock,
  ExternalLink,
  Terminal,
  TrendingUp,
  Boxes
} from 'lucide-react';

import Spotlight from '../components/ui/Spotlight';
import TextGenerateEffect from '../components/ui/TextGenerateEffect';
import FlipWords from '../components/ui/FlipWords';
import BorderBeam from '../components/ui/BorderBeam';
import CardSpotlight from '../components/ui/CardSpotlight';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import InfiniteMarquee from '../components/ui/InfiniteMarquee';
import FadeInSection from '../components/ui/FadeInSection';

const Home = () => {
  const navigate = useNavigate();
  const [activeHeroTab, setActiveHeroTab] = useState('maintenance');
  const [selectedProjectType, setSelectedProjectType] = useState('ecommerce');

  const MAINTENANCE_PORTAL_URL = 'https://maintenance-pro.netlify.app/login';

  const marqueeTech = [
    { name: "React 18", cat: "Frontend" },
    { name: "Next.js", cat: "SSR & Web" },
    { name: "Node.js", cat: "Backend" },
    { name: "TypeScript", cat: "Language" },
    { name: "MongoDB", cat: "NoSQL DB" },
    { name: "PostgreSQL", cat: "SQL DB" },
    { name: "Tailwind CSS", cat: "Styling" },
    { name: "UPI Dynamic QR", cat: "Fintech" },
    { name: "Razorpay / Stripe", cat: "Payments" },
    { name: "Docker & AWS", cat: "Cloud" },
    { name: "Python / FastAPI", cat: "Automation" },
  ];

  const estimatorData = {
    maintenance: {
      title: "Society Maintenance System",
      desc: "Turnkey cloud operating system for residential societies with flat-wise QR UPI billing and treasurer controls.",
      timeline: "Instant Deploy (24 - 48 Hours)",
      features: ["Flat-wise dynamic QR codes", "Automated WhatsApp invoices", "Admin dues reconciliation", "Defaulter management", "Society balance sheet export"],
      badge: "Flagship SaaS",
      color: "from-[#FD6703] to-[#ff7e29]"
    },
    informational: {
      title: "Informational & Corporate Website",
      desc: "Fast, elegant business websites built to showcase your brand authority and convert inbound visitors.",
      timeline: "1 - 2 Weeks",
      features: ["Bespoke 21st.dev UI/UX design", "Mobile-first responsive fluid grid", "Technical on-page SEO & Schema", "Sub-second Vite/React speed", "Lead funnels & analytics"],
      badge: "Web Service",
      color: "from-sky-500 to-blue-600"
    },
    ecommerce: {
      title: "E-Commerce Online Store",
      desc: "Full-scale online stores engineered for high conversion rates, frictionless checkout, and instant payment settlement.",
      timeline: "2 - 4 Weeks",
      features: ["Product catalog & smart facet filters", "UPI, Cards, NetBanking, COD checkout", "Shopping cart with abandonment recovery", "Order fulfillment & WhatsApp updates", "Inventory & coupon engine"],
      badge: "Web Service",
      color: "from-emerald-500 to-teal-600"
    },
    custom: {
      title: "Custom Software & Web Application",
      desc: "Tailored web applications, internal operational tools, and SaaS MVPs built around your proprietary business logic.",
      timeline: "3 - 6 Weeks",
      features: ["Role-based access control (RBAC)", "Scalable relational & document schemas", "RESTful & GraphQL microservices", "Interactive admin analytics dashboards", "Cloud CI/CD & zero-downtime deploy"],
      badge: "Engineering",
      color: "from-purple-500 to-indigo-600"
    }
  };

  return (
    <div className="bg-[#0b0c0e] text-gray-200 min-h-screen relative overflow-hidden">
      
      {/* Background Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#FD6703" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-24 z-10">
        <FadeInSection direction="up" delay={0.1} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Shimmer Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-inner text-xs font-semibold text-gray-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FD6703] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FD6703]"></span>
              </span>
              <span className="text-[#FD6703] font-bold">Flagship Product Live</span>
              <span className="text-white/20">|</span>
              <a 
                href={MAINTENANCE_PORTAL_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 font-medium"
              >
                <span>Maintenance System 2.0</span>
                <ExternalLink className="w-3 h-3 text-[#FD6703]" />
              </a>
            </div>

            {/* Display Headline */}
            <TextGenerateEffect words="Engineering Scalable Software & Modern SaaS Platforms" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]" />

            {/* Subheading */}
            <div className="text-base sm:text-xl text-[#9da4b2] max-w-2xl mx-auto leading-relaxed">
              We build and operate <FlipWords words={['Automated', 'Reconciled', 'Audited', 'Transparent']} /> <strong className="text-white">Society Maintenance Systems</strong> alongside bespoke <strong className="text-white">Custom Software</strong> and high-performance <strong className="text-white">Web & E-Commerce Platforms</strong>.
            </div>

            {/* Glowing CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={MAINTENANCE_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold bg-[#FD6703] text-white hover:bg-[#e65c00] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_40px_-8px_rgba(253,103,3,0.5)] hover:scale-105"
              >
                <span>Launch Maintenance Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Layers className="w-4 h-4 text-[#FD6703]" />
                <span>Explore Dev Services</span>
              </Link>
            </div>

            {/* 4 Micro-Metric Pills */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <CardSpotlight className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-white font-mono flex items-center justify-center">
                  <AnimatedCounter target={99.4} decimals={1} suffix="%" />
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">Society Collection Rate</div>
              </CardSpotlight>
              <CardSpotlight className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-[#FD6703] font-mono flex items-center justify-center">
                  <AnimatedCounter target={0} suffix=" mins" />
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">Manual Reconciliation</div>
              </CardSpotlight>
              <CardSpotlight className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-white font-mono flex items-center justify-center">
                  &lt; <AnimatedCounter target={1} suffix="s" />
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">Web Page Speed</div>
              </CardSpotlight>
              <CardSpotlight className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono flex items-center justify-center">
                  <AnimatedCounter target={100} suffix="%" />
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">Digital Audit Trail</div>
              </CardSpotlight>
            </div>

          </div>

          {/* INTERACTIVE HERO SHOWCASE COCKPIT */}
          <div className="mt-14 max-w-5xl mx-auto bg-[#121419]/90 rounded-3xl border border-white/10 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-2xl">
            
            {/* Cockpit Topbar Tabs */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] px-6 py-3 bg-[#0d0f12]/80 gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveHeroTab('maintenance')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                    activeHeroTab === 'maintenance'
                      ? 'bg-[#FD6703] text-white shadow-md shadow-[#FD6703]/25 font-bold'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Maintenance System (Flagship)</span>
                </button>
                <button
                  onClick={() => setActiveHeroTab('software')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                    activeHeroTab === 'software'
                      ? 'bg-[#FD6703] text-white shadow-md shadow-[#FD6703]/25 font-bold'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Custom Architecture</span>
                </button>
                <button
                  onClick={() => setActiveHeroTab('ecommerce')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                    activeHeroTab === 'ecommerce'
                      ? 'bg-[#FD6703] text-white shadow-md shadow-[#FD6703]/25 font-bold'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>E-Commerce Engine</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Interactive Demo</span>
              </div>
            </div>

            {/* Cockpit Content Window */}
            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHeroTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* TAB 1: Maintenance System Demo */}
                  {activeHeroTab === 'maintenance' && (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      
                      {/* Interactive QR Phone Card */}
                      <div className="md:col-span-6 bg-[#16181f] p-6 rounded-2xl border border-white/10 relative overflow-hidden shadow-xl">
                        <div className="flex justify-between items-center text-xs pb-3 border-b border-white/10">
                          <div>
                            <div className="font-bold text-white">Green Meadows CHS</div>
                            <div className="text-[10px] text-gray-400">Wing B • Flat #402</div>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-[#FD6703]/20 text-[#FD6703] font-mono text-[10px] font-bold border border-[#FD6703]/30">
                            September Dues
                          </span>
                        </div>

                        <div className="my-5 flex flex-col items-center justify-center relative">
                          <div className="p-4 bg-white rounded-2xl shadow-2xl relative overflow-hidden">
                            <img src="/qr-code.jpg" alt="UPI QR Code - Flat B-402" className="w-36 h-36 object-contain" />
                            
                              <div className="absolute inset-x-0 h-1 bg-[#FD6703] shadow-[0_0_15px_#FD6703] animate-laser pointer-events-none" />

                          </div>
                          <span className="text-[11px] font-mono text-gray-400 mt-2">UPI: chs.cb@icici</span>
                        </div>

                        <div className="bg-[#0e1014] p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                          <span className="text-gray-400">Total Amount:</span>
                          <span className="text-lg font-black text-[#FD6703] font-mono">₹ 3,500.00</span>
                        </div>

                        <div className="mt-3 flex gap-2">
                          <a
                            href={MAINTENANCE_PORTAL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2.5 rounded-xl font-bold bg-[#FD6703] text-white hover:bg-[#e65c00] transition-all text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-[#FD6703]/20"
                          >
                            <span>Test Live On maintenance-pro</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Feature Breakdown */}
                      <div className="md:col-span-6 space-y-4">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FD6703]">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Zero Manual Accounting</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white leading-tight">
                          Automated Dues Collection, Instant Receipts & Committee Peace of Mind
                        </h3>
                        <p className="text-xs sm:text-sm text-[#9da4b2] leading-relaxed">
                          Every flat gets an intelligent UPI dynamic QR code. When residents pay via Google Pay, PhonePe, or Paytm, the transaction auto-reconciles instantly, generating WhatsApp receipts without treasurer intervention.
                        </p>

                        <div className="space-y-2 pt-2 text-xs">
                          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-center justify-between">
                            <span className="text-gray-300">September Inflow Reconciled:</span>
                            <span className="font-bold text-emerald-400 font-mono">₹ 4,12,500 (98.2%)</span>
                          </div>
                          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-center justify-between">
                            <span className="text-gray-300">WhatsApp Receipt Speed:</span>
                            <span className="font-bold text-white font-mono">&lt; 3 Seconds</span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <Link
                            to="/maintenance-system"
                            className="text-xs font-bold text-[#FD6703] hover:underline flex items-center gap-1"
                          >
                            <span>Explore Complete Maintenance System Architecture</span>
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* TAB 2: Custom Software Architecture Terminal */}
                  {activeHeroTab === 'software' && (
                    <div className="space-y-4">
                      <div className="bg-[#0b0c0e] rounded-2xl border border-white/10 p-5 font-mono text-xs text-gray-300 space-y-3">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-gray-500">
                          <span className="flex items-center gap-1.5 text-white">
                            <Terminal className="w-3.5 h-3.5 text-[#FD6703]" />
                            <span>codebraces-core // api.society.ts</span>
                          </span>
                          <span className="text-emerald-400 text-[11px]">HTTP 200 OK • 18ms</span>
                        </div>

                        <pre className="text-gray-400 overflow-x-auto">
{`// Dynamic Flat QR Settlement Pipeline
export async function reconcileFlatSettlement(txHash: string) {
  const verified = await upiGateway.verifyCallback(txHash);
  if (!verified.isValid) throw new SettlementError("HASH_MISMATCH");

  const ledger = await db.flats.update({
    where: { unitId: verified.flatNumber },
    data: { 
      duesStatus: 'PAID',
      paidAt: new Date(),
      receiptNumber: generateGstReceipt()
    }
  });

  await whatsappBot.dispatchReceiptPdf(ledger.residentPhone, ledger.receiptUrl);
  return { status: 200, balance: ledger.societyReserveBalance };
}`}
                        </pre>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="text-xs text-gray-400">
                          Production Stack: <strong className="text-white font-mono">TypeScript • Fastify • MongoDB • Redis</strong>
                        </div>
                        <Link
                          to="/services#custom-software"
                          className="px-4 py-2 rounded-full font-bold bg-[#FD6703] text-white text-xs hover:bg-[#e65c00] flex items-center gap-1"
                        >
                          <span>Custom Software Capabilities</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: E-Commerce Engine */}
                  {activeHeroTab === 'ecommerce' && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-2">
                        <ShoppingCart className="w-8 h-8 text-[#FD6703] mx-auto" />
                        <div className="text-xl font-bold text-white">Frictionless Cart</div>
                        <p className="text-xs text-gray-400">1-click checkout flows with direct UPI Intent & Card tokens.</p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-2">
                        <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto" />
                        <div className="text-xl font-bold text-white">+34% Conversion</div>
                        <p className="text-xs text-gray-400">Optimized for mobile shoppers with zero checkout friction.</p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-2">
                        <Boxes className="w-8 h-8 text-sky-400 mx-auto" />
                        <div className="text-xl font-bold text-white">Sync & Dispatch</div>
                        <p className="text-xs text-gray-400">Automatic Shiprocket order generation and WhatsApp tracking.</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </FadeInSection>
      </section>

      {/* INFINITE MARQUEE TECH TICKER */}
      <section className="py-8 border-y border-white/[0.07] bg-white/[0.01] overflow-hidden">
        <InfiniteMarquee speed={35} pauseOnHover className="flex items-center gap-8">
          {marqueeTech.map((tech, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] shrink-0 mx-4"
            >
              <div className="w-2 h-2 rounded-full bg-[#FD6703]" />
              <span className="text-sm font-semibold text-white">{tech.name}</span>
              <span className="text-[10px] font-mono text-gray-400 uppercase">{tech.cat}</span>
            </div>
          ))}
        </InfiniteMarquee>
      </section>

      {/* 21ST.DEV SIGNATURE BENTO GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeInSection direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#FD6703] text-xs font-bold uppercase tracking-wider">Engineered For Performance</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Comprehensive Digital Capabilities
            </h2>
            <p className="text-sm text-[#9da4b2]">
              Discover how our flagship SaaS platform and custom development services scale your digital operations.
            </p>
          </div>
        </FadeInSection>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento 1 (Large 2 Cols): Flagship Maintenance System */}
          <FadeInSection direction="up" delay={0.0} className="md:col-span-2">
            <div className="h-full bg-[#121419]/80 border border-white/10 rounded-3xl p-8 hover:border-[#FD6703]/50 transition-all duration-300 relative overflow-hidden group shadow-xl">
              <BorderBeam size={200} duration={12} colorFrom="#FD6703" colorTo="#ff8838" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FD6703]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#FD6703]/15 transition-all" />
              
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FD6703]/15 text-[#FD6703] text-xs font-bold uppercase border border-[#FD6703]/30">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Flagship Proprietary SaaS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Housing Society Maintenance System
                </h3>
                <p className="text-sm text-[#9da4b2] max-w-xl leading-relaxed">
                  Replaces manual society collection registers with automated flat-wise dynamic QR codes, real-time UPI reconciliation, WhatsApp receipts, and treasurer audit accounting.
                </p>

                {/* Live Interactive Ticker */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-xs text-gray-400">Auto Reconciled</div>
                    <div className="text-2xl font-black text-white font-mono mt-1 flex items-center">
                      ₹ <AnimatedCounter target={4.12} decimals={2} suffix=" Lakh" />
                    </div>
                    <div className="text-[10px] text-emerald-400 mt-1">98.2% Collection Rate</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-xs text-gray-400">Defaulter Alerts</div>
                    <div className="text-2xl font-black text-[#FD6703] font-mono mt-1">Automated</div>
                    <div className="text-[10px] text-gray-400 mt-1">WhatsApp & SMS Invoices</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-xs text-gray-400">Auditor Export</div>
                    <div className="text-2xl font-black text-white font-mono mt-1">1-Click</div>
                    <div className="text-[10px] text-gray-400 mt-1">Balance Sheet & Ledgers</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={MAINTENANCE_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full font-bold bg-[#FD6703] text-white hover:bg-[#e65c00] transition-all text-xs flex items-center gap-1.5 shadow-lg shadow-[#FD6703]/20"
                  >
                    <span>Launch Live Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    to="/maintenance-system"
                    className="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1"
                  >
                    <span>View Product Details & Calculator</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Bento 2 (1 Col): Custom Software Engineering */}
          <FadeInSection direction="up" delay={0.1}>
            <div className="h-full bg-[#121419]/80 border border-white/10 rounded-3xl p-8 hover:border-[#FD6703]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Bespoke Engineering</span>
                <h3 className="text-2xl font-bold text-white">Custom Software</h3>
                <p className="text-xs sm:text-sm text-[#9da4b2] leading-relaxed">
                  Enterprise control panels, internal tools, and specialized SaaS architectures built with scalable databases and microservices.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/services#custom-software"
                  className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1"
                >
                  <span>Explore Custom Software</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </FadeInSection>

          {/* Bento 3 (1 Col): Informational Websites */}
          <FadeInSection direction="up" delay={0.15}>
            <div className="h-full bg-[#121419]/80 border border-white/10 rounded-3xl p-8 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Brand Authority</span>
                <h3 className="text-2xl font-bold text-white">Informational Sites</h3>
                <p className="text-xs sm:text-sm text-[#9da4b2] leading-relaxed">
                  Ultra-fast Vite/React corporate websites designed to establish market leadership, rank on Google, and capture qualified inbound inquiries.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/services#web-development"
                  className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-1"
                >
                  <span>Explore Corporate Sites</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </FadeInSection>

          {/* Bento 4 (Large 2 Cols): E-Commerce Stores */}
          <FadeInSection direction="up" delay={0.2} className="md:col-span-2">
            <div className="h-full bg-[#121419]/80 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-300 relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold uppercase border border-emerald-500/30">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>High-Converting Digital Retail</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  E-Commerce Stores & Online Marketplaces
                </h3>
                <p className="text-sm text-[#9da4b2] max-w-xl leading-relaxed">
                  From direct-to-consumer storefronts to multi-thousand SKU catalogs. Includes seamless UPI & Card checkout, real-time inventory tracking, and WhatsApp order fulfillment.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
                    <div className="font-bold text-white">UPI & Cards</div>
                    <div className="text-gray-400 text-[11px] mt-0.5">Instant Checkout</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
                    <div className="font-bold text-white">Live Inventory</div>
                    <div className="text-gray-400 text-[11px] mt-0.5">Automated Sync</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
                    <div className="font-bold text-white">Fast Filters</div>
                    <div className="text-gray-400 text-[11px] mt-0.5">Sub-second Facets</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
                    <div className="font-bold text-white">Abandoned Cart</div>
                    <div className="text-gray-400 text-[11px] mt-0.5">WhatsApp Nudge</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/services#ecommerce-stores"
                    className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>Build an E-Commerce Storefront</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>

        </div>

      </section>

      {/* INTERACTIVE ESTIMATOR */}
      <section className="py-20 border-t border-white/[0.08] bg-[#0d0e12]">
        <FadeInSection direction="up" delay={0.1} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[#FD6703] text-xs font-bold uppercase tracking-wider">Plan Your Timeline</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Interactive Scope & Velocity Estimator</h2>
            <p className="text-xs sm:text-sm text-[#9da4b2]">
              Select what your business requires to evaluate deliverables and build duration.
            </p>
          </div>

          <div className="bg-[#121419] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl">
            
            {/* Project Type Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { key: 'maintenance', label: 'Maintenance System', icon: Building2 },
                { key: 'informational', label: 'Corporate Website', icon: Globe },
                { key: 'ecommerce', label: 'E-Commerce Store', icon: ShoppingCart },
                { key: 'custom', label: 'Custom Web App', icon: Cpu }
              ].map(tab => {
                const IconComponent = tab.icon;
                const isSelected = selectedProjectType === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setSelectedProjectType(tab.key)}
                    className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col gap-2 ${
                      isSelected
                        ? 'bg-[#FD6703] text-white border-[#FD6703] shadow-lg shadow-[#FD6703]/25 font-bold'
                        : 'bg-white/[0.02] text-gray-300 border-white/10 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-[#FD6703]'}`} />
                    <span className="text-xs font-semibold">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Estimator Details Card */}
            <AnimatePresence mode="wait">
              {estimatorData[selectedProjectType] && (
                <motion.div
                  key={selectedProjectType}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0b0c0e] rounded-2xl border border-white/10 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] px-3 py-0.5 rounded-full font-bold bg-[#FD6703]/20 text-[#FD6703] border border-[#FD6703]/30">
                        {estimatorData[selectedProjectType].badge}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-[#FD6703]" />
                        Timeline: <strong className="text-white">{estimatorData[selectedProjectType].timeline}</strong>
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {estimatorData[selectedProjectType].title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#9da4b2] leading-relaxed">
                      {estimatorData[selectedProjectType].desc}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider block">Standard Deliverables:</span>
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

                  <div className="lg:col-span-4 bg-[#14161c] p-6 rounded-2xl border border-white/10 text-center space-y-4">
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Ready to Build?</span>
                    <div className="text-lg font-bold text-white">Get a Custom Proposal</div>
                    <p className="text-xs text-[#9da4b2]">
                      Receive an architectural scope document and budget options within 4 hours.
                    </p>
                    <button
                      onClick={() => navigate('/contact-us')}
                      className="w-full py-3 rounded-full font-bold bg-[#FD6703] text-white hover:bg-[#e65c00] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FD6703]/25 text-xs"
                    >
                      <span>Request Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </FadeInSection>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection direction="up" delay={0.1}>
          <div className="bg-gradient-to-br from-[#1b1e27] via-[#121419] to-[#0d0e12] rounded-3xl border border-white/10 p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <Spotlight className="-top-10 left-0 md:left-20" fill="#FD6703" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FD6703]/15 rounded-full blur-[140px] pointer-events-none" />
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight relative z-10">
              Build Something Extraordinary With <span className="text-[#FD6703]">CodeBraces</span>
            </h2>
            <p className="text-sm sm:text-base font-medium max-w-2xl mx-auto text-[#9da4b2] relative z-10">
              Whether you are modernizing your residential society or scaling high-growth custom software, our engineering team is ready.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
              <button
                onClick={() => navigate('/contact-us')}
                className="px-8 py-3.5 rounded-full font-bold text-white transition-all shadow-xl shadow-[#FD6703]/25 text-sm animate-shimmer bg-[linear-gradient(110deg,#FD6703,45%,#ffaa6b,55%,#FD6703)] bg-[length:200%_100%] hover:scale-105"
              >
                Start Your Project Consultation
              </button>
              <a
                href={MAINTENANCE_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full font-semibold bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/10 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span>Launch Maintenance System</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FD6703]" />
              </a>
            </div>
          </div>
        </FadeInSection>
      </section>

    </div>
  );
};

export default Home;
