import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-portfolio-footer"
      className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 py-12 text-zinc-600 dark:text-zinc-400 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-zinc-400">·</span>
              <span className="text-xs text-zinc-500">
                {PERSONAL_INFO.title}
              </span>
            </div>
            <p className="text-xs text-zinc-500">
              Architecting dependable distributed infrastructure & high-fidelity web experiences.
            </p>
          </div>

          {/* Nav links & Socials */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                id="footer-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-email-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              id="footer-scroll-to-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with React 19, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
