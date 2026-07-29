/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/data/projects';

export const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  return (
    <motion.a 
      href={project.link}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`group block w-full ${project.offset ? 'md:mt-32' : ''}`}
    >
      <div className="relative w-full aspect-[4/3] md:aspect-[4/5] mb-6 overflow-hidden bg-[var(--color-navbar)]">
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
