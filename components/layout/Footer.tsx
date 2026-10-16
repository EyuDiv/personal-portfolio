'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Send, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/EyuDiv', icon: GithubIcon, label: 'GitHub Profile (EyuDiv)' },
    { href: 'https://linkedin.com/in/eyu', icon: LinkedinIcon, label: 'LinkedIn Profile' },
    { href: 'https://t.me/Eyu_sk', icon: Send, label: 'Telegram (@Eyu_sk)' },
    { href: 'mailto:yimereyuel3@gmail.com', icon: Mail, label: 'Email (yimereyuel3@gmail.com)' },
  ];

  return (
    <footer className="border-t border-border bg-card/50 py-10 sm:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-6">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1"
        >
          Eyu
        </Link>

        {/* Footer Nav */}
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(link.id);
                if (el) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = el.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="min-h-[44px] inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 hover:scale-105 active:scale-95 transition-all shadow-xs"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5 shrink-0" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-muted-foreground">
          &copy; 2026 Eyoual Yimer (Eyu). All rights reserved.
        </p>
      </div>

      {/* Back To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-11 h-11 flex items-center justify-center rounded-full border border-border bg-primary text-white hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg shadow-primary/20 z-40 cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5 animate-pulse shrink-0" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
