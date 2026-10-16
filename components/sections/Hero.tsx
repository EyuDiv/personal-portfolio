'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Send, Mail, ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import Button from '../ui/Button';

export default function Hero() {
  const socialLinks = [
    { href: 'https://github.com/EyuDiv', icon: GithubIcon, label: 'GitHub', color: 'hover:text-blue-500 hover:border-blue-500/30' },
    { href: 'https://linkedin.com/in/eyu', icon: LinkedinIcon, label: 'LinkedIn', color: 'hover:text-blue-600 hover:border-blue-600/30' },
    { href: 'https://t.me/Eyu_sk', icon: Send, label: 'Telegram', color: 'hover:text-cyan-500 hover:border-cyan-500/30' },
    { href: 'mailto:yimereyuel3@gmail.com', icon: Mail, label: 'Email', color: 'hover:text-purple-500 hover:border-purple-500/30' },
  ];

  const handleDownloadCV = () => {
    const cvText = `================================================
EYOUAL YIMER - SOFTWARE ENGINEER & FULL STACK DEVELOPER
================================================

Contact Info:
- Full Name: Eyoual Yimer (Eyu)
- Email: yimereyuel3@gmail.com
- Location: Addis Ababa, Ethiopia
- GitHub: https://github.com/EyuDiv
- Telegram: https://t.me/Eyu_sk
- LinkedIn: https://linkedin.com/in/eyu
- Live Portfolio: https://personal-portfolio-sage-alpha-43.vercel.app

Profile Summary:
Software Engineering Student and Aspiring Full Stack Web Developer. 
Passionate about constructing responsive, performant, and user-friendly 
web applications. Enthusiastic learner dedicated to mastering modern web 
technologies, writing clean and maintainable code, and solving real-world problems.

Technical Skills:
- Frontend: HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js, Tailwind CSS
- Backend: Laravel, PHP, Node.js (Actively Learning)
- Databases: MySQL
- Development Tools: Git, GitHub, VS Code, Postman

Education:
- Bachelor of Science in Software Engineering
  Woldia University (In Progress)

Featured Projects:
1. Personal Portfolio (Next.js 15, Tailwind CSS, Framer Motion, TypeScript)
   - Fully responsive developer portfolio web application with custom dark/light themes.
   - Live URL: https://personal-portfolio-sage-alpha-43.vercel.app
   - Repository: https://github.com/EyuDiv/personal-portfolio

2. Todo App (Next.js, TypeScript, Tailwind CSS)
   - Lightweight task manager with custom themes and persistent client storage.

3. Weather App (React, OpenWeather API, Tailwind CSS)
   - Live meteorological dashboard with automatic geolocation and multi-day forecast.

4. Laravel REST API (Laravel, PHP, MySQL, JWT Auth)
   - Secure and scalable RESTful API with token authentication and unit test coverage.

5. Blog Platform (Next.js, MDX, Tailwind CSS)
   - Blazing-fast static publishing engine with search and reading time estimation.

6. E-Commerce UI (Next.js, Context API, Tailwind CSS)
   - High-performance shopping interface featuring cart state management and checkout validation.

Career Objective:
To leverage strong engineering principles and continuous learning to develop high-impact full stack applications as part of forward-thinking engineering teams.
`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Eyoual_Yimer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Floating shape variants
  const shapeVariants: Variants = {
    animate1: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 90, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    animate2: {
      y: [0, 20, 0],
      x: [0, -15, 0],
      rotate: [0, -120, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    animate3: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 overflow-hidden bg-radial from-blue-500/5 via-transparent to-transparent"
    >
      {/* Decorative Floating Shapes */}
      <motion.div
        variants={shapeVariants}
        animate="animate1"
        className="absolute top-1/4 left-10 w-12 h-12 rounded-lg bg-blue-400/10 blur-sm pointer-events-none hidden md:block"
      />
      <motion.div
        variants={shapeVariants}
        animate="animate2"
        className="absolute bottom-1/4 right-12 w-16 h-16 rounded-full bg-purple-400/10 blur-sm pointer-events-none hidden md:block"
      />
      <motion.div
        variants={shapeVariants}
        animate="animate3"
        className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-500/5 blur-xl pointer-events-none"
      />
      <motion.div
        variants={shapeVariants}
        animate="animate3"
        className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-purple-500/5 blur-xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-500/10 text-primary mb-4 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight break-words"
          >
            Hi 👋 <br />
            I&apos;m <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Eyoual Yimer</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-2xl md:text-3xl font-semibold text-muted-foreground mt-3 sm:mt-4 leading-snug"
          >
            Software Engineering Student &amp; <br />
            <span className="text-foreground">Aspiring Full Stack Web Developer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4 sm:mt-6 max-w-xl leading-relaxed"
          >
            I build modern, responsive, and user-friendly web applications using Next.js and Laravel. Focused on writing clean, maintainable code and solving real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto"
          >
            <Button variant="primary" size="md" onClick={handleDownloadCV} className="w-full xs:w-auto justify-center min-h-[44px]">
              Download CV <Download className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="outline" size="md" onClick={handleScrollToProjects} className="w-full xs:w-auto justify-center min-h-[44px]">
              View Projects <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-10"
          >
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Find me on:
            </span>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 sm:p-3 rounded-xl border border-border bg-card/60 text-muted-foreground hover:scale-110 hover:text-foreground transition-all shadow-xs min-w-[44px] min-h-[44px] flex items-center justify-center ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Coding Illustration */}
        <div className="lg:col-span-5 flex justify-center w-full mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] mx-auto"
          >
            {/* Visual glow background for illustration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl -z-10" />

            <svg
              viewBox="0 0 500 400"
              className="w-full h-auto drop-shadow-2xl"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circular decoration */}
              <circle cx="250" cy="200" r="180" fill="url(#illustrationGlow)" />

              {/* Laptop screen back */}
              <rect x="75" y="60" width="350" height="230" rx="16" fill="#1e293b" stroke="#334155" strokeWidth="4" />

              {/* Code window header */}
              <rect x="75" y="60" width="350" height="34" rx="16" fill="#0f172a" />
              <circle cx="95" cy="77" r="5" fill="#ef4444" />
              <circle cx="110" cy="77" r="5" fill="#f59e0b" />
              <circle cx="125" cy="77" r="5" fill="#10b981" />
              <rect x="150" y="73" width="200" height="8" rx="4" fill="#334155" />

              {/* Mock code lines */}
              <g className="code-lines">
                <rect x="95" y="115" width="120" height="8" rx="4" fill="#3b82f6" />
                <rect x="95" y="135" width="180" height="8" rx="4" fill="#a855f7" />
                <rect x="115" y="155" width="140" height="8" rx="4" fill="#10b981" />
                <rect x="115" y="175" width="220" height="8" rx="4" fill="#f59e0b" />
                <rect x="135" y="195" width="90" height="8" rx="4" fill="#3b82f6" />
                <rect x="135" y="215" width="160" height="8" rx="4" fill="#a855f7" />
                <rect x="95" y="245" width="100" height="8" rx="4" fill="#ef4444" />
              </g>

              {/* Laptop base */}
              <path d="M40 290 H460 L440 315 H60 L40 290 Z" fill="#334155" />
              <rect x="210" y="290" width="80" height="6" rx="3" fill="#1e293b" />

              {/* Floating brackets & code symbols */}
              <motion.g
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Curly bracket left */}
                <text x="30" y="120" fill="#3b82f6" fontSize="48" fontWeight="bold" fontFamily="monospace">{"{"}</text>
              </motion.g>

              <motion.g
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                {/* Curly bracket right */}
                <text x="430" y="230" fill="#a855f7" fontSize="48" fontWeight="bold" fontFamily="monospace">{"}"}</text>
              </motion.g>

              <motion.g
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                {/* Tags */}
                <text x="410" y="100" fill="#10b981" fontSize="28" fontWeight="bold" fontFamily="monospace">{"</>"}</text>
              </motion.g>

              <motion.g
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                {/* JS Symbol */}
                <rect x="25" y="200" width="36" height="36" rx="8" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="2" />
                <text x="32" y="224" fill="#f59e0b" fontSize="16" fontWeight="bold" fontFamily="sans-serif">JS</text>
              </motion.g>

              <defs>
                <linearGradient id="illustrationGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.12" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
