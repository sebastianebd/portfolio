"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/data/projects";

export const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Auto-play (se detiene si el lightbox está abierto)
  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const interval = setInterval(() => {
      if (!isLightboxOpen) {
        setCurrentIndex((prev) => (prev + 1) % project.images.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images, isLightboxOpen]);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.images && project.images.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.images && project.images.length > 0) {
      setCurrentIndex(
        (prev) => (prev - 1 + project.images.length) % project.images.length,
      );
    }
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const currentImage = project.images ? project.images[currentIndex] : "";
  const hasMultipleImages = project.images && project.images.length > 1;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`group block w-full h-fit ${project.offset ? "md:mt-32" : ""}`}
      >
        <div
          onClick={openLightbox}
          className={`relative w-full ${project.aspectRatio || "aspect-[4/3] md:aspect-[4/5]"} mb-6 overflow-hidden bg-[var(--color-navbar)] rounded-sm cursor-zoom-in`}
        >
          {/* Usamos AnimatePresence para crear un efecto de desvanecimiento (crossfade) suave entre las imágenes */}
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={currentImage}
              alt={`${project.title} screenshot`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </AnimatePresence>

          {/* Capa de oscurecimiento */}
          <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>

          {/* Botones de Navegación del Carrusel (Solo aparecen si hay más de 1 imagen y al hacer hover) */}
          {hasMultipleImages && (
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <button
                onClick={prevImage}
                className="p-2 rounded-full bg-black/40 text-white hover:bg-black/80 hover:text-amber-500 backdrop-blur-md transition-all transform hover:scale-110"
                aria-label="Imagen anterior"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="p-2 rounded-full bg-black/40 text-white hover:bg-black/80 hover:text-amber-500 backdrop-blur-md transition-all transform hover:scale-110"
                aria-label="Siguiente imagen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-amber-500 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-[90%] text-pretty">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs font-mono tracking-wide text-gray-500 border border-gray-700 rounded-full px-3 py-1 bg-[var(--color-navbar)]/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Botones de Acción (GitHub y Demo) */}
          <div className="flex flex-wrap items-center gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-[var(--color-navbar)] text-black hover:text-white font-semibold text-sm rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Demo en vivo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[var(--color-navbar)] hover:bg-white text-gray-300 hover:text-black font-semibold text-sm rounded-full border border-gray-700 hover:border-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal (Fuera del tag <a> para evitar navegación accidental) */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
          >
            {/* Botón de cerrar */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-all z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* Imagen en grande */}
            <motion.img
              src={currentImage}
              alt={project.title}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full h-full object-contain cursor-default rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Previene cerrar si haces clic en la imagen
            />

            {/* Controles del carrusel en el lightbox */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage(e);
                  }}
                  className="absolute left-4 md:left-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 hover:text-amber-500 backdrop-blur-md transition-all transform hover:scale-110 z-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage(e);
                  }}
                  className="absolute right-4 md:right-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 hover:text-amber-500 backdrop-blur-md transition-all transform hover:scale-110 z-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
