'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className,
  hoverEffect = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={
        hoverEffect
          ? {
              y: -8,
              transition: { duration: 0.2, ease: 'easeInOut' },
            }
          : undefined
      }
      className={cn(
        'bg-card text-card-foreground rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
