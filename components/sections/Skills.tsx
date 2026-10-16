'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import {
  Code,
  Layout,
  Cpu,
  Shield,
  Atom,
  Globe,
  Palette,
  Server,
  FileCode,
  Layers,
  Database,
  GitBranch,
  Monitor,
  Terminal,
} from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { SkillCategory } from '@/types';

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', percentage: 95, iconName: 'Code' },
        { name: 'CSS', percentage: 90, iconName: 'Layout' },
        { name: 'JavaScript', percentage: 90, iconName: 'Cpu' },
        { name: 'TypeScript', percentage: 80, iconName: 'Shield' },
        { name: 'React', percentage: 85, iconName: 'Atom' },
        { name: 'Next.js', percentage: 80, iconName: 'Globe' },
        { name: 'Tailwind CSS', percentage: 95, iconName: 'Palette' },
      ],
    },
    {
      category: 'Backend & Database',
      skills: [
        { name: 'Laravel', percentage: 75, iconName: 'Server' },
        { name: 'PHP', percentage: 80, iconName: 'FileCode' },
        { name: 'Node.js (Learning)', percentage: 40, iconName: 'Layers' },
        { name: 'MySQL', percentage: 75, iconName: 'Database' },
      ],
    },
    {
      category: 'Tools & Workflow',
      skills: [
        { name: 'Git', percentage: 85, iconName: 'GitBranch' },
        { name: 'GitHub', percentage: 85, iconName: 'Github' },
        { name: 'VS Code', percentage: 90, iconName: 'Monitor' },
        { name: 'Postman', percentage: 80, iconName: 'Terminal' },
      ],
    },
  ];

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'Code':
        return <Code className="w-5 h-5 text-blue-500" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-500" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-cyan-500" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-sky-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-purple-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-red-500" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-purple-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-500" />;
      case 'Database':
        return <Database className="w-5 h-5 text-blue-600" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-orange-500" />;
      case 'Github':
        return <GithubIcon className="w-5 h-5 text-foreground" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-blue-500" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-orange-400" />;
      default:
        return <Code className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-20">
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
            My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((categoryObj, catIdx) => (
            <Card
              key={catIdx}
              hoverEffect={false}
              className="border border-border bg-card/40 backdrop-blur-xs flex flex-col gap-6 p-5 sm:p-6"
            >
              <h3 className="text-lg sm:text-xl font-bold text-foreground border-b border-border pb-3">
                {categoryObj.category}
              </h3>
              
              <div className="flex flex-col gap-4 sm:gap-5">
                {categoryObj.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex flex-col gap-2">
                    {/* Skill Title & Percentage */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-muted border border-border shrink-0">
                          {getSkillIcon(skill.iconName)}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div
                      className="h-2 w-full bg-muted rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={skill.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency: ${skill.percentage}%`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: skillIdx * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
