import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  QrCode, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Send, 
  FileText, 
  Wrench, 
  Smartphone, 
  Sparkles, 
  Download, 
  Check, 
  Zap
} from 'lucide-react';

const MaintenanceSystem = () => {
  const navigate = useNavigate();
  const [activeDemoTab, setActiveDemoTab] = useState('resident');
  const [paymentStatus, setPaymentStatus] = useState('pending'); // pending, paying, paid
  const [selectedFlat] = useState('B-402');
  const [flatCount, setFlatCount] = useState(120);
  const [monthlyDues, setMonthlyDues] = useState(3500);

  const simulatePayment = () => {
    setPaymentStatus('paying');
    setTimeout(() => {
      setPaymentStatus('paid');
    }, 1200);
  };

  const resetPayment = () => {
    setPaymentStatus('pending');
  };

  // Calculations for calculator
  const totalMonthlyCollection = flatCount * monthlyDues;
  const hoursSaved = Math.round(flatCount * 0.35);

  const societyModules = [
    {
      icon: <QrCode className="w-6 h-6 text-[#FD6703]" />,
      title: "Flat-Wise Dynamic QR Payments",
      description: "Each resident gets a unique UPI QR code mapped directly to their flat number. Payments auto-reconcile in real time with zero manual ledger entry."
    },
    {
      icon: <Send className="w-6 h-6 text-[#38bdf8]" />,
      title: "Automated WhatsApp & SMS Alerts",
      description: "Send automated monthly maintenance invoices, polite payment reminders, and instant digital payment receipts directly to residents' WhatsApp."
    },
    {
      icon: <Users className="w-6 h-6 text-[#a78bfa]" />,
      title: "Committee & Resident Portals",
      description: "Dedicated interfaces for residents to view payment history, raise maintenance tickets, and for treasurers to monitor collection metrics."
    },
    {
      icon: <FileText className="w-6 h-6 text-[#34d399]" />,
      title: "Auditor-Ready Financial Ledgers",
      description: "Generate society balance sheets, expense reports, vendor payments, and defaulter lists in one-click exportable PDF/Excel formats."
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#f97316]" />,
      title: "Asset & Complaint Helpdesk",
      description: "Log repairs for lifts, generators, water pumps, or plumbing. Track vendor visits, cost of repair, and resident sign-offs digitally."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#ec4899]" />,
      title: "Role-Based Security & Multi-Wing",
      description: "Role permissions for Secretary, Chairman, Treasurer, Facility Manager, and Residents. Seamless support for multi-wing campuses."
    }
  ];

  return (
    <div className="bg-[#191b1f] text-gray-200 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-[#2d3038]">
        {/* Background glow accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FD6703]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#262930] border border-[#FD6703]/40 text-[#FD6703] text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#FD6703]/5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Proprietary SaaS Product</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Smart Maintenance System for Modern <span className="text-[#FD6703]">Housing Societies</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#9da4b2] leading-relaxed">
              Eliminate manual fee collection, delayed payments, and messy accounting spreadsheets. 
              CodeBraces Maintenance System delivers automated QR billing, instant WhatsApp receipts, and complete treasurer transparency.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/login"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-[#FD6703] text-[#191b1f] hover:bg-[#e65c00] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#FD6703]/25 hover:scale-105"
              >
                <span>Launch Interactive Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                to="/contact-us"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-[#262930] hover:bg-[#30343e] text-white border border-[#3e4450] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Schedule Society Presentation</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#2d3038]/80 text-left">
              <div className="p-4 rounded-xl bg-[#202328]/60 border border-[#2e333d]">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">99.4%</div>
                <div className="text-xs text-[#9da4b2] mt-1 font-medium">On-Time Collection Rate</div>
              </div>
              <div className="p-4 rounded-xl bg-[#202328]/60 border border-[#2e333d]">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FD6703]">0 mins</div>
                <div className="text-xs text-[#9da4b2] mt-1 font-medium">Manual Reconciliation</div>
              </div>
              <div className="p-4 rounded-xl bg-[#202328]/60 border border-[#2e333d]">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                <div className="text-xs text-[#9da4b2] mt-1 font-medium">Digital Audit Trail</div>
              </div>
              <div className="p-4 rounded-xl bg-[#202328]/60 border border-[#2e333d]">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#34d399]">30+ Hrs</div>
                <div className="text-xs text-[#9da4b2] mt-1 font-medium">Saved Per Month</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Simulator Section */}
      <section className="py-20 bg-[#16181b] border-b border-[#2d3038] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#FD6703] text-xs uppercase font-bold tracking-wider">Live System Simulator</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Experience the Platform in Action</h2>
            <p className="text-sm text-[#9da4b2] mt-3">
              Test both sides of our system: see how simple it is for a resident to pay dues via QR, and how effortless it is for the society committee to oversee dues.
            </p>
          </div>

          {/* Simulator Box */}
          <div className="bg-[#202328] border border-[#393e47] rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
            
            {/* Simulator Header Tabs */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#343942] bg-[#1a1d22] px-6 py-4 gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveDemoTab('resident')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
                    activeDemoTab === 'resident'
                      ? 'bg-[#FD6703] text-[#191b1f] shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-[#272b33]'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Resident Experience (QR Payment)</span>
                </button>
                <button
                  onClick={() => setActiveDemoTab('admin')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
                    activeDemoTab === 'admin'
                      ? 'bg-[#FD6703] text-[#191b1f] shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-[#272b33]'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>Admin / Treasurer Dashboard</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#9da4b2]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Simulated Live Environment</span>
              </div>
            </div>

            {/* Tab 1: Resident QR Payment Simulation */}
            {activeDemoTab === 'resident' && (
              <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Left: Dynamic QR Mock */}
                <div className="bg-[#18191d] p-6 rounded-xl border border-[#2e333d] flex flex-col items-center text-center space-y-4">
                  <div className="w-full flex justify-between items-center text-xs text-gray-400 pb-3 border-b border-[#2e333d]">
                    <span className="font-semibold text-white">Green Meadows CHS Ltd.</span>
                    <span className="bg-[#FD6703]/15 text-[#FD6703] px-2 py-0.5 rounded font-mono font-bold">Flat #{selectedFlat}</span>
                  </div>

                  {paymentStatus === 'pending' && (
                    <>
                      <div className="p-4 bg-white rounded-xl shadow-inner my-2">
                        <QrCode className="w-44 h-44 text-black" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Total Pending Maintenance</div>
                        <div className="text-3xl font-extrabold text-white">₹ 3,500.00</div>
                        <div className="text-xs text-amber-400 flex items-center justify-center gap-1 pt-1">
                          <Clock className="w-3.5 h-3.5" /> Due by 10th of this month
                        </div>
                      </div>
                      <button
                        onClick={simulatePayment}
                        className="w-full py-3 rounded-lg font-bold bg-[#FD6703] text-black hover:bg-[#e65c00] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FD6703]/20"
                      >
                        <Zap className="w-4 h-4" />
                        <span>Simulate Resident UPI Payment</span>
                      </button>
                    </>
                  )}

                  {paymentStatus === 'paying' && (
                    <div className="py-16 space-y-4">
                      <div className="w-12 h-12 border-4 border-[#FD6703] border-t-transparent rounded-full animate-spin mx-auto" />
                      <p className="text-sm font-semibold text-white">Contacting UPI Banking Gateway...</p>
                      <p className="text-xs text-gray-400">Verifying transaction reference & unit hash</p>
                    </div>
                  )}

                  {paymentStatus === 'paid' && (
                    <div className="py-8 space-y-4 text-center">
                      <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">Payment Verified Instantly!</h4>
                        <p className="text-xs text-gray-400 mt-1">Transaction Ref: <span className="font-mono text-emerald-400">UPI/TXN984128472</span></p>
                      </div>
                      <div className="bg-[#242830] p-3 rounded-lg text-left text-xs space-y-1.5 border border-[#343942]">
                        <div className="flex justify-between"><span className="text-gray-400">Receipt No:</span><span className="font-semibold text-white">CB-2026-0982</span></div>
                        <div className="flex justify-between"><span className="text-gray-400">Amount Received:</span><span className="font-semibold text-emerald-400">₹ 3,500.00</span></div>
                        <div className="flex justify-between"><span className="text-gray-400">WhatsApp Receipt:</span><span className="text-white">Delivered ✓✓</span></div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={resetPayment}
                          className="flex-1 py-2 text-xs font-semibold rounded bg-[#2e333d] hover:bg-[#383e4a] text-gray-200"
                        >
                          Reset Demo
                        </button>
                        <button
                          onClick={() => alert("Digital receipt download triggered!")}
                          className="flex-1 py-2 text-xs font-semibold rounded bg-[#FD6703] text-black hover:bg-[#e65c00] flex items-center justify-center gap-1"
                        >
                          <Download className="w-3.5 h-3.5" /> Download Slip
                        </button>
                      </div>
                    </div>
                  )}

                </div>

                {/* Right: Resident Features Explained */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Zero Friction for Residents</h3>
                    <p className="text-sm text-[#9da4b2] mt-2 leading-relaxed">
                      Residents do not need to download bloated apps or fill complicated forms. They scan their unique flat QR using Google Pay, PhonePe, Paytm, or BHIM, and receive an instant GST-compliant PDF receipt on WhatsApp.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1a1d22] border border-[#2e333d]">
                      <Check className="w-5 h-5 text-[#FD6703] mt-0.5 shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-white">Flat-Specific Dynamic QR Codes</h4>
                        <p className="text-xs text-gray-400">Dues are auto-matched to Flat #B-402 with no manual sender identification needed.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1a1d22] border border-[#2e333d]">
                      <Check className="w-5 h-5 text-[#FD6703] mt-0.5 shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-white">Clear Bill Breakdown</h4>
                        <p className="text-xs text-gray-400">Transparent split between Maintenance, Sinking Fund, Water Charges, and Parking.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1a1d22] border border-[#2e333d]">
                      <Check className="w-5 h-5 text-[#FD6703] mt-0.5 shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-white">Instant WhatsApp Confirmation</h4>
                        <p className="text-xs text-gray-400">Official society stamped digital receipt dispatched in under 3 seconds.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Tab 2: Admin Dashboard Simulation */}
            {activeDemoTab === 'admin' && (
              <div className="p-6 sm:p-10 space-y-6">
                
                {/* Admin KPI Topbar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-[#18191d] p-4 rounded-xl border border-[#2e333d]">
                    <span className="text-xs text-gray-400">September Collection Progress</span>
                    <div className="text-2xl font-bold text-white mt-1">₹ 4,12,500 <span className="text-xs text-gray-400 font-normal">/ ₹ 4,20,000</span></div>
                    <div className="w-full bg-[#272b33] rounded-full h-2 mt-2">
                      <div className="bg-[#FD6703] h-2 rounded-full" style={{ width: '98.2%' }}></div>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium mt-1 block">98.2% Collected (118/120 Units)</span>
                  </div>

                  <div className="bg-[#18191d] p-4 rounded-xl border border-[#2e333d]">
                    <span className="text-xs text-gray-400">Pending Defaulters</span>
                    <div className="text-2xl font-bold text-rose-400 mt-1">2 Units <span className="text-xs text-gray-400 font-normal">(₹ 7,000)</span></div>
                    <div className="text-[11px] text-gray-400 mt-2">A-201 (1 Mo) & C-104 (1 Mo)</div>
                    <button
                      onClick={() => alert("Automated WhatsApp reminders dispatched to 2 defaulters!")}
                      className="mt-2 text-xs font-bold text-[#FD6703] hover:underline flex items-center gap-1"
                    >
                      <Send className="w-3 h-3" /> Send WhatsApp Dues Nudge
                    </button>
                  </div>

                  <div className="bg-[#18191d] p-4 rounded-xl border border-[#2e333d]">
                    <span className="text-xs text-gray-400">Society Balance & Reserves</span>
                    <div className="text-2xl font-bold text-emerald-400 mt-1">₹ 28,45,200</div>
                    <div className="text-[11px] text-gray-400 mt-2">Operating: ₹ 8.2L | Sinking Fund: ₹ 20.2L</div>
                    <span className="text-[11px] text-[#38bdf8] font-medium block mt-1">Audited via CodeBraces</span>
                  </div>
                </div>

                {/* Table Simulation */}
                <div className="bg-[#18191d] rounded-xl border border-[#2e333d] overflow-hidden">
                  <div className="px-5 py-3.5 bg-[#1f2227] border-b border-[#2e333d] flex justify-between items-center">
                    <h4 className="text-sm font-bold text-white">Live Flat Ledger & Transaction Stream</h4>
                    <span className="text-xs text-[#FD6703] font-medium">Real-Time Sync Active</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#16181b] text-gray-400 uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4">Flat No</th>
                          <th className="py-3 px-4">Resident Name</th>
                          <th className="py-3 px-4">Due Amount</th>
                          <th className="py-3 px-4">Status</th>
                          <th className="py-3 px-4">Receipt</th>
                          <th className="py-3 px-4">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#272b33] text-gray-300">
                        <tr>
                          <td className="py-3 px-4 font-bold text-white">B-402</td>
                          <td className="py-3 px-4">Rajesh Sharma</td>
                          <td className="py-3 px-4">₹ 3,500</td>
                          <td className="py-3 px-4"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-[11px]">Paid (UPI)</span></td>
                          <td className="py-3 px-4 font-mono text-gray-400">#CB-0982</td>
                          <td className="py-3 px-4"><button className="text-[#FD6703] hover:underline font-semibold">View</button></td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-white">A-102</td>
                          <td className="py-3 px-4">Pooja Deshmukh</td>
                          <td className="py-3 px-4">₹ 3,500</td>
                          <td className="py-3 px-4"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-[11px]">Paid (UPI)</span></td>
                          <td className="py-3 px-4 font-mono text-gray-400">#CB-0981</td>
                          <td className="py-3 px-4"><button className="text-[#FD6703] hover:underline font-semibold">View</button></td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-white">A-201</td>
                          <td className="py-3 px-4">Vikram Joshi</td>
                          <td className="py-3 px-4">₹ 3,500</td>
                          <td className="py-3 px-4"><span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 font-semibold text-[11px]">Overdue (15 Days)</span></td>
                          <td className="py-3 px-4 font-mono text-gray-500">-</td>
                          <td className="py-3 px-4"><button onClick={() => alert("Reminder sent to Vikram Joshi via WhatsApp!")} className="text-rose-400 hover:underline font-semibold">Nudge</button></td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-white">C-305</td>
                          <td className="py-3 px-4">Amit Kulkarni</td>
                          <td className="py-3 px-4">₹ 3,500</td>
                          <td className="py-3 px-4"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-[11px]">Paid (NetBanking)</span></td>
                          <td className="py-3 px-4 font-mono text-gray-400">#CB-0979</td>
                          <td className="py-3 px-4"><button className="text-[#FD6703] hover:underline font-semibold">View</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* Six Core Pillars / Modules Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#FD6703] text-xs uppercase font-bold tracking-wider">Engineered For Reliability</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Complete Society Management Architecture</h2>
          <p className="text-sm text-[#9da4b2]">
            Everything your managing committee needs to maintain high collection rates, zero dispute records, and effortless year-end auditing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {societyModules.map((module, idx) => (
            <div
              key={idx}
              className="bg-[#202328] p-6 rounded-2xl border border-[#32363f] hover:border-[#FD6703]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2a2e36] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {module.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FD6703] transition-colors">
                {module.title}
              </h3>
              <p className="text-sm text-[#9da4b2] leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Society Savings Calculator */}
      <section className="py-20 bg-[#16181b] border-t border-[#2d3038]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#202328] rounded-3xl border border-[#393e47] p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Sliders (Left) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[#FD6703] text-xs uppercase font-bold tracking-wider">ROI & Impact Calculator</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">See What Your Society Saves</h3>
                  <p className="text-xs text-[#9da4b2] mt-1">Adjust your society details to calculate committee time saved and cash flow speedup.</p>
                </div>

                {/* Slider 1 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-gray-300">Number of Flats / Units</span>
                    <span className="text-[#FD6703] font-mono text-base">{flatCount} Units</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="600"
                    step="10"
                    value={flatCount}
                    onChange={(e) => setFlatCount(Number(e.target.value))}
                    className="w-full accent-[#FD6703] bg-[#2e333d] h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500">
                    <span>20 units</span>
                    <span>300 units</span>
                    <span>600 units</span>
                  </div>
                </div>

                {/* Slider 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-gray-300">Average Monthly Maintenance / Unit</span>
                    <span className="text-[#FD6703] font-mono text-base">₹ {monthlyDues.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="15000"
                    step="250"
                    value={monthlyDues}
                    onChange={(e) => setMonthlyDues(Number(e.target.value))}
                    className="w-full accent-[#FD6703] bg-[#2e333d] h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500">
                    <span>₹ 1,000</span>
                    <span>₹ 7,500</span>
                    <span>₹ 15,000</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#191b1f] border border-[#2e333d] flex items-center justify-between">
                  <span className="text-xs text-gray-400">Total Monthly Dues Run-Rate:</span>
                  <span className="text-lg font-extrabold text-white font-mono">₹ {totalMonthlyCollection.toLocaleString('en-IN')} / mo</span>
                </div>
              </div>

              {/* Result Card (Right) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#272b33] to-[#1c1e23] p-6 sm:p-8 rounded-2xl border border-[#3e4450] space-y-5 text-center shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FD6703]">Estimated Benefits</span>
                
                <div className="space-y-4">
                  <div className="p-3 bg-[#18191d] rounded-xl border border-[#2e333d]">
                    <div className="text-3xl font-extrabold text-[#FD6703]">{hoursSaved} Hours</div>
                    <div className="text-xs text-gray-400 mt-0.5">Treasurer & Committee Time Saved Monthly</div>
                  </div>

                  <div className="p-3 bg-[#18191d] rounded-xl border border-[#2e333d]">
                    <div className="text-3xl font-extrabold text-emerald-400">14 Days</div>
                    <div className="text-xs text-gray-400 mt-0.5">Faster Maintenance Dues Inflow</div>
                  </div>

                  <div className="p-3 bg-[#18191d] rounded-xl border border-[#2e333d]">
                    <div className="text-3xl font-extrabold text-white">99.5%</div>
                    <div className="text-xs text-gray-400 mt-0.5">Target Zero-Error Collection Rate</div>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/contact-us')}
                  className="w-full py-3.5 rounded-xl font-bold bg-[#FD6703] text-black hover:bg-[#e65c00] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FD6703]/25"
                >
                  <span>Request Custom Society Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#FD6703] text-xs uppercase font-bold tracking-wider">Transparent Society Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Simple Plans For Every Society</h2>
          <p className="text-sm text-[#9da4b2] mt-2">No hidden setup fees. Includes full data migration from your existing Excel sheets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Plan 1 */}
          <div className="bg-[#202328] p-8 rounded-2xl border border-[#32363f] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">Compact Society</h3>
              <p className="text-xs text-gray-400 mt-1">Ideal for standalone buildings & small apartments.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-white">₹ 15</span>
                <span className="text-xs text-gray-400"> / flat / month</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FD6703]" /> Up to 40 Flats</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FD6703]" /> Dynamic QR Code Billing</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FD6703]" /> WhatsApp Invoices & Receipts</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FD6703]" /> Society Expense Logger</li>
              </ul>
            </div>
            <button 
              onClick={() => navigate('/contact-us')}
              className="mt-8 w-full py-3 rounded-xl font-semibold bg-[#2a2e36] hover:bg-[#333842] text-white border border-[#444a56] transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Plan 2: Highlighted */}
          <div className="bg-[#242830] p-8 rounded-2xl border-2 border-[#FD6703] flex flex-col justify-between relative shadow-2xl shadow-[#FD6703]/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FD6703] text-black font-bold text-[11px] uppercase tracking-wider py-1 px-3 rounded-full shadow">
              Most Popular
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Gated Community</h3>
              <p className="text-xs text-gray-400 mt-1">For multi-wing complexes & modern societies.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-[#FD6703]">₹ 12</span>
                <span className="text-xs text-gray-400"> / flat / month</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FD6703]" /> 41 to 250 Flats</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FD6703]" /> Real-Time Bank Statement Reconciliation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FD6703]" /> Automated WhatsApp Defaulter Nudges</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FD6703]" /> Complaint & Vendor Ticket System</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FD6703]" /> Multi-Treasurer Access Roles</li>
              </ul>
            </div>
            <button 
              onClick={() => navigate('/contact-us')}
              className="mt-8 w-full py-3 rounded-xl font-bold bg-[#FD6703] text-black hover:bg-[#e65c00] transition-all shadow-lg shadow-[#FD6703]/20"
            >
              Choose Gated Plan
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-[#202328] p-8 rounded-2xl border border-[#32363f] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">Township & Enterprise</h3>
              <p className="text-xs text-gray-400 mt-1">For large high-rise clusters & commercial hubs.</p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-white">Custom</span>
                <span className="text-xs text-gray-400"> / bespoke SLA</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FD6703]" /> 250+ Units & Commercial Wings</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FD6703]" /> Custom Accounting ERP Integration</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FD6703]" /> Dedicated Onboarding Manager</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FD6703]" /> Biometric & Visitor App Sync</li>
              </ul>
            </div>
            <button 
              onClick={() => navigate('/contact-us')}
              className="mt-8 w-full py-3 rounded-xl font-semibold bg-[#2a2e36] hover:bg-[#333842] text-white border border-[#444a56] transition-all"
            >
              Contact Enterprise
            </button>
          </div>

        </div>
      </section>

      {/* FAQ specific to Maintenance System */}
      <section className="py-16 bg-[#16181b] border-t border-[#2d3038]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="text-xs text-gray-400 mt-1">Got questions about migrating your society? Here are quick answers.</p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-[#202328] border border-[#2e333d]">
              <h4 className="text-base font-semibold text-white">How does the dynamic QR payment work for residents?</h4>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                When an invoice is issued, our system embeds a specific UPI reference string containing the exact amount and unit number into the QR code. When the resident scans using Google Pay, PhonePe, or BHIM, the bank callback confirms the receipt automatically, matching it to the flat with 0 manual verification needed.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#202328] border border-[#2e333d]">
              <h4 className="text-base font-semibold text-white">Can we import our existing Excel sheets and resident lists?</h4>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                Yes! Our onboarding team helps you export your flat list, current resident mobile numbers, and existing dues into CodeBraces within 24 hours at no extra charge.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#202328] border border-[#2e333d]">
              <h4 className="text-base font-semibold text-white">Can society committee members see financial statements?</h4>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                Yes, the Chairman, Secretary, and Treasurer have multi-factor authorized access to download monthly balance sheets, collection percentages, and vendor expense summaries for society AGM meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-[#FD6703] to-[#ff7e29] text-[#191b1f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Upgrade Your Society to Zero-Effort Digital Maintenance?
          </h2>
          <p className="text-base sm:text-lg font-medium max-w-2xl mx-auto text-[#2b2609]">
            Book a 20-minute live demonstration for your Managing Committee or test our instant demo portal right now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/login"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-[#191b1f] text-white hover:bg-black transition-all shadow-xl"
            >
              Test Live Demo Portal
            </Link>
            <Link
              to="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white text-[#191b1f] hover:bg-gray-100 transition-all shadow-lg"
            >
              Schedule Committee Meeting
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MaintenanceSystem;
