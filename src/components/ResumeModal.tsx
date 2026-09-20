import React from 'react';
import {
  X,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  Phone,
} from 'lucide-react';
import {
  personalInfo,
  educationData,
  certificationsData,
  skillsData,
  projectsData,
  positionsOfResponsibility,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-700">
              Resume Document View · Muppalla Spoorthy
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs transition flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Paper Canvas */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 text-slate-800 bg-white">
          {/* Header */}
          <div className="text-center border-b border-slate-200 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
              MUPPALLA SPOORTHY
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-600">
              B.Tech in Computer Science & Engineering (2nd Year) • KL University, Vaddeswaram
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {personalInfo.socials.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {personalInfo.socials.phone}
              </span>
              <span>•</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 flex items-center gap-1"
              >
                <Github className="w-3 h-3" />
                GitHub
              </a>
              <span>•</span>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 flex items-center gap-1"
              >
                <Linkedin className="w-3 h-3" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 font-mono">
              Education
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between text-xs">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{educationData.institution}</h3>
                  <p className="text-slate-600">{educationData.degree}</p>
                </div>
                <div className="sm:text-right mt-1 sm:mt-0 font-mono text-slate-500">
                  <span className="block">{educationData.academicPeriod}</span>
                  <span className="font-bold text-indigo-700">CGPA: {educationData.cgpa}</span>
                </div>
              </div>

              {educationData.priorEducation?.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-start justify-between text-xs pt-2 border-t border-slate-100"
                >
                  <div>
                    <h4 className="font-semibold text-slate-800">{item.institution}</h4>
                    <p className="text-slate-500">{item.board}</p>
                  </div>
                  <div className="sm:text-right mt-1 sm:mt-0 font-mono text-slate-500">
                    <span className="block">{item.period}</span>
                    <span className="font-semibold text-slate-700">{item.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 font-mono">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="text-slate-900">Languages:</strong>{' '}
                <span className="text-slate-600">Python, C, Java, JavaScript, HTML, CSS</span>
              </div>
              <div>
                <strong className="text-slate-900">Frameworks / Libs:</strong>{' '}
                <span className="text-slate-600">React.js, Node.js, Express.js, Django, Bootstrap</span>
              </div>
              <div>
                <strong className="text-slate-900">Developer Tools:</strong>{' '}
                <span className="text-slate-600">Git, GitHub, VS Code, PyCharm, Postman</span>
              </div>
              <div>
                <strong className="text-slate-900">Databases & Cloud:</strong>{' '}
                <span className="text-slate-600">MySQL, SQLite, AWS (Basics), Google Cloud (Basics)</span>
              </div>
            </div>
          </section>

          {/* Academic & Engineering Projects */}
          <section className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 font-mono">
              Projects
            </h2>
            <div className="space-y-4 text-xs">
              {projectsData.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900">{proj.title}</h3>
                    <span className="text-slate-500 font-mono text-[11px]">
                      {proj.timeline || proj.category}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{proj.description}</p>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Tech: {proj.technologies?.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 font-mono">
              Certifications
            </h2>
            <div className="space-y-2 text-xs">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900">{cert.title}</h3>
                    <p className="text-slate-500">
                      {cert.issuer} • Credential ID: {cert.certificateId}
                    </p>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">{cert.issueDate}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Positions of Responsibility */}
          <section className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 font-mono">
              Positions of Responsibility
            </h2>
            <div className="space-y-2 text-xs">
              {positionsOfResponsibility.map((item, idx) => (
                <div key={idx} className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-500">{item.organization}</p>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">{item.period}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
