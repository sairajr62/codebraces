import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Users, 
  Target, 
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import Spotlight from '../components/ui/Spotlight';
import TextGenerateEffect from '../components/ui/TextGenerateEffect';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import CardSpotlight from '../components/ui/CardSpotlight';
import FadeInSection from '../components/ui/FadeInSection';

const About = () => {

  const values = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#FD6703]" />,
      title: "Product-Driven Engineering",
      desc: "Because we engineer, operate, and maintain our own flagship SaaS platform (the Maintenance System), every custom project we build for clients benefits from battle-tested production resilience."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Zero Compromise on Security",
      desc: "We treat financial data, society collections, and e-commerce transactions with the highest cryptographic standards, secure role-based access, and robust audit trails."
    },
    {
      icon: <Zap className="w-6 h-6 text-sky-400" />,
      title: "High-Velocity Modern Stacks",
      desc: "We avoid outdated legacy technologies. By leveraging React, Vite, Node.js, and modern cloud databases, our digital products load quickly and scale without bottlenecks."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Direct Engineer Collaboration",
      desc: "Our clients collaborate directly with the software engineers building their systems. No miscommunications or bloated bureaucratic layers."
    }
  ];

  return (
    <div className="bg-[#0b0c0e] text-gray-200 min-h-screen">
      
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 border-b border-white/10 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#FD6703" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#262930] text-[#FD6703] border border-[#FD6703]/30 text-xs font-bold uppercase tracking-wider"
          >
            <Target className="w-3.5 h-3.5" />
            <span>Our Mission & Vision</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            <TextGenerateEffect words="We Are CodeBraces" />
          </h1>

          <p className="text-base sm:text-lg text-[#9da4b2] max-w-3xl mx-auto leading-relaxed">
            A specialized software engineering lab bridging proprietary SaaS products with bespoke web and software consulting. We build tools that make day-to-day operations effortless.
          </p>
        </div>
      </section>

      {/* Story & Dual Model */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <FadeInSection direction="left" className="lg:col-span-6 space-y-6">
            <span className="text-[#FD6703] text-xs uppercase font-bold tracking-wider">The CodeBraces Difference</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Software Crafted By Founders Who Build Real Products
            </h2>
            <p className="text-base text-[#9da4b2] leading-relaxed">
              Most digital agencies only write code for hire and walk away. At <strong>CodeBraces</strong>, our foundation was built on creating our own flagship software — the <strong>Maintenance System</strong> — to solve the massive real-world problem of chaotic society dues collection and lack of transparency.
            </p>
            <p className="text-base text-[#9da4b2] leading-relaxed">
              Managing real residents, recurring bank reconciliations, and financial audits taught us what it takes to build software that simply cannot fail. We apply that exact same discipline when designing custom software, high-converting e-commerce stores, and corporate informational websites for our clients.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/maintenance-system"
                className="px-6 py-3 rounded-xl font-bold bg-[#FD6703] text-white hover:bg-[#e65c00] transition-all flex items-center gap-2 text-sm shadow-md"
              >
                <span>Tour Flagship Maintenance System</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>

          {/* Right Highlight Box */}
          <FadeInSection direction="right" className="lg:col-span-6 bg-[#121419] rounded-3xl border border-white/10 p-8 shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-white pb-3 border-b border-white/10 flex items-center justify-between">
              <span>CodeBraces by the Numbers</span>
              <Award className="w-5 h-5 text-[#FD6703]" />
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#18191d] border border-[#2e333d]">
                <div className="text-3xl font-extrabold text-white flex">
                  <AnimatedCounter target={99} />.<AnimatedCounter target={4} decimals={0} />%
                </div>
                <div className="text-xs text-gray-400 mt-1">Society Collection Rate</div>
              </div>
              <div className="p-4 rounded-xl bg-[#18191d] border border-[#2e333d]">
                <div className="text-3xl font-extrabold text-[#FD6703] flex">
                  <AnimatedCounter target={30} />+
                </div>
                <div className="text-xs text-gray-400 mt-1">Shipped Software Deliverables</div>
              </div>
              <div className="p-4 rounded-xl bg-[#18191d] border border-[#2e333d]">
                <div className="text-3xl font-extrabold text-emerald-400 flex items-center">
                  &lt; <AnimatedCounter target={1} />s
                </div>
                <div className="text-xs text-gray-400 mt-1">Average Page Load Velocity</div>
              </div>
              <div className="p-4 rounded-xl bg-[#18191d] border border-[#2e333d]">
                <div className="text-3xl font-extrabold text-sky-400 flex">
                  <AnimatedCounter target={100} />%
                </div>
                <div className="text-xs text-gray-400 mt-1">Milestone Transparency</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#282c35] border border-white/10 text-xs text-gray-300 leading-relaxed">
              "We believe great software is defined by how effortlessly it disappears into the background while keeping operations running like clockwork."
            </div>
          </FadeInSection>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#16181b] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-[#FD6703] text-xs uppercase font-bold tracking-wider">Our Standards</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Core Engineering Principles</h2>
            <p className="text-sm text-[#9da4b2]">The values that guide every line of code we write.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <CardSpotlight className="p-6 rounded-2xl bg-[#121419] border border-[#32363f] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2a2e36] flex items-center justify-center shrink-0 relative z-10">
                    {v.icon}
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-white mb-2">{v.title}</h4>
                    <p className="text-sm text-[#9da4b2] leading-relaxed">{v.desc}</p>
                  </div>
                </CardSpotlight>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#191b1f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-base text-[#9da4b2] max-w-2xl mx-auto">
            Whether you represent a housing society committee seeking to digitize maintenance dues or a business in need of custom software, we're ready to partner with you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact-us"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-[#FD6703] text-white hover:bg-[#e65c00] transition-all shadow-lg shadow-[#FD6703]/20 animate-shimmer bg-[linear-gradient(110deg,#FD6703,45%,#ff944d,55%,#FD6703)] bg-[length:200%_100%]"
            >
              Start a Conversation
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-[#262930] hover:bg-[#323640] text-white border border-[#3e4450] transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
