import React from 'react';
import {
  GraduationCap,
  Calendar,
  BookOpen,
  CheckCircle2,
  Award,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { educationData } from '../data/portfolioData';

export const EducationPage: React.FC = () => {
  const relevantCoursework = [
    { name: 'Data Structures & Algorithms', tag: 'Core Theory', desc: 'Complexity analysis, trees, graphs, sorting, and dynamic programming.' },
    { name: 'Python Programming', tag: 'Scripting & AI', desc: 'Object-oriented structures, automation, data wrangling, and libraries.' },
    { name: 'C Programming', tag: 'Systems', desc: 'Pointers, explicit memory allocation, and algorithmic foundational structures.' },
    { name: 'Java', tag: 'OOP Architecture', desc: 'Robust modular class systems, interfaces, and multithreaded primitives.' },
    { name: 'Operating Systems', tag: 'Core Systems', desc: 'Process lifecycle, concurrency, memory paging, and virtual file structures.' },
    { name: 'Database Management Systems', tag: 'Data Architecture', desc: 'Relational schemas, SQL queries, indexing, and ACID transaction guarantees.' },
  ];

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* 1. Header Section */}
      <section id="education-hero" className="pt-6 sm:pt-14 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-sky-400 font-bold uppercase">
            ACADEMIC PROGRESSION
          </span>
          <div className="h-[1px] flex-grow bg-white/[0.08]" />
        </div>

        <div className="space-y-4">
          <h1 className="font-editorial-heading text-white uppercase tracking-display-tight">
            ACADEMIC<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              TRAJECTORY.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed">
            Progressive computer science fundamentals, technical coursework, and academic standing at{' '}
            <strong className="text-sky-400 font-semibold">KL University, Vaddeswaram</strong>.
          </p>
        </div>
      </section>

      {/* 2. Timeline / Progression Layout */}
      <section id="timeline-progression" className="space-y-12">
        <div className="relative border-l-2 border-white/[0.1] pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-16">
          {/* Milestone 1: KL University (Active) */}
          <div className="relative group">
            {/* Timeline Node Ring */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#090A0F] border-2 border-sky-400 flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.5)]">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            </div>

            <div className="rounded-3xl bg-[#0D0F17] border-2 border-sky-500/30 p-8 sm:p-12 space-y-8 shadow-[0_0_40px_rgba(56,189,248,0.08)]">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="college-highlight-pill inline-flex items-center gap-1.5 py-1 px-3 text-xs">
                      <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                      <span>OFFICIAL UNIVERSITY ENROLLMENT</span>
                    </span>
                    <span className="font-mono text-xs text-sky-400 uppercase tracking-widest font-bold">
                      CURRENT
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight uppercase">
                    <span className="college-highlight-text">{educationData.institution}</span>
                  </h2>
                  <div className="text-slate-300 font-mono text-sm sm:text-base">
                    {educationData.degree} · <span className="text-white font-semibold">2nd Year</span>
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col sm:items-end gap-3 sm:gap-1">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                    2025 – 2029
                  </span>
                  <div className="font-mono text-xl sm:text-2xl font-black text-sky-400">
                    CGPA: {educationData.cgpa} <span className="text-xs text-slate-400">/ 10</span>
                  </div>
                </div>
              </div>

              {/* Coursework Directory */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-xs text-slate-300 uppercase tracking-widest font-bold">
                    RELEVANT ACADEMIC COURSEWORK
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    6 CORE CURRICULUM MODULES
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relevantCoursework.map((course, idx) => (
                    <div
                      key={course.name}
                      className="p-5 rounded-2xl bg-[#121520] border border-white/[0.06] hover:border-sky-500/30 transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-sky-400 font-bold">
                          0{idx + 1}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400 uppercase px-2 py-0.5 rounded bg-white/[0.04]">
                          {course.tag}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-white text-base leading-snug">
                        {course.name}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {course.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Prior Academic Milestones */}
          {educationData.priorEducation?.map((prior, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[27px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-[#090A0F] border-2 border-slate-600 group-hover:border-slate-400 transition" />

              <div className="rounded-2xl bg-[#0D0F17]/80 border border-white/[0.06] p-6 sm:p-8 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                      PRIOR EDUCATION // {prior.period}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white uppercase">
                      {prior.institution}
                    </h3>
                  </div>

                  <div className="font-mono text-xs text-sky-400 font-bold">
                    {prior.score}
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-mono">
                  {prior.board}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
