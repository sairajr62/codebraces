import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  QrCode, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Users, 
  Send, 
  FileText, 
  Wrench, 
  Smartphone, 
  Sparkles, 
  Check, 
  Zap,
  ExternalLink,
  Calculator
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Spotlight from '../components/ui/Spotlight';
import TextGenerateEffect from '../components/ui/TextGenerateEffect';
import BorderBeam from '../components/ui/BorderBeam';
import CardSpotlight from '../components/ui/CardSpotlight';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import FadeInSection from '../components/ui/FadeInSection';

const MaintenanceSystem = () => {
  const navigate = useNavigate();
  const [activeDemoTab, setActiveDemoTab] = useState('resident');
  const [paymentStatus, setPaymentStatus] = useState('pending'); // pending, paying, paid
  const [selectedFlat] = useState('B-402');
  const [flatCount, setFlatCount] = useState(120);
  const [monthlyDues, setMonthlyDues] = useState(3500);

  const MAINTENANCE_PORTAL_URL = 'https://maintenance-pro.netlify.app/login';

  const simulatePayment = () => {
    setPaymentStatus('paying');
    setTimeout(() => {
      setPaymentStatus('paid');
    }, 1200);
  };

  const resetPayment = () => {
    setPaymentStatus('pending');
  };

  const totalMonthlyCollection = flatCount * monthlyDues;
  const hoursSaved = Math.round(flatCount * 0.35);

  const societyModules = [
    {
      icon: <QrCode className="w-6 h-6 text-[#FD6703]" />,
      title: "Flat-Wise Dynamic QR Payments",
      description: "Each flat unit is allocated a unique UPI QR code string. Bank callbacks auto-reconcile dues in real time with 0 manual spreadsheet matching."
    },
    {
      icon: <Send className="w-6 h-6 text-sky-400" />,
      title: "Automated WhatsApp & SMS Invoices",
      description: "Automated monthly invoice dispatch, gentle dues nudges, and instant digital GST receipts sent straight to resident smartphones."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Committee & Resident Portals",
      description: "Dedicated interfaces for residents to view payment ledgers, and for treasurers to monitor collection rates and account balances."
    },
    {
      icon: <FileText className="w-6 h-6 text-emerald-400" />,
      title: "Auditor-Ready Financial Ledgers",
      description: "One-click export of society balance sheets, expense ledgers, vendor payouts, and defaulter histories in PDF/Excel."
    },
    {
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
      title: "Facility & Complaint Ticketing",
      description: "Track lift maintenance, generators, water tankers, and plumbing repairs with vendor assignments and digital sign-offs."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose-400" />,
      title: "Multi-Wing Role Permissions",
      description: "Granular access roles for Secretary, Treasurer, Chairman, Security, and Residents with full audit trails."
    }
  ];

  return (
    <div className="bg-[#0b0c0e] text-gray-200 min-h-screen relative overflow-hidden">
      
      {/* Background Lights & Grids */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FD6703]/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 z-10">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-5">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#FD6703]/40 text-[#FD6703] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Flagship SaaS Product</span>
              </div>

              <div className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
                <TextGenerateEffect words="Housing Society Maintenance, Fully Automated." />
              </div>

              <p className="text-base sm:text-lg text-[#9da4b2] leading-relaxed max-w-2xl mx-auto">
                Eliminate manual cheques, cash collections, and messy Excel registers. Our platform delivers flat-wise dynamic QR payments, instant WhatsApp receipts, and treasurer audit accounting.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
                <a
                  href={MAINTENANCE_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold bg-[#FD6703] text-white hover:bg-[#e65c00] transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(253,103,3,0.5)] shimmer-btn"
                >
                  <span>Launch Live Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                
                <button
                  onClick={() => navigate('/contact-us')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                >
                  <span>Schedule Society Presentation</span>
                </button>
              </div>

            </div>
          </div>
        </FadeInSection>
      </section>

      {/* INTERACTIVE SIMULATOR */}
      <section className="py-16 relative z-10">
        <FadeInSection>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="bg-[#121419]/90 rounded-3xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Simulator Header Tabs */}
              <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] bg-[#0c0e12]/80 px-6 py-4 gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveDemoTab('resident')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                      activeDemoTab === 'resident'
                        ? 'bg-[#FD6703] text-white shadow-md font-bold'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Resident Experience</span>
                  </button>
                  <button
                    onClick={() => setActiveDemoTab('admin')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                      activeDemoTab === 'admin'
                        ? 'bg-[#FD6703] text-white shadow-md font-bold'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Admin / Committee Dashboard</span>
                  </button>
                </div>

                <a
                  href={MAINTENANCE_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FD6703] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Launch maintenance-pro.netlify.app</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <AnimatePresence mode="wait">
                {activeDemoTab === 'resident' && (
                  <motion.div 
                    key="resident"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  >
                    
                    {/* Simulated QR Box */}
                    <div className="bg-[#16181f] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-4 shadow-xl overflow-hidden relative">
                      <div className="w-full flex justify-between items-center text-xs pb-3 border-b border-white/10">
                        <span className="font-semibold text-white">Green Meadows CHS</span>
                        <span className="bg-[#FD6703]/20 text-[#FD6703] px-2 py-0.5 rounded font-mono font-bold">Flat #{selectedFlat}</span>
                      </div>

                      <AnimatePresence mode="wait">
                        {paymentStatus === 'pending' && (
                          <motion.div 
                            key="pending"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full space-y-4 flex flex-col items-center"
                          >
                            <div className="p-4 bg-white rounded-2xl shadow-inner my-2 relative overflow-hidden">
                              <img src="/qr-code.jpg" alt="UPI QR Code - Flat B-402" className="w-40 h-40 object-contain" />
                              <div className="absolute inset-x-0 h-1 bg-[#FD6703] shadow-[0_0_12px_#FD6703] animate-laser" />
                            </div>
                            <div className="space-y-1 w-full text-center">
                              <div className="text-[11px] text-gray-400 uppercase tracking-wider">Pending September Maintenance</div>
                              <div className="text-3xl font-black text-white font-mono">₹ 3,500.00</div>
                              <div className="text-xs text-amber-400 flex items-center justify-center gap-1 pt-1">
                                <Clock className="w-3.5 h-3.5" /> Due by 10th of this month
                              </div>
                            </div>
                            <button
                              onClick={simulatePayment}
                              className="w-full py-3 rounded-full font-bold bg-[#FD6703] text-white hover:bg-[#e65c00] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FD6703]/20 text-xs"
                            >
                              <Zap className="w-4 h-4" />
                              <span>Simulate Resident UPI Payment</span>
                            </button>
                          </motion.div>
                        )}

                        {paymentStatus === 'paying' && (
                          <motion.div 
                            key="paying"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="py-14 space-y-4 w-full text-center"
                          >
                            <div className="w-12 h-12 border-4 border-[#FD6703] border-t-transparent rounded-full animate-spin mx-auto" />
                            <p className="text-sm font-semibold text-white">Contacting Banking Gateway...</p>
                            <p className="text-xs text-gray-400">Auto-matching transaction hash with Flat #B-402</p>
                          </motion.div>
                        )}

                        {paymentStatus === 'paid' && (
                          <motion.div 
                            key="paid"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="py-6 space-y-4 text-center w-full"
                          >
                            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                              <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white">Payment Reconciled Instantly!</h4>
                              <p className="text-xs text-gray-400 mt-0.5">Ref: <span className="font-mono text-emerald-400">UPI/TXN984128472</span></p>
                            </div>
                            <div className="bg-[#0f1116] p-3.5 rounded-xl text-left text-xs space-y-1.5 border border-white/10 w-full">
                              <div className="flex justify-between"><span className="text-gray-400">Receipt No:</span><span className="font-semibold text-white font-mono">CB-2026-0982</span></div>
                              <div className="flex justify-between"><span className="text-gray-400">Amount Received:</span><span className="font-semibold text-emerald-400 font-mono">₹ 3,500.00</span></div>
                              <div className="flex justify-between"><span className="text-gray-400">WhatsApp Notification:</span><span className="text-white">Dispatched ✓✓</span></div>
                            </div>
                            <div className="flex gap-2 w-full">
                              <button
                                onClick={resetPayment}
                                className="flex-1 py-2 text-xs font-semibold rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-gray-300"
                              >
                                Reset Demo
                              </button>
                              <a
                                href={MAINTENANCE_PORTAL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-2 text-xs font-semibold rounded-full bg-[#FD6703] text-white hover:bg-[#e65c00] flex items-center justify-center gap-1"
                              >
                                <ExternalLink className="w-3 h-3" /> Live App
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Right: Resident Features */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">Zero App Downloads for Residents</h3>
                      <p className="text-xs sm:text-sm text-[#9da4b2] leading-relaxed">
                        Residents don't need to learn a new app. They scan the flat QR with any standard UPI app (GPay, PhonePe, Paytm, BHIM) and get their stamped receipt delivered immediately on WhatsApp.
                      </p>

                      <div className="space-y-2.5 pt-2">
                        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#FD6703] mt-0.5 shrink-0" />
                          <div>
                            <div className="text-xs font-semibold text-white">Flat-Specific Dynamic UPI QR</div>
                            <p className="text-[11px] text-gray-400">Eliminates payment misidentifications completely.</p>
                          </div>
                        </div>

                        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#FD6703] mt-0.5 shrink-0" />
                          <div>
                            <div className="text-xs font-semibold text-white">Instant WhatsApp Confirmation</div>
                            <p className="text-[11px] text-gray-400">GST compliant tax invoice PDF dispatched within 3 seconds.</p>
                          </div>
                        </div>

                        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#FD6703] mt-0.5 shrink-0" />
                          <div>
                            <div className="text-xs font-semibold text-white">Past Payment History Ledger</div>
                            <p className="text-[11px] text-gray-400">Download previous year clearance certificates anytime.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                )}

                {/* Admin Dashboard Tab */}
                {activeDemoTab === 'admin' && (
                  <motion.div 
                    key="admin"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-10 space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-[#16181f] p-4 rounded-2xl border border-white/10">
                        <span className="text-[11px] text-gray-400">September Inflow</span>
                        <div className="text-2xl font-bold text-white mt-1 font-mono flex items-end gap-1">
                          <AnimatedCounter target={412500} prefix="₹ " /> 
                          <span className="text-xs text-gray-400 font-normal pb-1">/ 4.2L</span>
                        </div>
                        <div className="w-full bg-white/[0.05] rounded-full h-1.5 mt-2">
                          <div className="bg-[#FD6703] h-1.5 rounded-full" style={{ width: '98.2%' }}></div>
                        </div>
                        <span className="text-[11px] text-emerald-400 font-medium mt-1 block">98.2% Cleared</span>
                      </div>

                      <div className="bg-[#16181f] p-4 rounded-2xl border border-white/10">
                        <span className="text-[11px] text-gray-400">Pending Defaulters</span>
                        <div className="text-2xl font-bold text-rose-400 mt-1 font-mono flex items-end gap-1">
                          <AnimatedCounter target={2} suffix=" Units" />
                          <span className="text-xs text-gray-400 font-normal pb-1">(₹ 7,000)</span>
                        </div>
                        <a 
                          href={MAINTENANCE_PORTAL_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 text-xs font-bold text-[#FD6703] hover:underline flex items-center gap-1"
                        >
                          <Send className="w-3 h-3" /> Dispatch WhatsApp Nudge
                        </a>
                      </div>

                      <div className="bg-[#16181f] p-4 rounded-2xl border border-white/10">
                        <span className="text-[11px] text-gray-400">Society Reserve Fund</span>
                        <div className="text-2xl font-bold text-emerald-400 mt-1 font-mono">
                          <AnimatedCounter target={2845200} prefix="₹ " />
                        </div>
                        <span className="text-[11px] text-gray-400 mt-1 block">Audited via CodeBraces</span>
                      </div>
                    </div>

                    <div className="text-center pt-2">
                      <a
                        href={MAINTENANCE_PORTAL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold bg-[#FD6703] text-white hover:bg-[#e65c00] transition-all text-xs shadow-lg shadow-[#FD6703]/20"
                      >
                        <span>Launch Live Admin Desk (maintenance-pro.netlify.app)</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>
        </FadeInSection>
      </section>

      {/* MODULES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-[#FD6703] text-xs font-bold uppercase tracking-wider">Engineered For Residential Facilities</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Full-Featured Society Management</h2>
            <p className="text-xs sm:text-sm text-[#9da4b2]">
              Everything your committee needs for smooth financial audits and effortless day-to-day operations.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {societyModules.map((m, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <CardSpotlight className="p-6 rounded-3xl bg-[#121419]/80 border border-white/10 hover:border-[#FD6703]/40 transition-all duration-300 group h-full block">
                <div className="w-12 h-12 rounded-2xl bg-[#1a1d24] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {m.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FD6703] transition-colors relative z-10">{m.title}</h3>
                <p className="text-xs sm:text-sm text-[#9da4b2] leading-relaxed relative z-10">{m.description}</p>
              </CardSpotlight>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* INTERACTIVE SOCIETY SAVINGS ESTIMATOR */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="p-8 sm:p-12 rounded-3xl bg-[#121419]/90 border border-white/10 relative overflow-hidden shadow-2xl">
            <BorderBeam size={250} duration={12} delay={9} colorFrom="#FD6703" colorTo="#ff8433" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FD6703]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FD6703]/15 text-[#FD6703] border border-[#FD6703]/30 text-xs font-bold uppercase">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Interactive Committee Calculator</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">Estimate Your Society's Time & Dues Automation</h2>
                <p className="text-xs sm:text-sm text-[#9da4b2] leading-relaxed">
                  Adjust the sliders to match your residential society's flat count and monthly maintenance fees. See how CodeBraces eliminates manual ledger upkeep.
                </p>

                <div className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-300 font-semibold">Total Society Flats:</span>
                      <span className="font-mono text-[#FD6703] font-bold text-sm">{flatCount} Flats</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      step="5"
                      value={flatCount}
                      onChange={(e) => setFlatCount(Number(e.target.value))}
                      className="w-full accent-[#FD6703] bg-white/10 h-2 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-gray-500">
                      <span>10 flats</span>
                      <span>250 flats</span>
                      <span>500 flats</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-300 font-semibold">Monthly Maintenance / Flat:</span>
                      <span className="font-mono text-[#FD6703] font-bold text-sm">₹ {monthlyDues.toLocaleString('en-IN')}</span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="15000"
                      step="250"
                      value={monthlyDues}
                      onChange={(e) => setMonthlyDues(Number(e.target.value))}
                      className="w-full accent-[#FD6703] bg-white/10 h-2 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-gray-500">
                      <span>₹1,000</span>
                      <span>₹7,500</span>
                      <span>₹15,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-[#181a22] border border-white/10 space-y-2">
                  <span className="text-xs text-gray-400">Monthly Dues Reconciled</span>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                    <AnimatedCounter target={totalMonthlyCollection} prefix="₹ " />
                  </div>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Auto-matched with bank UTR
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#181a22] border border-white/10 space-y-2">
                  <span className="text-xs text-gray-400">Committee Hours Saved / Mo</span>
                  <div className="text-2xl sm:text-3xl font-black text-[#FD6703] font-mono">
                    <AnimatedCounter target={hoursSaved} suffix=" hrs" />
                  </div>
                  <p className="text-[11px] text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#FD6703]" /> Zero manual receipt typing
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#181a22] border border-white/10 space-y-2 sm:col-span-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-white">Ready to roll this out in your society?</h4>
                      <p className="text-xs text-[#9da4b2]">Setup takes under 24 hours. We import your member directory and flat numbers.</p>
                    </div>
                    <a
                      href={MAINTENANCE_PORTAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-bold bg-[#FD6703] text-white hover:bg-[#e65c00] text-xs transition-all shadow-md shadow-[#FD6703]/20 shrink-0"
                    >
                      <span>Test Live Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* BOTTOM ACTION */}
      <section className="py-20 border-t border-white/10 bg-[#0d0f13] text-center relative overflow-hidden">
        <Spotlight className="-top-40 left-1/2 -translate-x-1/2" fill="#FD6703" />
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Ready to Automate Your Society Maintenance?</h2>
            <p className="text-sm text-[#9da4b2] max-w-xl mx-auto">
              Try the live deployed portal right now on Netlify or schedule a meeting for your Managing Committee.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={MAINTENANCE_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold bg-[#FD6703] text-white hover:bg-[#e65c00] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#FD6703]/25 text-sm shimmer-btn"
              >
                <span>Access Live Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => navigate('/contact-us')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/10 transition-all text-sm"
              >
                Schedule Committee Call
              </button>
            </div>
          </div>
        </FadeInSection>
      </section>

    </div>
  );
};

export default MaintenanceSystem;
