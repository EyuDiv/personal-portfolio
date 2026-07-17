'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 cursor-pointer focus-visible:outline-none';

  const variants = {
    primary:
      'bg-primary text-white shadow-md hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 active:bg-blue-700',
    secondary:
      'bg-secondary text-white shadow-md hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/25 active:bg-purple-700',
    outline:
      'border-2 border-border bg-transparent text-foreground hover:bg-muted active:bg-muted/80',
    text: 'text-foreground hover:bg-muted active:bg-muted/80',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm gap-1.5',
    md: 'h-11 px-6 text-base gap-2',
    lg: 'h-13 px-8 text-lg gap-2.5 rounded-2xl',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
