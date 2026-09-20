import React from 'react';
import {
  Sparkles,
  BookOpen,
  Terminal,
  Code,
  Cpu,
  FileCode,
  Layout,
  Palette,
  GitBranch,
  Github,
  MessageSquareCode,
  BrainCircuit,
  Bot,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import { skillsData, currentlyLearningItems } from '../data/portfolioData';
import { TechnologyConstellation } from '../components/TechnologyConstellation';

export const SkillsPage: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-sky-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-blue-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-violet-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-emerald-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-rose-400" />;
      case 'Github':
        return <Github className="w-5 h-5 text-slate-200" />;
      case 'MessageSquareCode':
        return <MessageSquareCode className="w-5 h-5 text-amber-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-sky-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      default:
        return <Terminal className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* 1. Header Section */}
      <section id="skills-hero" className="pt-6 sm:pt-14 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-sky-400 font-bold uppercase">
            TOOLKIT & CONSTELLATION
          </span>
          <div className="h-[1px] flex-grow bg-white/[0.08]" />
        </div>

        <div className="space-y-4">
          <h1 className="font-editorial-heading text-white uppercase tracking-display-tight">
            TECHNICAL<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              CONSTELLATION.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed">
            A visual overview of core programming languages, modern web building blocks, developer tooling, and active AI explorations at <strong className="text-sky-400 font-semibold">KL University</strong>.
          </p>
        </div>
      </section>

      {/* 2. Interactive Constellation Component */}
      <section id="constellation-showcase">
        <TechnologyConstellation />
      </section>

      {/* 3. "CURRENTLY LEARNING" Text Section */}
      <section id="currently-learning" className="rounded-2xl bg-[#0D0F17] border border-white/[0.08] p-8 sm:p-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-white/[0.06]">
          <div className="space-y-1">
            <span className="font-mono text-xs text-sky-400 uppercase tracking-widest font-bold">
              ACTIVE HORIZONS
            </span>
            <h2 className="font-editorial-subheading font-bold text-white uppercase">
              CURRENTLY LEARNING
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400">
            DISCIPLINE OVER SHORTCUTS · ONGOING STUDY
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentlyLearningItems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#121520] border border-white/[0.06] hover:border-sky-500/30 transition-all flex items-start gap-3.5"
            >
              <span className="font-mono text-xs text-sky-400 font-bold mt-0.5">
                0{idx + 1}
              </span>
              <div>
                <h3 className="font-display font-bold text-white text-base leading-snug">
                  {item}
                </h3>
                <span className="font-mono text-[10px] text-slate-400 uppercase mt-1 block">
                  Undergraduate Exploration
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 text-xs font-mono text-slate-400 leading-relaxed border-t border-white/[0.04]">
          * Transparent Academic Note: Skills reflect active coursework at KL University and hands-on independent project practice. No claims of artificial senior expertise.
        </div>
      </section>

      {/* 4. Categorized Detailed Matrix */}
      <section id="skills-detailed-grid" className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-widest font-bold">
            SPECIFICATION MATRIX
          </span>
          <h2 className="font-editorial-subheading font-bold text-white uppercase">
            CORE CAPABILITY DIRECTORY
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.id || `${skill.category}-${skill.name}`}
              className="p-6 rounded-2xl bg-[#0E1018] border border-white/[0.08] hover:border-sky-400/40 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] group-hover:bg-sky-500/10 transition-colors">
                    {getIcon(skill.iconName)}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-white/[0.04]">
                    {skill.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-display font-black text-white uppercase tracking-tight">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-xs text-sky-400 font-medium block mt-0.5">
                    {skill.levelBadge}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between font-mono text-[10px] text-slate-400">
                <span>KL UNIVERSITY CSE</span>
                <span className="text-slate-400 group-hover:text-sky-400 transition-colors">
                  VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
