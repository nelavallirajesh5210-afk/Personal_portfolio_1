import React from 'react';
import {
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  BookOpen,
  Award,
  Terminal,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo, educationData, positionsOfResponsibility } from '../data/portfolioData';

interface AboutPageProps {
  onOpenResume: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenResume }) => {
  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* 1. Large Editorial Header Section */}
      <section id="about-hero-editorial" className="pt-6 sm:pt-14 space-y-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-sky-400 font-bold uppercase">
            01 — ABOUT
          </span>
          <div className="h-[1px] flex-grow bg-white/[0.08]" />
        </div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-editorial-heading text-white uppercase max-w-4xl tracking-display-tight"
          >
            CURIOUS ABOUT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-sky-300">
              WHAT TECHNOLOGY
            </span><br />
            CAN BECOME.
          </motion.h1>

          <div className="pt-4 max-w-3xl space-y-5 text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
            <p>
              I am a 2nd-year B.Tech Computer Science and Engineering student at{' '}
              <span className="college-highlight-pill inline-flex items-center gap-1.5 align-middle">
                <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                <span className="tracking-wide">KL UNIVERSITY, VADDESWARAM</span>
              </span>
              . I'm excited to explore new AI trends and emerging technologies while continuously improving my programming, problem-solving, and development skills.
            </p>

            <p className="text-slate-400">
              My current career interests span AI Engineering, Data Science, and Full-Stack Development.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Educational & Philosophical Foundation */}
      <section id="academic-philosophy" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Academic Metadata Canvas */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-2xl bg-[#0D0F17] border border-white/[0.08] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <span className="font-mono text-xs text-sky-400 uppercase tracking-widest">
                UNDERGRADUATE PROFILE
              </span>
              <span className="font-mono text-xs text-slate-400">
                2025–2029
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase tracking-wider">
                  NAME
                </span>
                <span className="text-white font-bold text-sm tracking-wide">
                  {personalInfo.name}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-sky-500/[0.07] border border-sky-500/25">
                <span className="text-sky-400 block text-[10px] uppercase tracking-wider font-bold">
                  AFFILIATION & INSTITUTION
                </span>
                <span className="text-white font-bold text-sm tracking-wide flex items-center gap-1.5 pt-0.5">
                  <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="college-highlight-text text-base">{personalInfo.college}</span>
                </span>
              </div>

              <div>
                <span className="text-slate-400 block text-[10px] uppercase tracking-wider">
                  DEGREE & DISCIPLINE
                </span>
                <span className="text-slate-200 font-bold text-sm tracking-wide">
                  {personalInfo.degree}
                </span>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider">
                    CURRENT STANDING
                  </span>
                  <span className="text-sky-400 font-bold text-base">
                    8.72 / 10 CGPA
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider">
                    CURRENT YEAR
                  </span>
                  <span className="text-slate-200 font-bold text-base">
                    2nd Year
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenResume}
              className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-white font-mono text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
            >
              <span>INSPECT VERIFIED RESUME</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>
        </div>

        {/* Right Column: Editorial Deep-Dive */}
        <div className="lg:col-span-7 space-y-8 text-slate-300 leading-relaxed">
          <div className="space-y-4">
            <h2 className="font-editorial-subheading font-bold text-white uppercase">
              THE CONVERGENCE OF CODE & INTELLIGENCE
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Technology is transitioning from static deterministic codebases to dynamic, probabilistic systems. Rather than viewing artificial intelligence as an isolated tool, I approach it as a collaborative amplifier for human reasoning, community engineering, and practical software design.
            </p>
            <p className="text-sm sm:text-base text-slate-400">
              At KL University, my coursework provides a rigorous grounding across computational theory, data structures, and foundational programming in Python, C, and Java. Concurrently, I dedicate substantial independent hours to reading machine learning literature, exploring prompt architectures, and implementing clean user interfaces.
            </p>
          </div>

          {/* Academic Focus Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.06]">
            <div className="p-5 rounded-xl bg-[#0F121C] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-bold">
                <Terminal className="w-4 h-4" />
                <span>RIGOROUS FOUNDATIONS</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Solid mathematical grounding, pointer and memory management in C, object hierarchies in Java, and algorithmic optimization in Python.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0F121C] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold">
                <Sparkles className="w-4 h-4" />
                <span>ADAPTIVE LEARNING</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Curious experimentation with prompt tuning, model capabilities, and structured data exploration to solve real human problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership & Campus Contributions */}
      <section id="campus-leadership" className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-widest font-bold">
            COMMUNITY & RESPONSIBILITY
          </span>
          <h2 className="font-editorial-subheading font-bold text-white uppercase">
            CAMPUS LEADERSHIP
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Active roles held within the Department of Computer Science & Engineering at KL University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {positionsOfResponsibility.map((pos, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 rounded-2xl bg-[#0D0F17] border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">
                  0{idx + 1} // LEADERSHIP
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {pos.period}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-display font-black text-white uppercase">
                  {pos.title}
                </h3>
                <div className="font-mono text-xs text-slate-300">
                  {pos.organization}
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                {pos.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
