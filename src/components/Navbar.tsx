import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Sun, Moon, FileText, Send, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenResume,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            id="brand-logo"
            href="#"
            className="flex items-center gap-2.5 group text-zinc-900 dark:text-zinc-100 focus:outline-hidden"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 flex items-center justify-center font-bold text-sm tracking-tight transition-transform group-hover:scale-105">
              AR
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-normal">
                Systems & Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Status indicator pill */}
            <div
              id="status-indicator-pill"
              className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-xs font-medium text-emerald-800 dark:text-emerald-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Hire</span>
            </div>

            {/* Resume button */}
            <button
              id="navbar-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Theme Toggle */}
            <button
              id="navbar-theme-toggle"
              onClick={onToggleDarkMode}
              aria-label="Toggle visual theme"
              className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Direct Contact CTA */}
            <button
              id="navbar-contact-cta"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-50 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile hamburger & theme toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-theme-toggle"
              onClick={onToggleDarkMode}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile navigation menu"
              className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/98 dark:bg-zinc-950/98 px-4 pt-3 pb-6 space-y-3"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-xs font-medium text-emerald-800 dark:text-emerald-300 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for high-impact roles</span>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
            <button
              id="mobile-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-medium text-zinc-800 dark:text-zinc-200"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>
            <button
              id="mobile-contact-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-950 text-sm font-semibold"
            >
              <Send className="w-4 h-4" />
              <span>Contact Alex</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
