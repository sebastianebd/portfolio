export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  githubUrl?: string;
  demoUrl?: string;
  offset: boolean;
  aspectRatio?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema B2B - ZuriApp",
    description:
      "ZuriApp es una plataforma integral especializada en la gestión de turnos y reemplazos de personal hospitalario. Su arquitectura procesa cargas masivas de datos en segundo plano, garantizando sincronización en tiempo real, alta disponibilidad y un rendimiento ininterrumpido para optimizar flujos operativos críticos.",
    tags: ["Vue.js", "TypeScript", "Node.js", "MongoDB"],
    images: [
      "/zuriapp1.png",
      "/zuriapp2.png",
      "/zuriapp3.png",
      "/zuriapp4.png",
      "/zuriapp5.png",
      "/zuriapp6.png",
    ],
    githubUrl: "https://github.com/sebastianebd/ZuriApp",
    offset: false,
    aspectRatio: "aspect-[4/3] md:aspect-video",
  },
  {
    id: 2,
    title: "Chat Realtime",
    description:
      "Aplicación de mensajería en tiempo real con arquitectura de cliente dual (React y Vue). Ofrece conexión instantánea mediante WebSockets, generación dinámica de avatares, sincronización de estado en vivo y una interfaz premium totalmente responsiva",
    tags: ["React", "Vue.js", "Socket.io", "Node.js"],
    images: [
      "/chat1.png",
      "/chat2.png",
    ],
    githubUrl: "https://github.com/sebastianebd/chat-realtime",
    offset: true,
    aspectRatio: "aspect-square md:aspect-[4/5]",
  },
];
