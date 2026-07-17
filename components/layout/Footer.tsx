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
    { href: 'https://github.com', icon: GithubIcon, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: LinkedinIcon, label: 'LinkedIn' },
    { href: 'https://t.me', icon: Send, label: 'Telegram' },
    { href: 'mailto:eyu@example.com', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-card/50 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-6">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Eyu
        </Link>

        {/* Footer Nav */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
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
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-4">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 hover:scale-110 transition-all shadow-sm"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          &copy; 2026 Eyu. All rights reserved.
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
            className="fixed bottom-6 right-6 p-3 rounded-full border border-border bg-primary text-white hover:bg-blue-600 focus-visible:outline-none shadow-lg shadow-primary/20 z-40 cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
