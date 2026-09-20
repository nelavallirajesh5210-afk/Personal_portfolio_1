import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Bot,
  Database,
  Layers,
  Code2,
  ExternalLink,
  GraduationCap,
  Award,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import {
  personalInfo,
  careerDirections,
  projectsData,
} from '../data/portfolioData';
import { AiThinkingInteractive } from '../components/AiThinkingInteractive';
import { ProjectWasteManagementVisual } from '../components/ProjectWasteManagementVisual';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenResume }) => {
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);
  const featuredProject = projectsData[0];

  return (
    <div className="space-y-32 sm:space-y-44 pb-24">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (NO PHOTO - TYPOGRAPHY & INTERACTIVE VISUAL POWER)       */}
      {/* ========================================================================= */}
      <section id="hero-section" className="pt-8 sm:pt-16 lg:pt-20">
        <div className="space-y-12 sm:space-y-16">
          {/* Introductory micro label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="font-mono text-xs sm:text-sm tracking-widest text-slate-400 uppercase font-medium">
              HELLO, I'M
            </span>
          </motion.div>

          {/* Huge Monolithic Headline - Refined Fluid Scale */}
          <div className="space-y-4">
            <motion.h1
              id="hero-name-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-editorial-hero text-white uppercase tracking-display-tight select-none"
            >
              MUPALLA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                SPOORTHY
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-xs sm:text-sm lg:text-base text-slate-300 tracking-wider uppercase pt-2 flex flex-wrap items-center gap-2"
            >
              <span>Computer Science Student</span>
              <span className="text-sky-400">•</span>
              <span className="text-slate-200">Exploring AI</span>
              <span className="text-indigo-400">•</span>
              <span className="text-slate-200">Data</span>
              <span className="text-sky-400">•</span>
              <span className="text-slate-200">Web</span>
            </motion.p>
          </div>

          {/* Oversized Statement with Selective Gradient Text - Refined Scale */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 max-w-4xl"
          >
            <blockquote className="font-editorial-subheading font-extrabold text-white">
              "I BUILD.<br />
              I LEARN.<br />
              I EXPLORE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 underline decoration-sky-500/30 decoration-wavy decoration-2">
                WHAT'S NEXT.
              </span>"
            </blockquote>
          </motion.div>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              id="hero-explore-work-btn"
              onClick={() => onNavigate('projects')}
              className="relative group px-7 py-4 rounded-xl bg-white text-black font-mono font-bold text-xs tracking-wider uppercase overflow-hidden shadow-2xl transition-all duration-300 hover:bg-slate-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center gap-2"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-lets-connect-btn"
              onClick={() => onNavigate('contact')}
              className="group px-7 py-4 rounded-xl bg-[#131622] hover:bg-[#1A1F30] border border-white/[0.12] hover:border-sky-400/50 text-white font-mono font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Hero Information Strip: Prominently Highlighting KL UNIVERSITY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-8 border-t border-white/[0.08]"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs items-center">
              <div className="space-y-1">
                <span className="text-slate-400 block text-[10px] tracking-widest font-mono">DISCIPLINE</span>
                <span className="text-white font-bold text-sm tracking-wide">02 / CSE</span>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 block text-[10px] tracking-widest font-mono">INSTITUTION</span>
                <div className="college-highlight-pill inline-flex items-center gap-1.5 py-1 px-3">
                  <GraduationCap className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="text-white font-bold text-xs tracking-wider">KL UNIVERSITY</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 block text-[10px] tracking-widest font-mono">ACADEMIC STANDING</span>
                <span className="text-sky-400 font-bold text-sm tracking-wide">8.72 CGPA</span>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 block text-[10px] tracking-widest font-mono">EXPECTED GRADUATION</span>
                <span className="text-slate-200 font-bold text-sm tracking-wide">2029 GRAD</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 01 — ABOUT                                                     */}
      {/* ========================================================================= */}
      <section id="about-preview" className="space-y-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-sky-400 font-bold">
            01 — ABOUT
          </span>
          <div className="h-[1px] flex-grow bg-white/[0.08]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <h2 className="font-editorial-heading text-white uppercase tracking-display-tight">
              CURIOUS ABOUT<br />
              WHAT TECHNOLOGY<br />
              CAN BECOME.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-5 text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            <p>
              I am a 2nd-year B.Tech Computer Science and Engineering student at{' '}
              <span className="college-highlight-pill inline-flex items-center gap-1.5 align-middle">
                <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-white font-bold text-xs tracking-wider">KL UNIVERSITY, VADDESWARAM</span>
              </span>
              . I'm excited to explore new AI trends and emerging technologies while continuously improving my programming, problem-solving, and development skills.
            </p>

            <p className="text-slate-400">
              My current career interests span AI Engineering, Data Science, and Full-Stack Development.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="font-mono text-xs tracking-widest text-sky-400 hover:text-white uppercase flex items-center gap-2 group transition"
              >
                <span>READ DETAILED BACKGROUND</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CAREER DIRECTION — "WHERE I'M HEADED" (3 INTERACTIVE PANELS)          */}
      {/* ========================================================================= */}
      <section id="career-direction-section" className="space-y-10">
        <div className="space-y-2">
          <div className="font-mono text-xs tracking-widest text-slate-400 uppercase">
            PATHWAY EXPLORATION
          </div>
          <h2 className="font-editorial-heading text-white uppercase">
            WHERE I'M HEADED
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl font-normal">
            Three career directions I am actively exploring through coursework, coding projects, and continuous learning.
          </p>
        </div>

        {/* 3 Large Interactive Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careerDirections.map((panel) => {
            const isHovered = hoveredPanel === panel.num;
            return (
              <motion.div
                key={panel.num}
                onMouseEnter={() => setHoveredPanel(panel.num)}
                onMouseLeave={() => setHoveredPanel(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`relative rounded-2xl p-7 sm:p-9 border transition-all duration-300 flex flex-col justify-between min-h-[380px] overflow-hidden ${
                  isHovered
                    ? 'bg-gradient-to-b from-[#161A28] to-[#0E111A] border-sky-400/40 shadow-[0_10px_35px_rgba(56,189,248,0.1)]'
                    : 'bg-[#0E1018] border-white/[0.08]'
                }`}
              >
                {/* Ambient glow on hover */}
                {isHovered && (
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-sky-500/15 to-violet-500/15 rounded-full blur-2xl pointer-events-none" />
                )}

                {/* Top: Animated Number & Category */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-2xl font-black transition-colors ${
                        isHovered ? 'text-sky-400' : 'text-slate-400'
                      }`}
                    >
                      {panel.num}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                      {panel.shortCode}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-black tracking-tight text-white uppercase leading-snug">
                    {panel.title}
                  </h3>
                </div>

                {/* Middle: Description */}
                <div className="relative z-10 my-4">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {panel.description}
                  </p>
                </div>

                {/* Bottom: Focus tags */}
                <div className="relative z-10 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {panel.focusAreas.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE ELEMENT: AI THINKING MATRIX                                */}
      {/* ========================================================================= */}
      <section id="ai-thinking-section" className="space-y-6">
        <div className="space-y-1">
          <span className="font-mono text-xs tracking-widest text-sky-400 uppercase font-bold">
            EXPERIMENT // INTERACTION
          </span>
          <h2 className="font-editorial-subheading font-bold text-white uppercase">
            AI COGNITION LATTICE
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Move your cursor across the synaptic web to trigger dynamic pathway connections and cognitive keywords.
          </p>
        </div>

        <AiThinkingInteractive />
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION 02 — SELECTED WORK (FEATURED PROJECT & COMING SOON)            */}
      {/* ========================================================================= */}
      <section id="featured-work-section" className="space-y-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-sky-400 font-bold">
            02 — SELECTED WORK
          </span>
          <div className="h-[1px] flex-grow bg-white/[0.08]" />
        </div>

        {/* Large Horizontal Project Showcase */}
        <div className="space-y-8">
          <div className="rounded-3xl bg-[#0C0E16] border border-white/[0.09] p-7 sm:p-10 lg:p-12 transition-all duration-300 hover:border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Project Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 font-mono text-xs text-sky-400 uppercase font-medium">
                    PROJECT 01
                  </span>
                  <span className="font-mono text-xs text-slate-400 uppercase">
                    {featuredProject.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-editorial-subheading font-bold text-white uppercase leading-snug">
                    SMART VILLAGE<br />
                    <span className="text-slate-400">/</span> WASTE MANAGEMENT
                  </h3>
                  <p className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                    {featuredProject.tagline}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] font-mono text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('projects')}
                    className="px-6 py-3 rounded-xl bg-white text-black font-mono font-bold text-xs tracking-wider uppercase hover:bg-slate-200 transition flex items-center gap-2 group"
                  >
                    <span>VIEW PROJECT DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="https://github.com/spoorthyChowdary17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-[#141724] border border-white/[0.1] hover:border-white/30 text-white font-mono text-xs tracking-wider uppercase transition flex items-center gap-2"
                  >
                    <span>VIEW GITHUB</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Abstract Architectural Vector Visual (No Stock Photo) */}
              <div className="lg:col-span-6">
                <ProjectWasteManagementVisual />
              </div>
            </div>
          </div>

          {/* Visually Captivating "MORE PROJECTS COMING SOON" Editorial Showcase */}
          <div className="rounded-2xl bg-gradient-to-r from-[#0F121C] via-[#121624] to-[#0F121C] border border-dashed border-white/[0.12] p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-bold">
                INCUBATING // ACTIVE LAB WORK
              </span>
              <h4 className="font-editorial-title font-bold text-white uppercase">
                MORE PROJECTS COMING SOON.
              </h4>
              <p className="text-sm text-slate-400 max-w-lg">
                Currently formulating new open-source software, exploratory machine learning pipelines, and responsive web experiments.
              </p>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-white font-mono text-xs tracking-wider uppercase transition shrink-0 flex items-center gap-2 self-start sm:self-auto"
            >
              <span>EXPLORE ROADMAP</span>
              <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. EDUCATION & CREDENTIALS TEASER                                         */}
      {/* ========================================================================= */}
      <section id="education-preview-strip" className="rounded-2xl bg-[#0D0F17] border border-white/[0.08] p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-sky-400 uppercase tracking-widest font-bold">
                03 — CREDENTIALS & ACADEMICS
              </span>
              <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-mono text-[10px] uppercase font-bold">
                ACTIVE UNDERGRADUATE
              </span>
            </div>
            
            <div className="flex items-center gap-2 pt-1">
              <span className="college-highlight-pill inline-flex items-center gap-2 py-1.5 px-4 text-sm font-bold">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>KL UNIVERSITY, VADDESWARAM</span>
              </span>
            </div>

            <h3 className="font-editorial-title font-bold text-white uppercase pt-1">
              B.TECH — COMPUTER SCIENCE & ENGINEERING
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
              2nd-Year undergraduate curriculum emphasizing Data Structures & Algorithms, Python, C, Operating Systems, and Database Management.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6">
            <div className="border-l-2 border-sky-400 pl-4 space-y-0.5">
              <div className="text-3xl font-mono font-extrabold text-white">8.72</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">CGPA / 10</div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => onNavigate('education')}
                className="px-5 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-mono text-white transition flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>VIEW EDUCATION</span>
              </button>
              <button
                onClick={() => onNavigate('certifications')}
                className="px-5 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-mono text-white transition flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-indigo-400" />
                <span>PYTHON CERTIFICATE</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CONTACT FINALE: "LET'S BUILD WHAT'S NEXT."                             */}
      {/* ========================================================================= */}
      <section id="contact-finale" className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div className="space-y-4 max-w-3xl">
          <span className="font-mono text-xs tracking-widest text-sky-400 uppercase font-bold">
            04 — CONTACT
          </span>
          <h2 className="font-editorial-heading text-white uppercase tracking-display-tight">
            LET'S BUILD<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              WHAT'S NEXT.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Open to learning, collaboration, student opportunities, and conversations around technology.
          </p>
        </div>

        {/* Large Interactive Direct Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <a
            href={`mailto:${personalInfo.socials.email}`}
            className="p-6 rounded-2xl bg-[#0E1018] hover:bg-[#141824] border border-white/[0.08] hover:border-sky-400/40 transition-all duration-300 group flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                DIRECT INQUIRY
              </span>
              <div className="text-xl font-display font-black text-white group-hover:text-sky-400 transition-colors">
                EMAIL ↗
              </div>
              <span className="text-xs text-slate-400 font-mono block truncate max-w-[200px]">
                {personalInfo.socials.email}
              </span>
            </div>
            <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#0E1018] hover:bg-[#141824] border border-white/[0.08] hover:border-sky-400/40 transition-all duration-300 group flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                CODE BASE
              </span>
              <div className="text-xl font-display font-black text-white group-hover:text-sky-400 transition-colors">
                GITHUB ↗
              </div>
              <span className="text-xs text-slate-400 font-mono block truncate max-w-[200px]">
                spoorthyChowdary17
              </span>
            </div>
            <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#0E1018] hover:bg-[#141824] border border-white/[0.08] hover:border-sky-400/40 transition-all duration-300 group flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                PROFESSIONAL NETWORK
              </span>
              <div className="text-xl font-display font-black text-white group-hover:text-sky-400 transition-colors">
                LINKEDIN ↗
              </div>
              <span className="text-xs text-slate-400 font-mono block truncate max-w-[200px]">
                in/spoorthy-muppalla
              </span>
            </div>
            <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </div>
      </section>
    </div>
  );
};
