/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [contactSubject, setContactSubject] = useState<string>('');

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleScrollToContact = (subject?: string) => {
    if (subject) {
      setContactSubject(subject);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-zinc-800 selection:text-zinc-50 dark:selection:bg-zinc-200 dark:selection:text-zinc-900 transition-colors duration-200">
      {/* Sticky Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => handleScrollToContact()}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => handleScrollToContact()}
        />

        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenContact={() => handleScrollToContact()}
        />

        <ExperienceSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => handleScrollToContact()}
        />

        <SkillsSection />

        <AboutSection
          onOpenContact={() => handleScrollToContact()}
        />

        <ContactSection
          key={contactSubject}
          initialSubject={contactSubject}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={(projectTitle) => handleScrollToContact(projectTitle)}
      />

      {/* Interactive Printable CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenContact={() => handleScrollToContact()}
      />
    </div>
  );
}
