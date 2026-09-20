import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroBackground } from './components/HeroBackground';
import { ResumeModal } from './components/ResumeModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EducationPage } from './pages/EducationPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  // Synchronize with URL hash if available (e.g. #projects, #skills)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'skills',
        'projects',
        'education',
        'certifications',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenResume={() => setResumeModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage onOpenResume={() => setResumeModalOpen(true)} />
        );
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'education':
        return <EducationPage />;
      case 'certifications':
        return <CertificationsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenResume={() => setResumeModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090A0F] text-slate-100 font-sans flex flex-col justify-between overflow-x-hidden selection:bg-sky-500/30 selection:text-white">
      {/* Dynamic Neural Canvas & Micro Grid Lighting */}
      <HeroBackground />

      {/* Floating Minimal Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Multi-Page Editorial Content Area */}
      <main className="relative z-10 flex-grow max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />

      {/* High-Resolution Printable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
