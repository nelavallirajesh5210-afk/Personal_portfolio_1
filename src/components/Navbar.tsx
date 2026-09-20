import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavItems: { id: PageId; label: string }[] = [
    { id: 'projects', label: 'WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090A0F]/80 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo & Status Indicator */}
          <div className="flex items-center gap-6">
            <button
              id="nav-logo-btn"
              onClick={() => handleNav('home')}
              className="group flex items-center gap-2 text-left focus:outline-none"
            >
              <span className="text-2xl font-black font-display tracking-tighter text-white group-hover:text-sky-400 transition-colors duration-200">
                MS<span className="text-sky-400">.</span>
              </span>
            </button>

            {/* College & Status Indicator */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/[0.08] border border-sky-400/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-sky-300 font-bold">
                KL UNIVERSITY
              </span>
              <span className="text-slate-500 font-mono text-[10px]">│</span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-slate-300 font-medium">
                2ND YEAR B.TECH CSE
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {primaryNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNav(item.id)}
                  className="relative group py-1 text-xs tracking-widest font-mono font-medium focus:outline-none transition-colors duration-200"
                >
                  <span
                    className={`${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-400 group-hover:text-white'
                    } transition-colors`}
                  >
                    {item.label}
                  </span>

                  {/* Subtle Underline Animation */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-300 transform origin-left ${
                      isActive
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}

            {/* Quick Resume trigger */}
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-mono text-slate-200 hover:text-white transition-all duration-200 group"
              title="View Muppalla Spoorthy Academic Resume"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              id="mobile-resume-trigger"
              onClick={onOpenResume}
              className="px-2.5 py-1.5 rounded-md bg-white/[0.08] border border-white/[0.1] text-[11px] font-mono text-slate-300"
            >
              CV
            </button>
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition"
              aria-label="Open fullscreen navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu with Large Typography */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#090A0F]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 md:hidden"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <span className="text-2xl font-black font-display tracking-tighter text-white">
                MS<span className="text-sky-400">.</span>
              </span>
              <button
                id="close-mobile-menu-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-white/[0.06] text-slate-300 hover:text-white transition"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Status indicator on mobile */}
            <div className="py-4 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono tracking-widest uppercase text-slate-300 font-medium">
                AVAILABLE FOR LEARNING & COLLABORATION
              </span>
            </div>

            {/* Large Editorial Nav Links */}
            <nav className="flex flex-col gap-5 my-auto">
              {[
                { id: 'home' as PageId, label: 'INDEX' },
                ...primaryNavItems,
              ].map((item, idx) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className="text-left group flex items-baseline justify-between py-1 focus:outline-none"
                  >
                    <span
                      className={`text-3xl sm:text-4xl font-display font-black tracking-tight transition-all duration-200 ${
                        isActive
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 translate-x-2'
                          : 'text-slate-300 group-hover:text-white group-hover:translate-x-2'
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-slate-500 group-hover:text-sky-400">
                      0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Footer inside mobile menu */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5"
              >
                <span>VIEW RESUME</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
              </button>
              <span className="text-[11px] font-mono text-slate-400">
                KL UNIVERSITY · 2029
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
