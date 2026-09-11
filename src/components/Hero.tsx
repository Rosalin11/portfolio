import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Copy, Check, ExternalLink, Github, Linkedin, Mail, FileText } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          {/* Main Title */}
          <h1
            id="hero-main-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1] mb-6"
          >
            Engineering scalable distributed systems & high-craft web software.
          </h1>

          {/* Subtitle / Bio summary */}
          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-2xl"
          >
            I'm <span className="font-semibold text-zinc-900 dark:text-zinc-100">{PERSONAL_INFO.name}</span>, a {PERSONAL_INFO.title.toLowerCase()} based in {PERSONAL_INFO.location}. I build high-concurrency event brokers, resilient cloud architectures, and snappy interactive applications.
          </p>

          {/* Actions & CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
            <a
              id="hero-view-work-cta"
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-50 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-950 text-sm font-semibold tracking-tight transition-all shadow-xs"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              id="hero-contact-cta"
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 text-sm font-medium tracking-tight transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <span>Contact Me</span>
            </button>

            <button
              id="hero-view-resume-cta"
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-sm font-medium transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>
          </div>

          {/* Direct Email copy badge & social profiles */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="text-zinc-400 dark:text-zinc-500">Email:</span>
              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-colors cursor-pointer group"
                title="Click to copy email address"
              >
                <span>{PERSONAL_INFO.email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200" />
                )}
              </button>
              {copied && (
                <span className="text-emerald-600 dark:text-emerald-400 font-sans font-medium text-xs">
                  Copied!
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <a
                id="hero-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Highlight Metrics Strip */}
        <div
          id="hero-metrics-strip"
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80">
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1">
              8+
            </div>
            <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Years Engineering
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80">
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1">
              45k evt/s
            </div>
            <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Peak Event Throughput
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80">
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1">
              99.995%
            </div>
            <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Production Uptime SLA
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80">
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1">
              140k+
            </div>
            <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Active Users Scaled
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
