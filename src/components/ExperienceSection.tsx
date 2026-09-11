import React from 'react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface ExperienceSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onOpenResume,
  onOpenContact,
}) => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Career Trajectory</span>
            </div>
            <h2
              id="experience-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              Professional Experience
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Track record leading engineering teams, architecting distributed infrastructure, and delivering mission-critical web applications.
            </p>
          </div>

          <button
            id="experience-view-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs font-semibold tracking-tight transition-colors cursor-pointer self-start md:self-auto"
          >
            <FileText className="w-4 h-4" />
            <span>Full CV / Work History</span>
          </button>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6">
          {EXPERIENCES.map((item, idx) => (
            <div
              key={item.id}
              id={`experience-card-${item.id}`}
              className="p-6 sm:p-8 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1">
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                      {item.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                      {item.company}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                    <span className="font-medium text-zinc-400 dark:text-zinc-500">
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-5">
                {item.achievements.map((ach, aIdx) => (
                  <div
                    key={aIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-50 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
