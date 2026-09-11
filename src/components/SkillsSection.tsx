import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Server, Cloud, CheckCircle2, Cpu, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Code2 className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />;
      case 'Server':
        return <Server className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />;
      default:
        return <Wrench className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
            <Cpu className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            Engineering Stack & Domain Expertise
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Hands-on technical mastery across full-stack application development, distributed backend architecture, cloud infrastructure, and software delivery pipelines.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.title}
              id={`skill-category-card-${idx}`}
              className="p-6 sm:p-7 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    {getIcon(category.iconName)}
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800/70"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                            {skill.years}y exp
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                              skill.level === 'Expert'
                                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60'
                                : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
