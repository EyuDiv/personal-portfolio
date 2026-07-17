'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import {
  ExternalLink,
  Laptop,
  CheckSquare,
  CloudSun,
  FileText,
  Server,
  ShoppingBag,
  LucideIcon,
} from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { Project } from '@/types';

export default function Projects() {
  const projectsList: Project[] = [
    {
      title: 'Personal Portfolio',
      description:
        'A fully responsive and animated personal developer portfolio built with Next.js App Router, Tailwind CSS, and Framer Motion.',
      tags: ['Next.js 15', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://github.com',
      imageGradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Todo App',
      description:
        'A sleek, lightweight task manager with custom themes, persistent local storage, subtasks, and transition animations.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://github.com',
      imageGradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Weather App',
      description:
        'A real-time weather dashboard fetching live updates from OpenWeather API with geolocation, hourly forecasts, and responsive layouts.',
      tags: ['React', 'Rest API', 'CSS Grid', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://github.com',
      imageGradient: 'from-sky-400 to-blue-600',
    },
    {
      title: 'Blog Platform',
      description:
        'A markdown-based static blog engine with category filtering, search capability, reading time estimation, and Vercel hosting.',
      tags: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://github.com',
      imageGradient: 'from-violet-600 to-purple-800',
    },
    {
      title: 'Laravel REST API',
      description:
        'A secure, scalable RESTful API back-end for an e-commerce platform using JWT authentication, database migrations, and unit tests.',
      tags: ['Laravel', 'PHP', 'MySQL', 'JWT'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://github.com',
      imageGradient: 'from-red-500 to-orange-600',
    },
    {
      title: 'E-Commerce UI',
      description:
        'A performant e-commerce frontend mock-up featuring cart state management, checkout validation, product sorting, and skeleton loaders.',
      tags: ['Next.js', 'Context API', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://github.com',
      imageGradient: 'from-cyan-500 to-blue-600',
    },
  ];

  const getProjectIcon = (title: string): React.ReactNode => {
    const classStr = "w-10 h-10 text-white drop-shadow-md";
    switch (title) {
      case 'Personal Portfolio':
        return <Laptop className={classStr} />;
      case 'Todo App':
        return <CheckSquare className={classStr} />;
      case 'Weather App':
        return <CloudSun className={classStr} />;
      case 'Blog Platform':
        return <FileText className={classStr} />;
      case 'Laravel REST API':
        return <Server className={classStr} />;
      case 'E-Commerce UI':
        return <ShoppingBag className={classStr} />;
      default:
        return <Laptop className={classStr} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <Card
              key={index}
              hoverEffect={true}
              delay={index * 0.1}
              className="flex flex-col h-full border border-border bg-card/60 backdrop-blur-xs p-0 overflow-hidden"
            >
              {/* Animated/Gradient Card Header Placeholder */}
              <div
                className={`w-full h-48 bg-gradient-to-r ${project.imageGradient} flex items-center justify-center relative overflow-hidden`}
              >
                {/* Decorative background grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
                
                {/* Project Icon */}
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 hover:scale-110 transition-transform duration-300">
                  {getProjectIcon(project.title)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                <div className="space-y-3">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-muted border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center h-10 px-4 text-sm font-semibold rounded-xl border border-border bg-card text-foreground hover:bg-muted hover:border-muted-foreground/30 transition-all gap-1.5 cursor-pointer"
                    >
                      <GithubIcon className="w-4 h-4" /> Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center h-10 px-4 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-blue-600 shadow-sm hover:shadow-blue-500/10 transition-all gap-1.5 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
