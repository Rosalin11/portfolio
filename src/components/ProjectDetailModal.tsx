import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, ArrowRight, CheckCircle2, AlertTriangle, Layers, Activity } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquireProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-zinc-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-container"
        className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-zinc-900 dark:text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              {project.year} · {project.role}
            </span>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Project Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300">
              {project.tagline}
            </p>
          </div>

          {/* Project Hero Image */}
          <div className="relative rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 aspect-16/9 max-h-[380px] bg-zinc-100 dark:bg-zinc-950">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {project.clientOrOrg && (
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-zinc-900/80 backdrop-blur-md text-white text-xs font-medium border border-zinc-700/50">
                Organization: {project.clientOrOrg}
              </div>
            )}
          </div>

          {/* Impact Metrics Row */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-0.5">
                  {metric.label}
                </div>
                <div className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Project Overview */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-zinc-500" />
              <span>Project Overview & Scope</span>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4 text-zinc-500" />
                <span>Architecture & Systems Engineering</span>
              </h3>
              <ul className="space-y-2.5">
                {project.architectureHighlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges and Solutions */}
          {project.challengesAndSolutions && project.challengesAndSolutions.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-zinc-500" />
                <span>Technical Challenges & Solutions</span>
              </h3>
              <div className="space-y-4">
                {project.challengesAndSolutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800 space-y-2"
                  >
                    <div className="text-xs font-semibold text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                      Challenge:
                    </div>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                      {item.challenge}
                    </p>
                    <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider pt-1">
                      Engineered Solution:
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Deliverables & Features */}
          {project.keyFeatures && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-3">
                Key Deliverables & Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 p-2.5 rounded-lg bg-zinc-100/70 dark:bg-zinc-800/40"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500"></span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stack tags */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                id="modal-project-live-btn"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-xs font-semibold transition-colors"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                id="modal-project-github-btn"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            id="modal-inquire-project-btn"
            onClick={() => {
              onInquireProject(project.title);
              onClose();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline cursor-pointer"
          >
            <span>Discuss this architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
