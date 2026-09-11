import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Globe, 
  ShoppingCart, 
  Cpu, 
  RefreshCw,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    serviceCategory: 'maintenance',
    budget: '50k-1.5L',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { key: 'maintenance', label: 'Society Maintenance System', icon: Building2 },
    { key: 'custom', label: 'Custom Software App', icon: Cpu },
    { key: 'informational', label: 'Informational Website', icon: Globe },
    { key: 'ecommerce', label: 'E-Commerce Online Store', icon: ShoppingCart },
    { key: 'retainer', label: 'Maintenance Retainer', icon: RefreshCw },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-[#191b1f] text-gray-200 min-h-screen">
      
      {/* Header */}
      <section className="relative pt-12 pb-16 border-b border-[#2d3038] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[220px] bg-[#FD6703]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#262930] text-[#FD6703] border border-[#FD6703]/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Access to Our Engineering Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Discuss Your <span className="text-[#FD6703]">Next Project</span>
          </h1>

          <p className="text-base text-[#9da4b2] max-w-2xl mx-auto leading-relaxed">
            Whether you need a full demonstration of the Society Maintenance System or a custom software/web quote, send us your requirements below.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form Side (8 Cols) */}
          <div className="lg:col-span-8 bg-[#202328] rounded-3xl border border-[#393e47] p-6 sm:p-10 shadow-2xl">
            
            {isSubmitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40 shadow-xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully!</h3>
                  <p className="text-sm text-[#9da4b2] max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. An engineer from CodeBraces will review your project details and reach out within 4 business hours.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#18191d] border border-[#2e333d] max-w-sm mx-auto text-xs space-y-1 text-gray-400">
                  <div>Reference Ticket: <span className="font-mono text-white font-bold">CB-REQ-{Math.floor(100000 + Math.random() * 900000)}</span></div>
                  <div>Primary Channel: <span className="text-emerald-400 font-semibold">{formData.email}</span></div>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      organization: '',
                      serviceCategory: 'maintenance',
                      budget: '50k-1.5L',
                      details: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-[#2a2e36] text-white hover:bg-[#343944] transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Category Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
                    What can we help you build? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {categories.map((cat) => {
                      const Icon = cat.icon;
                      const isSelected = formData.serviceCategory === cat.key;
                      return (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceCategory: cat.key })}
                          className={`p-3 rounded-xl text-left border text-xs font-semibold flex items-center gap-2.5 transition-all ${
                            isSelected
                              ? 'bg-[#FD6703] text-black border-[#FD6703] font-bold shadow-md'
                              : 'bg-[#18191d] text-gray-300 border-[#2e333d] hover:border-gray-500'
                          }`}
                        >
                          <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-black' : 'text-[#FD6703]'}`} />
                          <span>{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sairaj Raut"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#18191d] border border-[#343942] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FD6703]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#18191d] border border-[#343942] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FD6703]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#18191d] border border-[#343942] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FD6703]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Society / Company Name (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Green Meadows CHS or Retail Brand"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-[#18191d] border border-[#343942] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FD6703]"
                    />
                  </div>
                </div>

                {/* Budget Selection */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">Estimated Investment / Budget Bracket</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#18191d] border border-[#343942] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FD6703]"
                  >
                    <option value="under-25k">Under ₹25,000 (Compact Society / Starter Site)</option>
                    <option value="25k-50k">₹25,000 - ₹50,000 (Informational Business Website)</option>
                    <option value="50k-1.5L">₹50,000 - ₹1,50,000 (Full E-Commerce Store or Custom SaaS MVP)</option>
                    <option value="1.5L-plus">₹1,50,000+ (Enterprise Software / Township Portal)</option>
                  </select>
                </div>

                {/* Details Textarea */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">Project Scope & Requirements *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us about your project, timeline, or society size (number of flats)..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-[#18191d] border border-[#343942] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FD6703]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold bg-[#FD6703] text-black hover:bg-[#e65c00] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FD6703]/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Project Details & Request Proposal</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

          {/* Contact Information & Channels (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#202328] rounded-3xl border border-[#393e47] p-6 space-y-6">
              <h3 className="text-lg font-bold text-white pb-3 border-b border-[#30353f]">
                Direct Contact Points
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FD6703]/15 text-[#FD6703] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Email Inquiry</div>
                    <a href="mailto:contact@codebraces.com" className="text-white font-semibold hover:text-[#FD6703] transition-colors">
                      contact@codebraces.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FD6703]/15 text-[#FD6703] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Call / WhatsApp</div>
                    <a href="tel:+919876543210" className="text-white font-semibold hover:text-[#FD6703] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FD6703]/15 text-[#FD6703] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Locations</div>
                    <div className="text-white font-semibold">
                      Mumbai & Pune, Maharashtra
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FD6703]/15 text-[#FD6703] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Operating Hours</div>
                    <div className="text-white font-semibold">
                      Mon - Sat: 9:30 AM - 7:30 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Society Box */}
            <div className="bg-gradient-to-br from-[#272b34] to-[#1f2228] rounded-3xl border border-[#FD6703]/30 p-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FD6703] flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                <span>Housing Society Committee?</span>
              </span>
              <p className="text-xs text-gray-300 leading-relaxed">
                We provide free on-site or Zoom presentations for society managing committees. Test the dynamic QR billing system live with your committee members.
              </p>
              <div className="pt-1">
                <a
                  href="tel:+919876543210"
                  className="text-xs font-bold text-[#FD6703] hover:underline flex items-center gap-1"
                >
                  <span>Book Committee Video Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;