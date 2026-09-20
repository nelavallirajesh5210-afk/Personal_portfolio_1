import React, { useState } from 'react';
import {
  ArrowUpRight,
  Sparkles,
  Github,
  CheckCircle2,
  Calendar,
  Layers,
  Terminal,
  Cpu,
  Info,
} from 'lucide-react';
import { motion } from 'motion/react';
import { projectsData } from '../data/portfolioData';
import { ProjectWasteManagementVisual } from '../components/ProjectWasteManagementVisual';

export const ProjectsPage: React.FC = () => {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const mainProject = projectsData[0]; // Smart Village / Waste Management
  const academicProjects = projectsData.slice(1);

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* 1. Header Section */}
      <section id="projects-hero" className="pt-6 sm:pt-14 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-sky-400 font-bold uppercase">
            02 — SELECTED WORK
          </span>
          <div className="h-[1px] flex-grow bg-white/[0.08]" />
        </div>

        <div className="space-y-4">
          <h1 className="font-editorial-heading text-white uppercase tracking-display-tight">
            SELECTED<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              WORK & LABS.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed">
            Community-centered academic research, environmental software concepts, and exploratory computer science implementations developed at{' '}
            <strong className="text-sky-400 font-semibold">KL University, Vaddeswaram</strong>.
          </p>
        </div>
      </section>

      {/* 2. PROJECT 01: Large Horizontal Showcase */}
      <section id="featured-project-01" className="space-y-6">
        <div className="rounded-3xl bg-[#0D0F17] border border-white/[0.09] p-8 sm:p-12 lg:p-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Deep Context */}
            <div className="lg:col-span-6 space-y-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 font-mono text-xs text-sky-400 uppercase font-bold tracking-wider">
                  PROJECT 01
                </span>
                <span className="college-highlight-pill inline-flex items-center gap-1.5 py-1 px-3 text-xs">
                  <span>KL UNIVERSITY FIELD STUDY</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-slate-300">
                  Academic / Community
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-white uppercase leading-snug">
                  SMART VILLAGE<br />
                  <span className="text-sky-400">/</span> WASTE MANAGEMENT
                </h2>
                <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  KL UNIVERSITY COMMUNITY FIELD STUDY · 2025–2026
                </div>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                A community-focused academic project addressing open dumping of waste and exploring practical approaches to improve waste-management awareness and sanitation in suburban and village environments.
              </p>

              {/* Research Methodology Pill Grid */}
              <div className="space-y-3 pt-2">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold">
                  PROJECT HIGHLIGHTS & ARCHITECTURE
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#131622] border border-white/[0.06] space-y-1">
                    <span className="text-sky-400 font-mono font-bold block">01 / DUMPING MITIGATION</span>
                    <span className="text-slate-300">Mapped unmonitored garbage accumulation points in village sectors.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#131622] border border-white/[0.06] space-y-1">
                    <span className="text-emerald-400 font-mono font-bold block">02 / CIVIC SENSORS</span>
                    <span className="text-slate-300">Simulated fill-level monitoring for timely municipal truck dispatches.</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {mainProject.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] font-mono text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowProjectModal(true)}
                  className="px-6 py-3.5 rounded-xl bg-white text-black font-mono font-bold text-xs tracking-wider uppercase hover:bg-slate-200 transition flex items-center gap-2 group shadow-xl"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <a
                  href="https://github.com/spoorthyChowdary17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#131622] hover:bg-[#181C2C] border border-white/[0.1] text-white font-mono text-xs tracking-wider uppercase transition flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-sky-400" />
                  <span>REPOSITORY LINK</span>
                </a>
              </div>
            </div>

            {/* Right Column: Abstract Architectural Vector Visual */}
            <div className="lg:col-span-6">
              <ProjectWasteManagementVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 3. ADDITIONAL ACADEMIC COURSEWORK PROJECTS */}
      <section id="additional-coursework-projects" className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-widest font-bold">
            COURSEWORK & SYSTEM SOFTWARE
          </span>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            ACADEMIC IMPLEMENTATIONS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academicProjects.map((proj, idx) => (
            <div
              key={proj.id}
              className="p-8 rounded-2xl bg-[#0E1018] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">
                    0{idx + 2} // {proj.category}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    {proj.timeline || 'Academic Lab'}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-2xl font-display font-black text-white uppercase tracking-tight">
                    {proj.title}
                  </h4>
                  <p className="font-mono text-xs text-slate-400 uppercase tracking-wide">
                    {proj.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
                <span className="text-slate-400">KL UNIVERSITY LAB</span>
                <a
                  href="https://github.com/spoorthyChowdary17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-white flex items-center gap-1 transition"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. "MORE PROJECTS COMING SOON." EDITORIAL ARCHITECTURAL SHOWCASE */}
      <section id="more-projects-coming-soon" className="rounded-3xl bg-gradient-to-b from-[#111420] to-[#0A0C13] border border-dashed border-white/[0.14] p-8 sm:p-14 space-y-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping" />
            <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-bold">
              ACTIVE LAB WORK & ROADMAP
            </span>
          </div>

          <h2 className="font-editorial-heading text-white uppercase">
            MORE PROJECTS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300">
              COMING SOON.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            I am currently designing and developing new open-source repositories exploring AI inference APIs, predictive analytics pipelines, and performant web interfaces.
          </p>
        </div>

        {/* Dynamic Architectural Blueprint Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-[#141724]/70 border border-white/[0.07] space-y-3">
            <div className="font-mono text-xs text-sky-400 font-bold">
              PIPELINE 01 // EXPLORATORY
            </div>
            <h4 className="text-lg font-display font-bold text-white uppercase">
              AI Query & Reasoning Agent
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Evaluating lightweight LLM orchestration, structured output parsing, and context-aware responses for student documentation.
            </p>
            <div className="font-mono text-[10px] text-slate-400 uppercase pt-2">
              STATUS: ARCHITECTURAL DESIGN
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#141724]/70 border border-white/[0.07] space-y-3">
            <div className="font-mono text-xs text-emerald-400 font-bold">
              PIPELINE 02 // DATA SCIENCE
            </div>
            <h4 className="text-lg font-display font-bold text-white uppercase">
              Predictive Academic Analytics
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Processing tabular university trends with Python, pandas, and scikit-learn models to forecast learning outcomes.
            </p>
            <div className="font-mono text-[10px] text-slate-400 uppercase pt-2">
              STATUS: DATA COLLECTION
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#141724]/70 border border-white/[0.07] space-y-3">
            <div className="font-mono text-xs text-violet-400 font-bold">
              PIPELINE 03 // FULL-STACK
            </div>
            <h4 className="text-lg font-display font-bold text-white uppercase">
              Next-Gen Campus Hub
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              A high-velocity student collaboration portal built with modern TypeScript, modular APIs, and real-time event updates.
            </p>
            <div className="font-mono text-[10px] text-slate-400 uppercase pt-2">
              STATUS: WIREFRAMING & API SPEC
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal for "VIEW PROJECT ↗" */}
      {showProjectModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowProjectModal(false)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-[#0E1018] border border-white/[0.15] p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="font-mono text-xs text-sky-400 uppercase font-bold tracking-wider">
                PROJECT DOSSIER // SMART VILLAGE
              </span>
              <button
                onClick={() => setShowProjectModal(false)}
                className="font-mono text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/[0.05]"
              >
                CLOSE [ESC]
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-display font-black text-white uppercase">
                SMART VILLAGE / WASTE MANAGEMENT
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                This project represents a comprehensive community and academic initiative at KL University. The objective was to investigate open dumping hazards in residential village clusters, propose decentralized sensor collection points, and foster civic sanitation consciousness.
              </p>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-2">
                <div className="text-xs font-mono text-sky-400 font-semibold">
                  STATUS & LIVE DEMO URL:
                </div>
                <p className="text-xs text-slate-400">
                  This academic portfolio link is currently set as a placeholder. The public demonstration repository and documentation will be linked as deployment assets finalize on GitHub.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <a
                href="https://github.com/spoorthyChowdary17"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-sky-500 text-black font-mono text-xs font-bold uppercase hover:bg-sky-400 transition"
              >
                VISIT AUTHOR GITHUB
              </a>
              <button
                onClick={() => setShowProjectModal(false)}
                className="px-4 py-2.5 rounded-lg bg-white/[0.08] text-white font-mono text-xs uppercase hover:bg-white/[0.15] transition"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
