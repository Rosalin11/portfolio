import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';
import { ExternalLink, Github, ArrowRight, Search, Filter, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenContact,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'systems', label: 'Distributed Systems' },
    { key: 'fullstack', label: 'Full-Stack Web' },
    { key: 'ai-data', label: 'AI & Data' },
    { key: 'devtools', label: 'DevTools & Infra' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              <Layers className="w-4 h-4" />
              <span>Selected Works</span>
            </div>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              Professional Projects & Engineering
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Production systems, web platforms, and open-source infrastructure engineered for performance, reliability, and real-world scale.
            </p>
          </div>

          {/* Search input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              id="project-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or title..."
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-800 dark:focus:ring-zinc-200 transition-all"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              id={`filter-tab-${cat.key}`}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-xs font-medium tracking-tight transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.key
                  ? 'bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 shadow-xs'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 border border-zinc-200/80 dark:border-zinc-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div
            id="no-projects-found-state"
            className="p-12 text-center rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
          >
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              No projects matching "{searchQuery}" in this category.
            </p>
            <button
              id="reset-project-filters-btn"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            id="projects-cards-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative flex flex-col rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200"
              >
                {/* Project Image Preview */}
                <div
                  className="relative aspect-16/10 bg-zinc-100 dark:bg-zinc-950 overflow-hidden cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-medium text-white bg-zinc-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold tracking-wide bg-zinc-900/85 backdrop-blur-xs text-white">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900/75 backdrop-blur-xs text-zinc-300">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  {/* Title & Tagline */}
                  <div className="mb-3">
                    <h3
                      className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 cursor-pointer transition-colors"
                      onClick={() => onSelectProject(project)}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 my-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800/80 text-center">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="min-w-0">
                        <div className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate">
                          {m.label}
                        </div>
                        <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-3 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <button
                      id={`inspect-project-btn-${project.id}`}
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 cursor-pointer"
                    >
                      <span>Deep Dive</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1">
                      {project.githubUrl && (
                        <a
                          id={`project-github-btn-${project.id}`}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} source on GitHub`}
                          className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          id={`project-live-btn-${project.id}`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} live demo`}
                          className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Inquiry Callout Banner */}
        <div
          id="custom-architecture-callout"
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-900 dark:bg-zinc-900/80 text-zinc-100 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white mb-1">
              Have a specific system architecture in mind?
            </h3>
            <p className="text-sm text-zinc-400 max-w-xl">
              I consult on system scalability audits, distributed microservice redesigns, and high-performance WebAssembly/React frontend pipelines.
            </p>
          </div>

          <button
            id="projects-cta-inquire-btn"
            onClick={onOpenContact}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-semibold tracking-tight transition-colors cursor-pointer"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
