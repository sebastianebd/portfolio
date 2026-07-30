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
      "https://github-production-user-asset-6210df.s3.amazonaws.com/88404208/628677473-ea5df017-c6d5-4b8b-9248-4974f361fdce.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260729T183748Z&X-Amz-Expires=300&X-Amz-Signature=6ca197be52573525c52ff4d739d2ac5acf62e3f1a94f9ecba31d9572f426bb2b&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng",
      "https://github-production-user-asset-6210df.s3.amazonaws.com/88404208/628677477-4ad82f92-b120-4519-b9bf-32da59db3b82.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260729T183810Z&X-Amz-Expires=300&X-Amz-Signature=baa797107e4fcb25c8abf2ef54f7bd65cb902f05d2bdc50c7b34ec6865f42ab7&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng",
      "https://github-production-user-asset-6210df.s3.amazonaws.com/88404208/628677476-c62cacac-b4d8-4a24-8e44-612dd503e52e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260729T183825Z&X-Amz-Expires=300&X-Amz-Signature=3ea288ad6b4b291347b3b915896b85031252fb14139425cb70215c0c447f2f50&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng",
      "https://github-production-user-asset-6210df.s3.amazonaws.com/88404208/628677474-51782d22-bd85-456b-92be-8090f94eea97.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260729T183839Z&X-Amz-Expires=300&X-Amz-Signature=2789913c94f65d41c476af96fbbbdc148536fd933969de24d92a70657d6c68a4&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng",
      "https://github-production-user-asset-6210df.s3.amazonaws.com/88404208/628677472-6563a055-2d44-4cf0-a923-e923f0857af0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260729T183853Z&X-Amz-Expires=300&X-Amz-Signature=89c952e8b713c0f5a16ba2ef116b5dd937cb82be8b9429f92bad4950a5b314f9&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng",
      "https://github-production-user-asset-6210df.s3.amazonaws.com/88404208/628677475-84ef88bc-5420-4ae8-984f-6ebc96e2320a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260729T183905Z&X-Amz-Expires=300&X-Amz-Signature=9e984454c734c58fb1849be9b77a7a53b8ca18942b85bfe3509357b880c1bb82&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng",
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
      "https://github-production-user-asset-6210df.s3.amazonaws.com/88404208/629197106-6d793d1a-a05c-47bf-9cd5-1ca2c08d91be.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260730T150244Z&X-Amz-Expires=300&X-Amz-Signature=981e5e5003cacdffd61bffbe94a410354769553fe58d8a6a006fc09fb4814ab3&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng",
      "https://github-production-user-asset-6210df.s3.amazonaws.com/88404208/629197107-01af562a-3e7f-4505-8c6d-9e284a2c6bfe.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260730T150308Z&X-Amz-Expires=300&X-Amz-Signature=75740d38a5ba73a0d39aeeb9d0a970291403fa29610c2cfeecbd2ce0ae9aa890&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng",
    ],
    githubUrl: "https://github.com/sebastianebd/chat-realtime",
    offset: true,
    aspectRatio: "aspect-square md:aspect-[4/5]",
  },
];
