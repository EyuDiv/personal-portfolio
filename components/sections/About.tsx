'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { GraduationCap, Award, Clock, Briefcase, BookOpen, Heart, MapPin } from 'lucide-react';
import { Stat } from '@/types';

export default function About() {
  const stats: Stat[] = [
    {
      label: 'Projects Completed',
      value: '15+',
      iconName: 'Award',
      description: 'Built from scratch',
    },
    {
      label: 'Technologies Mastered',
      value: '10+',
      iconName: 'BookOpen',
      description: 'Languages & tools',
    },
    {
      label: 'Learning Hours',
      value: '1,000+',
      iconName: 'Clock',
      description: 'Self-directed study',
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-6 h-6 text-blue-500" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-purple-500" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-emerald-500" />;
      default:
        return <Award className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="about" className="py-14 sm:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Quick Profile */}
          <div className="lg:col-span-5">
            <Card hoverEffect={false} className="border-2 border-primary/10 relative overflow-hidden bg-card/60 backdrop-blur-xs p-5 sm:p-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-purple-500/10 rounded-bl-full pointer-events-none" />
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Quick Info</h3>
                  <p className="text-sm text-muted-foreground mt-1">Snapshot of my developer profile</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-primary shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Name</p>
                      <p className="text-sm font-semibold text-foreground">Eyoual Yimer (Eyu)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-secondary shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Education</p>
                      <p className="text-sm font-semibold text-foreground">Software Engineering Student</p>
                      <p className="text-xs text-muted-foreground">Woldia University (In Progress)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">My Goal</p>
                      <p className="text-sm font-semibold text-foreground">Become a Full Stack Web Developer</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-semibold text-foreground">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Bio Description */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                Hi, I&apos;m a passionate creator building clean web experiences.
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                As a Woldia University Software Engineering student, I combine my academic foundation in logic and design patterns with self-directed software development to build interactive websites. I love learning how frameworks function under the hood and adopting patterns that make applications robust, responsive, and delightful.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                My primary focus revolves around the React/Next.js ecosystem for creating beautiful client interfaces, and Laravel/PHP for constructing secure, well-structured API services. I am dedicated to continuous learning and frequently build project-based mock applications to master new techniques.
              </p>
            </motion.div>

            {/* Stats Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  hoverEffect={true}
                  delay={index * 0.1}
                  className="flex flex-col items-center text-center p-4 sm:p-5 border border-border bg-card/40 backdrop-blur-xs"
                >
                  <div className="p-3 rounded-2xl bg-muted mb-3 sm:mb-4">
                    {getIcon(stat.iconName)}
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground mt-1">
                    {stat.label}
                  </span>
                  <span className="text-xs text-muted-foreground mt-0.5">
                    {stat.description}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
