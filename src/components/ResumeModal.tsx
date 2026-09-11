import React, { useEffect } from 'react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Printer, Download, Mail, MapPin, Globe, ExternalLink, Briefcase, GraduationCap, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/75 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-zinc-900 dark:text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm z-10 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">Curriculum Vitae</span>
            <span className="text-xs text-zinc-400">· Last updated 2025</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="print-resume-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:space-y-6">
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base text-zinc-600 dark:text-zinc-300 font-medium mb-3">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3 h-3" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3 h-3" />
                <span>github.com/alexrivera-dev</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
              Executive Summary
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {PERSONAL_INFO.bio} Extensive record of scaling high-throughput message brokers in Go, deploying distributed Kubernetes clusters, and authoring zero-latency WebAssembly graphics engines in TypeScript and Rust.
            </p>
          </div>

          {/* Core Technical Proficiencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-1">
                  Languages & Systems:
                </span>
                <span className="text-zinc-600 dark:text-zinc-400 font-mono">
                  Go, TypeScript, Rust, Python, SQL, C++, Bash
                </span>
              </div>

              <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-1">
                  Distributed & Data:
                </span>
                <span className="text-zinc-600 dark:text-zinc-400 font-mono">
                  Apache Kafka, Redis, PostgreSQL, gRPC, RabbitMQ, pgvector
                </span>
              </div>

              <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-1">
                  Frontend & Rendering:
                </span>
                <span className="text-zinc-600 dark:text-zinc-400 font-mono">
                  React 19, Next.js, WebAssembly, WebSockets, Canvas/WebGL, Tailwind
                </span>
              </div>

              <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-1">
                  Infrastructure & DevOps:
                </span>
                <span className="text-zinc-600 dark:text-zinc-400 font-mono">
                  Kubernetes, Docker, Terraform, Prometheus, OpenTelemetry, AWS, GCP
                </span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Professional Work History
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                        {exp.role}
                      </span>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
                        {' '}— {exp.company}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                      {exp.period} · {exp.location}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-300">
                    {exp.description}
                  </p>

                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Accreditations */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
              Education & Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                  B.S. in Computer Science
                </div>
                <div className="text-zinc-500 dark:text-zinc-400">
                  University of Washington · Magna Cum Laude
                </div>
              </div>
              <div>
                <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Certified Kubernetes Administrator (CKA)
                </div>
                <div className="text-zinc-500 dark:text-zinc-400">
                  Cloud Native Computing Foundation (CNCF)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 flex items-center justify-between print:hidden">
          <span className="text-xs text-zinc-500">
            Available for technical phone screens & architecture discussions
          </span>

          <button
            id="resume-contact-trigger-btn"
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-xs font-semibold transition-colors cursor-pointer"
          >
            Connect with Alex
          </button>
        </div>
      </div>
    </div>
  );
};
