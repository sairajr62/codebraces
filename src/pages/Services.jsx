import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Globe, 
  ShoppingCart, 
  Cpu, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Building2, 
  RefreshCw, 
  Boxes
} from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();
  const [activeTechCategory, setActiveTechCategory] = useState('all');

  const techStack = [
    { name: "React / Vite", category: "frontend", desc: "Lightning-fast client architectures" },
    { name: "Next.js", category: "frontend", desc: "Server-side rendered web apps & SEO" },
    { name: "Tailwind CSS", category: "frontend", desc: "Pixel-perfect bespoke design systems" },
    { name: "Node.js / Express", category: "backend", desc: "High-throughput RESTful & GraphQL APIs" },
    { name: "Python / FastApi", category: "backend", desc: "Data processing & backend automation" },
    { name: "MongoDB", category: "database", desc: "Flexible document stores for agile schemas" },
    { name: "PostgreSQL", category: "database", desc: "ACID-compliant relational transactional data" },
    { name: "Redis", category: "database", desc: "Sub-millisecond caching & session storage" },
    { name: "AWS & DigitalOcean", category: "cloud", desc: "Scalable cloud infrastructure & containers" },
    { name: "Docker & CI/CD", category: "cloud", desc: "Automated zero-downtime deployments" },
    { name: "Razorpay / Stripe / UPI", category: "payments", desc: "Multi-currency secure payment flows" },
  ];

  const filteredTech = activeTechCategory === 'all' 
    ? techStack 
    : techStack.filter(item => item.category === activeTechCategory);

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Blueprint",
      desc: "We analyze your business workflow, technical requirements, user personas, and map out the optimal data architecture."
    },
    {
      step: "02",
      title: "UI/UX & Prototyping",
      desc: "Interactive wireframes and clean, modern interfaces designed for effortless usability and maximum user conversion."
    },
    {
      step: "03",
      title: "Agile Development",
      desc: "Clean, modular code built in iterative weekly milestones with live preview staging links for transparent feedback."
    },
    {
      step: "04",
      title: "Security & Testing",
      desc: "Comprehensive cross-browser testing, automated API validation, payment gateway security, and performance audits."
    },
    {
      step: "05",
      title: "Launch & Support",
      desc: "Production deployment, domain configuration, staff onboarding, and ongoing maintenance retainers."
    }
  ];

  return (
    <div className="bg-[#191b1f] text-gray-200 min-h-screen">
      
      {/* Header Banner */}
      <section className="relative pt-12 pb-20 border-b border-[#2d3038] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#FD6703]/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#262930] text-[#FD6703] border border-[#FD6703]/30 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Full-Spectrum Digital Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Our Engineering & <span className="text-[#FD6703]">Development Services</span>
          </h1>

          <p className="text-base sm:text-lg text-[#9da4b2] max-w-3xl mx-auto leading-relaxed">
            From high-converting informational websites to multi-vendor e-commerce engines and tailored enterprise software, CodeBraces builds digital products that accelerate growth.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <a 
              href="#custom-software" 
              className="text-xs font-semibold px-4 py-2 rounded-full bg-[#242830] hover:bg-[#30353f] text-gray-300 hover:text-white border border-[#393e47] transition-all"
            >
              Custom Software
            </a>
            <a 
              href="#web-development" 
              className="text-xs font-semibold px-4 py-2 rounded-full bg-[#242830] hover:bg-[#30353f] text-gray-300 hover:text-white border border-[#393e47] transition-all"
            >
              Informational Websites
            </a>
            <a 
              href="#ecommerce-stores" 
              className="text-xs font-semibold px-4 py-2 rounded-full bg-[#242830] hover:bg-[#30353f] text-gray-300 hover:text-white border border-[#393e47] transition-all"
            >
              E-Commerce Stores
            </a>
            <a 
              href="#maintenance-retainers" 
              className="text-xs font-semibold px-4 py-2 rounded-full bg-[#242830] hover:bg-[#30353f] text-gray-300 hover:text-white border border-[#393e47] transition-all"
            >
              Maintenance Retainers
            </a>
          </div>
        </div>
      </section>

      {/* Flagship Product Banner Callout */}
      <section className="py-8 bg-[#15171a] border-b border-[#2d3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#282c35] to-[#1f2228] p-6 rounded-2xl border border-[#FD6703]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FD6703] text-black flex items-center justify-center shrink-0 shadow-md shadow-[#FD6703]/20">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FD6703] uppercase">
                  <span>Flagship SaaS Product</span>
                </div>
                <h3 className="text-xl font-bold text-white">Looking for Housing Society Management?</h3>
                <p className="text-xs text-gray-400 mt-0.5">Explore our dedicated Maintenance System featuring automated UPI QR billing and WhatsApp receipts.</p>
              </div>
            </div>
            <Link
              to="/maintenance-system"
              className="px-6 py-2.5 rounded-xl font-bold bg-[#FD6703] text-black hover:bg-[#e65c00] transition-all flex items-center gap-2 text-sm shrink-0 shadow-md shadow-[#FD6703]/20"
            >
              <span>Explore Product</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICE 1: CUSTOM SOFTWARE DEVELOPMENT */}
      <section id="custom-software" className="py-20 border-b border-[#2d3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FD6703]/15 text-[#FD6703] border border-[#FD6703]/30 text-xs font-bold uppercase">
                <Cpu className="w-3.5 h-3.5" />
                <span>Bespoke Engineering</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Custom Software Development
              </h2>

              <p className="text-base text-[#9da4b2] leading-relaxed">
                When off-the-shelf software falls short of your operational requirements, CodeBraces engineers bespoke web applications tailored precisely to your workflow, data models, and business objectives.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FD6703]" />
                    Enterprise Dashboards & Admin Portals
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Custom operational cockpits, multi-tenant SaaS dashboards, inventory trackers, and staff scheduling panels with deep analytics.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FD6703]" />
                    Cloud APIs & Backend Integrations
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    RESTful & GraphQL microservices, third-party CRM connectors, payment processing pipelines, and automated database sync.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FD6703]" />
                    Role-Based Access Control (RBAC) & Security
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Fine-grained permission hierarchies for Admins, Managers, Staff, and Clients with JWT authentication and audit trails.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/contact-us')}
                  className="px-6 py-3 rounded-xl font-bold bg-[#FD6703] text-black hover:bg-[#e65c00] transition-all flex items-center gap-2 text-sm shadow-lg shadow-[#FD6703]/20"
                >
                  <span>Request Custom Software Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#202328] rounded-3xl border border-[#393e47] p-6 sm:p-8 space-y-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white pb-3 border-b border-[#30353f] flex items-center justify-between">
                <span>Architecture Highlights</span>
                <span className="text-xs text-[#FD6703] font-mono">Production-Ready</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div className="bg-[#18191d] p-3.5 rounded-xl border border-[#2e333d] space-y-1">
                  <span className="text-gray-400">Database Options:</span>
                  <div className="text-white font-semibold">MongoDB, PostgreSQL, MySQL, Redis Cache</div>
                </div>

                <div className="bg-[#18191d] p-3.5 rounded-xl border border-[#2e333d] space-y-1">
                  <span className="text-gray-400">Backend Frameworks:</span>
                  <div className="text-white font-semibold">Node.js, Express, Fastify, Python FastAPI</div>
                </div>

                <div className="bg-[#18191d] p-3.5 rounded-xl border border-[#2e333d] space-y-1">
                  <span className="text-gray-400">Security Standard:</span>
                  <div className="text-white font-semibold">HTTPS/TLS 1.3, Argon2/Bcrypt Hashing, OWASP Best Practices</div>
                </div>

                <div className="bg-[#18191d] p-3.5 rounded-xl border border-[#2e333d] space-y-1">
                  <span className="text-gray-400">Deployment Stacks:</span>
                  <div className="text-white font-semibold">Docker Containers, AWS EC2/S3, DigitalOcean, Vercel</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED SERVICE 2: INFORMATIONAL & CORPORATE WEBSITES */}
      <section id="web-development" className="py-20 bg-[#16181b] border-b border-[#2d3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1 bg-[#202328] rounded-3xl border border-[#393e47] p-6 sm:p-8 space-y-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white pb-3 border-b border-[#30353f] flex items-center justify-between">
                <span>Informational Website Metrics</span>
                <span className="text-xs text-sky-400 font-mono">Performance Tier</span>
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#18191d] border border-[#2e333d] flex items-center justify-between">
                  <span className="text-xs text-gray-400">Google Lighthouse Score</span>
                  <span className="text-xl font-bold text-emerald-400">95+ / 100</span>
                </div>
                <div className="p-4 rounded-xl bg-[#18191d] border border-[#2e333d] flex items-center justify-between">
                  <span className="text-xs text-gray-400">Average Page Load Time</span>
                  <span className="text-xl font-bold text-white">&lt; 0.8 Seconds</span>
                </div>
                <div className="p-4 rounded-xl bg-[#18191d] border border-[#2e333d] flex items-center justify-between">
                  <span className="text-xs text-gray-400">Mobile Fluidity</span>
                  <span className="text-xl font-bold text-sky-400">100% Adaptive</span>
                </div>
                <div className="p-4 rounded-xl bg-[#18191d] border border-[#2e333d] flex items-center justify-between">
                  <span className="text-xs text-gray-400">On-Page SEO Ready</span>
                  <span className="text-xl font-bold text-[#FD6703]">Included</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold uppercase">
                <Globe className="w-3.5 h-3.5" />
                <span>Web Presence</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Informational & Corporate Websites
              </h2>

              <p className="text-base text-[#9da4b2] leading-relaxed">
                Your website is your company's most influential brand ambassador. We engineer stunning, ultra-fast informational websites that tell your brand story, establish trust with visitors, and generate consistent inbound leads.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    Corporate & Agency Presence
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Clean, contemporary design language tailored to showcase services, case studies, team biographies, and leadership credentials.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    Lead Capture & Contact Funnels
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Conversion-optimized consultation inquiry forms, interactive price calculators, Google Maps integration, and instant email alerts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    Technical SEO & Content Hierarchy
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Semantic HTML5, OpenGraph social cards, JSON-LD structured schema, and fast-indexing sitemaps to ensure top visibility on Google.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/contact-us')}
                  className="px-6 py-3 rounded-xl font-bold bg-sky-400 text-black hover:bg-sky-300 transition-all flex items-center gap-2 text-sm shadow-lg shadow-sky-400/20"
                >
                  <span>Build an Informational Website</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED SERVICE 3: E-COMMERCE STORES */}
      <section id="ecommerce-stores" className="py-20 border-b border-[#2d3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase">
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Digital Retail Solutions</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                E-Commerce Stores & Marketplaces
              </h2>

              <p className="text-base text-[#9da4b2] leading-relaxed">
                Whether you are launching your first direct-to-consumer brand or migrating a multi-thousand SKU catalog, CodeBraces creates frictionless e-commerce experiences engineered to maximize cart conversion.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Frictionless Checkout & Multi-Channel Payments
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Integrated UPI Intent flows, Cards, NetBanking, and Cash on Delivery (COD) with one-click checkout and reduced drop-offs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Product Variations & Smart Filtering
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    High-speed facet filtering by price, size, color, brand, and category with instant instant-search autocomplete.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Admin Order & Inventory Control
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Live inventory synchronization, discount code generators, customer order tracking, and automated invoice PDF generation.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/contact-us')}
                  className="px-6 py-3 rounded-xl font-bold bg-emerald-400 text-black hover:bg-emerald-300 transition-all flex items-center gap-2 text-sm shadow-lg shadow-emerald-400/20"
                >
                  <span>Launch Your E-Commerce Store</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#202328] rounded-3xl border border-[#393e47] p-6 sm:p-8 space-y-5 shadow-2xl">
              <h3 className="text-lg font-bold text-white pb-3 border-b border-[#30353f] flex items-center justify-between">
                <span>Store Capabilities</span>
                <span className="text-xs text-emerald-400 font-mono">Ready to Scale</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-[#18191d] rounded-xl border border-[#2e333d]">
                  <div className="font-bold text-white">Payment Gateways</div>
                  <div className="text-gray-400 mt-0.5">Razorpay, Stripe, Cashfree, PayU, UPI QR, COD</div>
                </div>

                <div className="p-3 bg-[#18191d] rounded-xl border border-[#2e333d]">
                  <div className="font-bold text-white">Shipping & Tracking</div>
                  <div className="text-gray-400 mt-0.5">Shiprocket, Delhivery API, Automated Tracking Links</div>
                </div>

                <div className="p-3 bg-[#18191d] rounded-xl border border-[#2e333d]">
                  <div className="font-bold text-white">Marketing & Retention</div>
                  <div className="text-gray-400 mt-0.5">Abandoned Cart Recovery, WhatsApp Order Updates, Coupon Codes</div>
                </div>

                <div className="p-3 bg-[#18191d] rounded-xl border border-[#2e333d]">
                  <div className="font-bold text-white">Security Standard</div>
                  <div className="text-gray-400 mt-0.5">PCI-DSS Compliant Workflows, SSL/TLS Encryption</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED SERVICE 4: MAINTENANCE RETAINERS */}
      <section id="maintenance-retainers" className="py-20 bg-[#16181b] border-b border-[#2d3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30 text-xs font-bold uppercase">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Continuous Reliability</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Software & Website Maintenance Retainers
              </h2>

              <p className="text-base text-[#9da4b2] leading-relaxed">
                Software doesn't stop once deployed. Our dedicated monthly engineering retainers keep your digital assets secure, up-to-date, and performing at peak capacity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <h5 className="font-bold text-white text-sm">24/7 Uptime Monitoring</h5>
                  <p className="text-xs text-gray-400 mt-1">Instant SMS/Slack alerts on server degradation or SSL renewals.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <h5 className="font-bold text-white text-sm">Security & Patching</h5>
                  <p className="text-xs text-gray-400 mt-1">Regular npm dependency upgrades and vulnerability mitigation.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <h5 className="font-bold text-white text-sm">Automated Daily Backups</h5>
                  <p className="text-xs text-gray-400 mt-1">Encrypted off-site backups with one-click disaster recovery.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#202328] border border-[#2e333d]">
                  <h5 className="font-bold text-white text-sm">Feature Iterations</h5>
                  <p className="text-xs text-gray-400 mt-1">Dedicated developer hours every month for UI tweaks and improvements.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#202328] rounded-3xl border border-[#393e47] p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">Protect Your Digital Investment</h3>
              <p className="text-sm text-[#9da4b2]">
                Avoid unexpected downtime and security breaches. Choose a flexible monthly retainer that guarantees priority engineering attention whenever you need it.
              </p>
              <div className="p-4 rounded-xl bg-[#18191d] border border-[#2e333d] space-y-2">
                <div className="text-xs text-gray-400">Standard Retainer Inclusions:</div>
                <div className="text-xs text-white space-y-1">
                  <div>✓ Response SLA within 2 hours for critical incidents</div>
                  <div>✓ Monthly speed & SEO audit reports</div>
                  <div>✓ Database pruning and cache tuning</div>
                </div>
              </div>
              <button
                onClick={() => navigate('/contact-us')}
                className="w-full py-3.5 rounded-xl font-bold bg-[#FD6703] text-black hover:bg-[#e65c00] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FD6703]/20"
              >
                <span>Inquire About Retainers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="tech-stack" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#FD6703] text-xs uppercase font-bold tracking-wider">Battle-Tested Technologies</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Technology Stack</h2>
          <p className="text-sm text-[#9da4b2]">
            We select tools known for developer productivity, unmatched speed, and enterprise reliability.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { key: 'all', label: 'All Technologies' },
              { key: 'frontend', label: 'Frontend' },
              { key: 'backend', label: 'Backend & APIs' },
              { key: 'database', label: 'Databases' },
              { key: 'cloud', label: 'Cloud & DevOps' },
              { key: 'payments', label: 'Payments' }
            ].map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveTechCategory(cat.key)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTechCategory === cat.key
                    ? 'bg-[#FD6703] text-black font-bold shadow'
                    : 'bg-[#202328] text-gray-300 hover:text-white border border-[#32363f]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#202328] border border-[#32363f] flex items-start gap-4 hover:border-[#FD6703]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#2a2e36] text-[#FD6703] flex items-center justify-center shrink-0">
                <Boxes className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{tech.name}</h4>
                <p className="text-xs text-gray-400 mt-1">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR 5-STEP DEVELOPMENT METHODOLOGY */}
      <section className="py-20 bg-[#16181b] border-t border-[#2d3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-[#FD6703] text-xs uppercase font-bold tracking-wider">How We Deliver</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our 5-Stage Development Process</h2>
            <p className="text-sm text-[#9da4b2]">
              Structured sprints, transparent staging reviews, and predictable timelines from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#202328] p-6 rounded-2xl border border-[#32363f] relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-[#FD6703]/80 mb-3 font-mono">{step.step}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-br from-[#FD6703] to-[#ff7e29] text-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Have a Project in Mind? Let's Architect It Together.
          </h2>
          <p className="text-base sm:text-lg font-medium max-w-2xl mx-auto text-[#2b2609]">
            Tell us about your requirements — whether it's our Society Maintenance System, an informational website, or a custom application.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-[#191b1f] text-white hover:bg-black transition-all shadow-xl"
            >
              Get Free Project Scope & Quote
            </Link>
            <Link
              to="/maintenance-system"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white text-black hover:bg-gray-100 transition-all shadow-lg"
            >
              View Maintenance System
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;