import React from 'react';
import {
  Award,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Lock,
  FileCheck,
} from 'lucide-react';
import { motion } from 'motion/react';
import { certificationsData } from '../data/portfolioData';

export const CertificationsPage: React.FC = () => {
  const pythonCert = certificationsData[0];

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* 1. Header Section */}
      <section id="certifications-hero" className="pt-6 sm:pt-14 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-sky-400 font-bold uppercase">
            CREDENTIAL VALIDATION
          </span>
          <div className="h-[1px] flex-grow bg-white/[0.08]" />
        </div>

        <div className="space-y-4">
          <h1 className="font-editorial-heading text-white uppercase tracking-display-tight">
            VERIFIED<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              CREDENTIALS.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed">
            Official technical certification documents and academic achievements of Muppalla Spoorthy at{' '}
            <strong className="text-sky-400 font-semibold">KL University, Vaddeswaram</strong>.
          </p>
        </div>
      </section>

      {/* 2. Primary Highlight: Official Python Certificate Card */}
      <section id="official-python-certificate" className="space-y-6">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#141824] via-[#0F121C] to-[#0A0C13] border-2 border-sky-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_0_60px_rgba(56,189,248,0.1)]">
          {/* Subtle Security Guilloche / Grid Pattern */}
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

          {/* Certificate Ambient Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

          {/* Inner Certificate Frame */}
          <div className="relative z-10 border border-white/[0.12] rounded-2xl p-6 sm:p-10 space-y-8 bg-black/30 backdrop-blur-sm">
            {/* Certificate Top Security Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 block font-bold">
                    OFFICIAL CERTIFICATE OF COMPLETION
                  </span>
                  <span className="text-xs font-mono text-slate-300">
                    ISSUED BY SOLOLEARN ACADEMY
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>CRYPTOGRAPHICALLY VERIFIED</span>
              </div>
            </div>

            {/* Recipient & Title */}
            <div className="space-y-3 text-center sm:text-left py-2">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
                THIS CERTIFIES THAT
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight uppercase">
                MUPPALLA SPOORTHY
              </h2>
              <div className="inline-flex items-center gap-1.5 font-mono text-xs text-sky-400">
                <span>B.Tech CSE Student · KL University, Vaddeswaram</span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed pt-1">
                has successfully completed comprehensive coursework and practical coding assessments demonstrating proficiency in fundamental and intermediate <strong>Python Programming</strong>.
              </p>
            </div>

            {/* Metadata Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08] font-mono text-xs">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                <span className="text-[10px] text-slate-400 uppercase block tracking-wider">
                  CERTIFICATE ID
                </span>
                <span className="text-sky-400 font-bold tracking-wider text-sm">
                  {pythonCert.certificateId}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                <span className="text-[10px] text-slate-400 uppercase block tracking-wider">
                  DATE OF ISSUANCE
                </span>
                <span className="text-white font-bold tracking-wider text-sm">
                  {pythonCert.issueDate}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                <span className="text-[10px] text-slate-400 uppercase block tracking-wider">
                  AUTHORITY
                </span>
                <span className="text-white font-bold tracking-wider text-sm">
                  {pythonCert.issuer}
                </span>
              </div>
            </div>

            {/* Verification Link Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <FileCheck className="w-4 h-4 text-sky-400" />
                <span>DIRECT RECORD: sololearn.com/certificates/CC-KWF3VUPQ</span>
              </div>

              <a
                id="verify-python-cert-btn"
                href={pythonCert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-mono font-bold text-xs tracking-wider uppercase transition flex items-center gap-2 group shadow-xl"
              >
                <span>OPEN OFFICIAL VERIFICATION</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Upcoming Technical Milestones */}
      <section id="upcoming-certifications" className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-widest font-bold">
            NEXT TARGETS
          </span>
          <h3 className="font-editorial-subheading font-bold text-white uppercase">
            ACTIVE CERTIFICATION HORIZONS
          </h3>
          <p className="text-sm text-slate-400 max-w-xl">
            Target certifications currently being prepared for alongside the 2nd-year B.Tech CSE degree.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 sm:p-9 rounded-2xl bg-[#0E1018] border border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-sky-400 font-bold uppercase">
                TARGET 01 // AI & DATA
              </span>
              <span className="px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 font-mono text-[10px] uppercase">
                IN PREPARATION
              </span>
            </div>
            <h4 className="text-xl font-display font-black text-white uppercase">
              TensorFlow / Machine Learning Specialization
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Systematic mastery of regression models, feature transformation, neural classification, and loss minimization.
            </p>
          </div>

          <div className="p-7 sm:p-9 rounded-2xl bg-[#0E1018] border border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-indigo-400 font-bold uppercase">
                TARGET 02 // CLOUD
              </span>
              <span className="px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 font-mono text-[10px] uppercase">
                IN PREPARATION
              </span>
            </div>
            <h4 className="text-xl font-display font-black text-white uppercase">
              Google Cloud Certified Associate Cloud Engineer
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Foundational cloud architecture, container management, storage buckets, and secure identity and access control.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
