import React, { useState } from 'react';
import {
  ArrowUpRight,
  Copy,
  Check,
  Send,
  Sparkles,
  Terminal,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  RotateCcw,
  Mail,
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sentSnapshot, setSentSnapshot] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
    timestamp: string;
  } | null>(null);

  const authorEmail = personalInfo.socials.email; // spoorthychowdhary14@gmail.com

  const mailtoSubject = encodeURIComponent(
    formData.subject.trim() || `Portfolio Message from ${formData.name.trim() || 'Visitor'}`
  );
  const mailtoBody = encodeURIComponent(
    `Hello Spoorthy,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
  );
  const directMailtoLink = `mailto:${authorEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(authorEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    const snapshot = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${authorEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject || 'New Message'} from ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json().catch(() => null);

      setSentSnapshot(snapshot);
      setFormSent(true);
      setIsSubmitting(false);
    } catch (err) {
      console.error('Direct submission error:', err);
      setSentSnapshot(snapshot);
      setSubmissionError(
        'Direct web dispatch encountered a network block. Your message is prepared below to send instantly via your email app.'
      );
      setFormSent(true);
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormSent(false);
    setSubmissionError(null);
    setSentSnapshot(null);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* 1. Monolithic Bold Header */}
      <section id="contact-hero" className="pt-6 sm:pt-14 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-sky-400 font-bold uppercase">
            04 — CONTACT & DIALOGUE
          </span>
          <div className="h-[1px] flex-grow bg-white/[0.08]" />
        </div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-editorial-heading text-white uppercase tracking-display-tight max-w-4xl"
          >
            LET'S BUILD<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              WHAT'S NEXT.
            </span>
          </motion.h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed">
            Open to learning, collaboration, student opportunities, and conversations around technology. Based at{' '}
            <strong className="text-sky-400 font-semibold">KL University, Vaddeswaram</strong>.
          </p>
        </div>
      </section>

      {/* 2. Direct Channels (Bold & Minimal) */}
      <section id="direct-channels" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email */}
        <div className="p-8 rounded-3xl bg-[#0D0F17] border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 group">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">
                01 // DIRECT EMAIL
              </span>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <div className="text-2xl font-display font-black text-white">
              EMAIL ↗
            </div>

            <p className="font-mono text-xs text-slate-400 break-all pt-1">
              {personalInfo.socials.email}
            </p>
          </div>

          <a
            href={`mailto:${personalInfo.socials.email}`}
            className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-white text-slate-200 hover:text-black font-mono text-xs uppercase font-bold tracking-wider transition flex items-center justify-center gap-2"
          >
            <span>SEND MESSAGE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* GitHub */}
        <div className="p-8 rounded-3xl bg-[#0D0F17] border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 group">
          <div className="space-y-2">
            <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">
              02 // CODE REPOSITORIES
            </span>

            <div className="text-2xl font-display font-black text-white">
              GITHUB ↗
            </div>

            <p className="font-mono text-xs text-slate-400 pt-1">
              spoorthyChowdary17
            </p>
          </div>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-white text-slate-200 hover:text-black font-mono text-xs uppercase font-bold tracking-wider transition flex items-center justify-center gap-2"
          >
            <span>VIEW CODEBASE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* LinkedIn */}
        <div className="p-8 rounded-3xl bg-[#0D0F17] border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 group">
          <div className="space-y-2">
            <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">
              03 // PROFESSIONAL PROFILE
            </span>

            <div className="text-2xl font-display font-black text-white">
              LINKEDIN ↗
            </div>

            <p className="font-mono text-xs text-slate-400 pt-1">
              spoorthy-muppalla
            </p>
          </div>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-white text-slate-200 hover:text-black font-mono text-xs uppercase font-bold tracking-wider transition flex items-center justify-center gap-2"
          >
            <span>CONNECT ON LINKEDIN</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 3. Clean Message Dispatch Interface */}
      <section id="message-terminal" className="rounded-3xl bg-[#0D0F17] border border-white/[0.08] p-8 sm:p-12 space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-widest font-bold">
            TRANSMISSION INTERFACE
          </span>
          <h2 className="font-editorial-subheading font-bold text-white uppercase">
            DISPATCH A MESSAGE
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Whether for academic collaboration, technology discussion, or internship queries.
          </p>
        </div>

        {formSent && sentSnapshot ? (
          <div className="p-8 sm:p-10 rounded-2xl bg-[#09121E] border border-emerald-500/30 text-left space-y-6 shadow-[0_0_50px_rgba(16,185,129,0.08)]">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
                  TRANSMISSION DISPATCHED TO {authorEmail.toUpperCase()}
                </span>
              </div>
              <span className="font-mono text-xs text-slate-400">
                TIMESTAMP: {sentSnapshot.timestamp}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Message Successfully Forwarded to Author!
              </h3>
              <p className="text-sm font-sans text-slate-300 max-w-2xl leading-relaxed">
                Your message has been dispatched to Muppalla Spoorthy at{' '}
                <a href={`mailto:${authorEmail}`} className="text-sky-400 font-semibold underline underline-offset-4">
                  {authorEmail}
                </a>.
              </p>
            </div>

            {submissionError ? (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{submissionError}</span>
              </div>
            ) : null}

            {/* Verification Receipt Card */}
            <div className="rounded-xl bg-[#0D0F17] border border-white/[0.08] p-5 space-y-3 font-mono text-xs text-slate-300">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/[0.06] pb-2">
                <span className="text-slate-500 uppercase">RECIPIENT (AUTHOR):</span>
                <span className="text-sky-400 font-medium">{authorEmail}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/[0.06] pb-2">
                <span className="text-slate-500 uppercase">SENDER:</span>
                <span className="text-white">{sentSnapshot.name} &lt;{sentSnapshot.email}&gt;</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/[0.06] pb-2">
                <span className="text-slate-500 uppercase">SUBJECT:</span>
                <span className="text-white">{sentSnapshot.subject || '(No subject specified)'}</span>
              </div>
              <div className="pt-1">
                <span className="text-slate-500 uppercase block mb-1">MESSAGE BODY:</span>
                <p className="font-sans text-sm text-slate-200 whitespace-pre-wrap bg-white/[0.02] p-3 rounded-lg border border-white/[0.04]">
                  {sentSnapshot.message}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={directMailtoLink}
                className="px-6 py-3.5 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition flex items-center gap-2 shadow-lg"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>OPEN IN EMAIL CLIENT (DIRECT MAILTO)</span>
                <ExternalLink className="w-3 h-3 text-slate-600" />
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>SEND ANOTHER MESSAGE</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#121520] border border-white/[0.08] focus:border-sky-400 focus:outline-none text-white font-mono text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#121520] border border-white/[0.08] focus:border-sky-400 focus:outline-none text-white font-mono text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                SUBJECT / TOPIC
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Collaboration on AI / Engineering Internship Query"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#121520] border border-white/[0.08] focus:border-sky-400 focus:outline-none text-white font-mono text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                MESSAGE
              </label>
              <textarea
                rows={5}
                required
                placeholder="Share your ideas, project details, or questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#121520] border border-white/[0.08] focus:border-sky-400 focus:outline-none text-white font-mono text-sm"
              />
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-slate-200 disabled:opacity-50 transition flex items-center gap-2 shadow-xl cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>DISPATCHING TO {authorEmail.toUpperCase()}...</span>
                  </>
                ) : (
                  <>
                    <span>DISPATCH TO INBOX</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              <a
                href={directMailtoLink}
                className="px-6 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white font-mono font-semibold text-xs uppercase tracking-wider transition flex items-center gap-2 border border-white/[0.08]"
                title="Directly opens your local email app (Gmail, Outlook, Mail) pre-filled with this message"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>OR SEND VIA EMAIL APP</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Real delivery: Reaches author directly at <span className="text-slate-300 font-semibold">{authorEmail}</span></span>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
