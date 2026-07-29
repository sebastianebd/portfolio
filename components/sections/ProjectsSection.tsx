"use client";

import React from 'react';
import { projects } from '@/lib/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative w-full min-h-screen h-auto bg-[var(--color-bg)] overflow-hidden pt-20 pb-32 lg:px-15 px-5">
      <div className="max-w-150 md:max-w-250 lg:max-w-360 mx-auto w-full">
        <div className="mb-16 md:mb-24 lg:pt-10">
          {/* Evitamos el eyebrow (eyebrow restraint rule) y vamos directo a un headline robusto */}
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Proyectos <br className="hidden md:block" /> destacados
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {projects.map((proj, i) => (
            <ProjectCard key={proj.id} project={proj} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;