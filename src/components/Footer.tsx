import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="relative z-10 border-t border-white/[0.08] bg-[#090A0F] pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        {/* Top Minimal Brand & Statement Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/[0.06]">
          <div className="space-y-3">
            <div className="text-3xl font-black font-display tracking-tighter text-white">
              MS<span className="text-sky-400">.</span>
            </div>
            <div className="font-display text-lg font-bold tracking-tight text-slate-200">
              MUPALLA SPOORTHY
            </div>
            <p className="font-mono text-sm tracking-wide text-sky-400/90">
              "Learning. Building. Exploring."
            </p>
          </div>

          {/* Connected Channels */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs tracking-wider">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition group"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition group"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition group"
            >
              <span>EMAIL</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Metadata & Back-to-Top Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2 flex-wrap">
            <span>© 2026 Muppalla Spoorthy</span>
            <span>·</span>
            <span className="text-sky-400 font-bold">KL UNIVERSITY, VADDESWARAM</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
