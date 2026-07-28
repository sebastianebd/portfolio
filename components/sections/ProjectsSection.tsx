/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  offset: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema B2B",
    description: "Plataforma de gestión integral para negocios con transacciones en tiempo real, control de inventario avanzado y facturación automatizada.",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    image: "https://picsum.photos/seed/b2b-dashboard/800/1000",
    link: "#",
    offset: false,
  },
  {
    id: 2,
    title: "Chat Realtime",
    description: "Aplicación de mensajería instantánea escalable. Cuenta con salas de chat, estados en vivo de los usuarios y notificaciones push.",
    tags: ["React", "Node.js", "Socket.io", "Redis"],
    image: "https://picsum.photos/seed/realtime-chat/800/1000",
    link: "#",
    offset: true,
  }
];

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  return (
    <motion.a 
      href={project.link}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`group block w-full ${project.offset ? 'md:mt-32' : ''}`}
    >
      <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden bg-[var(--color-navbar)]">
        {/* Utilizamos img normal temporalmente para admitir placeholders de Picsum sin modificar next.config.ts */}
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-amber-500 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base max-w-[90%] text-pretty">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-xs font-mono tracking-wide text-gray-500 border border-gray-700 rounded-full px-3 py-1 bg-[var(--color-navbar)]/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

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