'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      // Fallback for top of page
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      // Check if user has scrolled to the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20
      ) {
        setActiveSection('contact');
        return;
      }

      const elements = sectionIds.map((id) => document.getElementById(id));
      
      let currentSection = 'home';

      elements.forEach((el) => {
        if (!el) return;
        
        const rect = el.getBoundingClientRect();
        
        // Calculate distance from top of viewport to the section top
        // A section is active if it is currently intersecting the upper/middle half of the screen
        const topOffset = rect.top;
        
        // We want the element whose top is closest to the top of screen (or slightly below)
        if (topOffset <= window.innerHeight * 0.4 && topOffset > -rect.height + window.innerHeight * 0.4) {
          currentSection = el.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Run once on mount to set initial active section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
