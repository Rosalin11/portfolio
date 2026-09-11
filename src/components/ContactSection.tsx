import React, { useState, useId } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData, SubmissionReceipt } from '../types';
import {
  Send,
  Mail,
  Copy,
  Check,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    inquiryType: 'project',
    budgetTimeline: 'flexible',
    message: initialSubject ? `Hi Alex,\n\nI was reviewing your work on "${initialSubject}" and would like to discuss...` : '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<SubmissionReceipt | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedReceiptId, setCopiedReceiptId] = useState(false);

  const validateField = (name: keyof ContactFormData, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email address is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
        return '';
      case 'message':
        if (!value.trim()) return 'Message content is required';
        if (value.trim().length < 20) return `Message must be at least 20 characters (${value.trim().length}/20)`;
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field] || '');
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const messageErr = validateField('message', formData.message);

    setTouched({
      name: true,
      email: true,
      inquiryType: true,
      message: true,
    });

    if (nameErr || emailErr || messageErr) {
      setErrors({
        name: nameErr,
        email: emailErr,
        message: messageErr,
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission to API / server
    await new Promise((resolve) => setTimeout(resolve, 900));

    const receipt: SubmissionReceipt = {
      id: `INQ-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`,
      data: { ...formData },
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric' }),
    };

    setSubmissionReceipt(receipt);
    setIsSubmitting(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyReceiptId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedReceiptId(true);
    setTimeout(() => setCopiedReceiptId(false), 2200);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      inquiryType: 'project',
      budgetTimeline: 'flexible',
      message: '',
    });
    setErrors({});
    setTouched({});
    setSubmissionReceipt(null);
  };

  const mailtoHref = `mailto:${encodeURIComponent(PERSONAL_INFO.email)}?subject=${encodeURIComponent(`[${formData.inquiryType.toUpperCase()}] Inquiry from ${formData.name || 'Portfolio Visitor'}`)}&body=${encodeURIComponent(formData.message || 'Hi Alex,')}`;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
            <MessageSquare className="w-4 h-4" />
            <span>Initiate Contact</span>
          </div>
          <h2
            id="contact-section-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            Let's build something exceptional.
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Whether you have a distributed systems challenge, need a senior full-stack lead, or want to explore engineering collaboration, send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Availability Info */}
          <div className="lg:col-span-5 space-y-6">
            <div
              id="contact-info-card"
              className="p-6 sm:p-7 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-6"
            >
              <div>
                <h3 className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Prefer direct communication? Reach out directly to my primary engineering inbox:
                </p>
              </div>

              {/* Direct Email with copy button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      Primary Email
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono font-medium text-zinc-900 dark:text-zinc-100 hover:underline truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  type="button"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors cursor-pointer shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Response SLA */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                  <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                  <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Typical response time: Within 24 business hours</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Direct communication only · Strict privacy guarantee</span>
                </div>
              </div>

              {/* Status banner */}
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-semibold text-emerald-900 dark:text-emerald-300">
                    Currently Open for Engagements
                  </span>
                </div>
                <p className="text-[11px] text-emerald-800 dark:text-emerald-400/90 leading-relaxed">
                  Available for senior/lead engineering roles, contract architecture sprints, and technical advisory for Q3 & Q4.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form or Submission Receipt */}
          <div className="lg:col-span-7">
            {submissionReceipt ? (
              /* Success Confirmation Card */
              <div
                id="contact-submission-receipt"
                className="p-7 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-6 animate-fadeIn"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">
                      Reference ID
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      <span>{submissionReceipt.id}</span>
                      <button
                        id="copy-receipt-id-btn"
                        onClick={() => handleCopyReceiptId(submissionReceipt.id)}
                        className="p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                        title="Copy Reference ID"
                      >
                        {copiedReceiptId ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Thank you, <span className="font-semibold text-zinc-900 dark:text-zinc-100">{submissionReceipt.data.name}</span>. Your message has been logged and queued for review.
                  </p>
                </div>

                {/* Submitted Summary Details */}
                <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3 text-xs">
                  <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                    <span className="text-zinc-400 dark:text-zinc-500">Contact Email:</span>
                    <span className="font-mono font-medium text-zinc-800 dark:text-zinc-200">
                      {submissionReceipt.data.email}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                    <span className="text-zinc-400 dark:text-zinc-500">Inquiry Classification:</span>
                    <span className="font-medium text-zinc-800 dark:text-zinc-200 capitalize">
                      {submissionReceipt.data.inquiryType} Consultation
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                    <span className="text-zinc-400 dark:text-zinc-500">Timeline / Scope:</span>
                    <span className="font-medium text-zinc-800 dark:text-zinc-200 capitalize">
                      {submissionReceipt.data.budgetTimeline}
                    </span>
                  </div>
                  <div className="pt-1">
                    <span className="text-zinc-400 dark:text-zinc-500 block mb-1">Message Digest:</span>
                    <p className="text-zinc-700 dark:text-zinc-300 italic bg-zinc-50 dark:bg-zinc-950 p-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800/60 line-clamp-3">
                      "{submissionReceipt.data.message}"
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    id="open-mail-client-receipt-btn"
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-xs font-semibold transition-colors"
                  >
                    <span>Also open in Email Client</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    id="send-another-message-btn"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Main Interactive Contact Form */
              <form
                id="portfolio-contact-form"
                onSubmit={handleSubmit}
                noValidate
                className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-6"
              >
                {/* Form Heading & Brief instructions */}
                <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
                  <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Send a Message
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Fill out the fields below. All inquiries receive a direct response from Alex.
                  </p>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name-input"
                      className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      placeholder="e.g. Elena Rostova"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-zinc-900 border transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden ${
                        touched.name && errors.name
                          ? 'border-rose-500 ring-1 ring-rose-500'
                          : 'border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-100'
                      }`}
                      required
                    />
                    {touched.name && errors.name && (
                      <p
                        id="contact-name-error"
                        className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email-input"
                      className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="elena@company.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-zinc-900 border transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden ${
                        touched.email && errors.email
                          ? 'border-rose-500 ring-1 ring-rose-500'
                          : 'border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-100'
                      }`}
                      required
                    />
                    {touched.email && errors.email && (
                      <p
                        id="contact-email-error"
                        className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Inquiry Type Selector */}
                <div>
                  <label
                    id="inquiry-type-label"
                    className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Nature of Inquiry
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { key: 'project', label: 'Project Architecture' },
                      { key: 'hiring', label: 'Senior/Staff Role' },
                      { key: 'consulting', label: 'Scalability Audit' },
                      { key: 'speaking', label: 'Speaking / Workshop' },
                      { key: 'other', label: 'General Discussion' },
                    ].map((item) => (
                      <button
                        key={item.key}
                        id={`inquiry-type-btn-${item.key}`}
                        type="button"
                        onClick={() => handleChange('inquiryType', item.key as ContactFormData['inquiryType'])}
                        className={`px-3 py-2 rounded-lg text-xs font-medium border text-left transition-all cursor-pointer truncate ${
                          formData.inquiryType === item.key
                            ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 shadow-xs'
                            : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline / Budget Expectations (Optional selector) */}
                <div>
                  <label
                    htmlFor="contact-timeline-select"
                    className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    Anticipated Timeline / Project Scope
                  </label>
                  <select
                    id="contact-timeline-select"
                    name="budgetTimeline"
                    value={formData.budgetTimeline}
                    onChange={(e) => handleChange('budgetTimeline', e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:border-zinc-900 dark:focus:border-zinc-100"
                  >
                    <option value="immediate">Immediate / Urgent (within 2-3 weeks)</option>
                    <option value="q3">This Quarter (Next 1-2 months)</option>
                    <option value="q4">Planning Phase / Q4 Ahead</option>
                    <option value="flexible">Flexible / Exploratory Discussion</option>
                  </select>
                </div>

                {/* Message Content field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="contact-message-input"
                      className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                    >
                      Message / Project Details <span className="text-rose-500">*</span>
                    </label>
                    <span
                      id="message-char-count"
                      className={`text-[11px] font-mono ${
                        formData.message.length < 20
                          ? 'text-zinc-400 dark:text-zinc-500'
                          : 'text-emerald-600 dark:text-emerald-400'
                      }`}
                    >
                      {formData.message.length} chars (min 20)
                    </span>
                  </div>

                  <textarea
                    id="contact-message-input"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    placeholder="Describe your project, engineering scope, tech stack, and goals..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-zinc-900 border transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden resize-y ${
                      touched.message && errors.message
                        ? 'border-rose-500 ring-1 ring-rose-500'
                        : 'border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-100'
                    }`}
                    required
                  />

                  {touched.message && errors.message && (
                    <p
                      id="contact-message-error"
                      className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button & Mailto fallback */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-50 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-sm font-semibold tracking-tight transition-all shadow-xs disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <a
                    id="contact-mailto-fallback"
                    href={mailtoHref}
                    className="text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Prefer your email app? Open Mailto</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
