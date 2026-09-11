import React from 'react';
import { PERSONAL_INFO, TESTIMONIALS } from '../data/portfolioData';
import { User, Terminal, Quote, ArrowRight, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Core Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                <User className="w-4 h-4" />
                <span>Background & Philosophy</span>
              </div>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4"
              >
                Building software with structural integrity and empathetic craftsmanship.
              </h2>
            </div>

            <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                I am a software engineer with over eight years of experience designing and shipping full-stack products, distributed systems, and real-time developer tooling. My journey started with building bespoke web applications and quickly evolved into architecting distributed event processing systems handling tens of thousands of requests per second.
              </p>
              <p>
                I believe high-performance engineering isn't just about micro-optimizations—it is about clean boundaries, type safety, deterministic state management, and deeply respecting the user's time and device resources.
              </p>
            </div>

            {/* Core Engineering Values */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  Resilience First
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Every distributed service must embrace eventual failure, graceful degradations, and zero data loss.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80">
                <Zap className="w-5 h-5 text-amber-500 mb-2" />
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  60 FPS Fidelity
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  User interfaces should respond instantly without jank, layout shifts, or bloated payload overhead.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80">
                <HeartHandshake className="w-5 h-5 text-blue-500 mb-2" />
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  Team Multiplier
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Championing clear RFC documentation, thorough code reviews, and elevating engineering culture.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quotes & Endorsements */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-5">
                <Quote className="w-4 h-4 text-zinc-400" />
                <span>Colleague & Leader Endorsements</span>
              </div>

              <div className="space-y-6">
                {TESTIMONIALS.map((t) => (
                  <div
                    key={t.id}
                    className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800/80"
                  >
                    <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 italic mb-3 leading-relaxed">
                      "{t.quote}"
                    </p>
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        {t.author}
                      </div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                        {t.title} · <span className="text-zinc-400">{t.relationship}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  Ready to collaborate?
                </span>
                <button
                  id="about-connect-cta"
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline cursor-pointer"
                >
                  <span>Get in touch with Alex</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
