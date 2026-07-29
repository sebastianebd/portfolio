export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  offset: boolean;
}

export const projects: Project[] = [
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
