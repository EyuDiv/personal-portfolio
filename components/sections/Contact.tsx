'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const contactInfo = [
    {
      label: 'Email',
      value: 'yimereyuel3@gmail.com',
      href: 'mailto:yimereyuel3@gmail.com',
      icon: Mail,
      color: 'bg-blue-500/10 text-blue-500',
      ariaLabel: 'Send email to yimereyuel3@gmail.com',
    },
    {
      label: 'GitHub',
      value: 'github.com/EyuDiv',
      href: 'https://github.com/EyuDiv',
      icon: GithubIcon,
      color: 'bg-foreground/10 text-foreground',
      ariaLabel: 'View GitHub profile EyuDiv',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/eyu',
      href: 'https://linkedin.com/in/eyu',
      icon: LinkedinIcon,
      color: 'bg-indigo-500/10 text-indigo-500',
      ariaLabel: 'Connect with Eyu on LinkedIn',
    },
    {
      label: 'Telegram',
      value: 't.me/Eyu_sk',
      href: 'https://t.me/Eyu_sk',
      icon: Send,
      color: 'bg-cyan-500/10 text-cyan-500',
      ariaLabel: 'Message Eyu on Telegram',
    },
    {
      label: 'Location',
      value: 'Addis Ababa, Ethiopia',
      href: null,
      icon: MapPin,
      color: 'bg-red-500/10 text-red-500',
      ariaLabel: 'Location: Addis Ababa, Ethiopia',
    },
  ];

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Prepare direct mailto URL so user's client dispatches directly to verified email
    const mailtoSubject = encodeURIComponent(`[Portfolio] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Eyoual,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:yimereyuel3@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus('success');
    }, 600);
  };

  return (
    <section id="contact" className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Get In <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Let&apos;s talk about my project
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Feel free to reach out if you&apos;re looking for a developer, have a question, or simply want to connect. I will do my best to get back to you as soon as possible!
              </p>
            </div>

            <div className="flex flex-col gap-3.5 mt-2">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const Component = info.href ? 'a' : 'div';
                return (
                  <Component
                    key={index}
                    href={info.href || undefined}
                    target={info.href?.startsWith('http') ? '_blank' : undefined}
                    rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={info.ariaLabel}
                    className={`flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl border border-border bg-card/40 backdrop-blur-xs transition-all min-h-[48px] ${
                      info.href ? 'hover:bg-muted hover:border-muted-foreground/30 hover:translate-x-1 cursor-pointer' : ''
                    }`}
                  >
                    <div className={`p-3 rounded-xl shrink-0 ${info.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{info.label}</p>
                      <p className="text-sm font-semibold text-foreground mt-0.5 truncate">{info.value}</p>
                    </div>
                  </Component>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card hoverEffect={false} className="border border-border bg-card/60 backdrop-blur-xs p-5 sm:p-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-8 sm:py-10 gap-4"
                  >
                    <CheckCircle2 className="w-14 h-14 sm:w-16 sm:h-16 text-emerald-500 animate-bounce" />
                    <h4 className="text-2xl font-bold text-foreground">Message Ready</h4>
                    <p className="text-muted-foreground max-w-sm text-sm sm:text-base">
                      Your email client was prompted with the prepared draft addressed to <span className="text-foreground font-semibold">yimereyuel3@gmail.com</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full max-w-sm">
                      <Button
                        variant="primary"
                        size="md"
                        className="flex-1 min-h-[44px]"
                        onClick={() => {
                          const mailtoSubject = encodeURIComponent(`[Portfolio] ${formData.subject}`);
                          const mailtoBody = encodeURIComponent(
                            `Hello Eyoual,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n`
                          );
                          window.location.href = `mailto:yimereyuel3@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
                        }}
                      >
                        Re-open Email App
                      </Button>
                      <Button
                        variant="outline"
                        size="md"
                        className="flex-1 min-h-[44px]"
                        onClick={() => {
                          setStatus('idle');
                          setFormData({ name: '', email: '', subject: '', message: '' });
                        }}
                      >
                        Reset Form
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-semibold text-foreground">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`h-11 sm:h-12 px-4 rounded-xl border bg-background/50 text-foreground text-sm transition-all focus:bg-background focus:outline-hidden ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-border focus:border-primary focus:ring-1 focus:ring-primary'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`h-11 sm:h-12 px-4 rounded-xl border bg-background/50 text-foreground text-sm transition-all focus:bg-background focus:outline-hidden ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-border focus:border-primary focus:ring-1 focus:ring-primary'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Let's collaborate!"
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        className={`h-11 sm:h-12 px-4 rounded-xl border bg-background/50 text-foreground text-sm transition-all focus:bg-background focus:outline-hidden ${
                          errors.subject
                            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-border focus:border-primary focus:ring-1 focus:ring-primary'
                        }`}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        className={`p-4 rounded-xl border bg-background/50 text-foreground text-sm transition-all focus:bg-background focus:outline-hidden resize-none min-h-[120px] ${
                          errors.message
                            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-border focus:border-primary focus:ring-1 focus:ring-primary'
                        }`}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      variant="primary"
                      size="md"
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full min-h-[48px] h-12 text-sm sm:text-base font-semibold"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Preparing Draft...
                        </>
                      ) : (
                        'Prepare Email Draft'
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      Opens directly in your default email application to reach <span className="text-foreground font-medium">yimereyuel3@gmail.com</span>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
