/* eslint-disable @next/next/no-img-element */
import FlipText from "@/components/ui/FlipText";
import Image from "next/image";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] md:h-170 lg:h-screen bg-[var(--color-bg)] overflow-hidden justify-between md:pt-15 lg:px-15 xl:pt-60 lg:pt-50 items-center"
    >
      {/* Fringe BG */}
      <div className="absolute w-[300%] md:w-[195%] h-110 md:h-80 lg:h-130 bg-[var(--color-fringe)] top-1/2 left-[-30%] rotate-120 z-0"></div>

      {/* Contenedor columnas */}
      <div className="relative z-10 flex lg:justify-between  max-w-150 md:max-w-250 lg:max-w-360 lg:mx-auto   ">
        {/* Columna izquierda */}
        <div
          className="text-white lg:flex-1 h-full flex flex-col lg:justify-center lg:gap-0 lg:pt-0 px-5 lg:px-0  
                        pb-15 lg:pb-40 md:px-15"
        >
          <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold leading-snug">
            HOLA, SOY <br />
            SEBASTIÁN! UN <br />
            <FlipText />
          </h1>

          <p className="text-sm md:text-base xl:text-lg pr-0 text-gray-500 font-bold pb-10 md:w-full lg:w-115 xl:w-full text-pretty">
            Soy un Desarrollador de Software especializado en crear plataformas
            escalables y resilientes. No solo escribo código; diseño
            arquitecturas que transforman lógicas de negocio complejas en
            sistemas de alta disponibilidad, resolviendo problemas reales con
            eficiencia
          </p>

          <a
            href="/CV_Sebastian.pdf"
            download
            className="bg-amber-500 hover:bg-[var(--color-navbar)] hover:text-white text-black font-bold 
            transition-colors duration-450 h-16 w-50 flex flex-row justify-center items-center "
          >
            Descargar CV{" "}
            <img
              src="/download-icon.svg"
              alt=""
              width={20}
              height={20}
              className="ml-2"
            />
          </a>
        </div>

        {/* Columna derecha */}
        <div className=" lg:flex-1 h-full hidden lg:flex lg:pl-10 pb-50 justify-end ">
          <div className="relative flex items-center">
            <div className="">
              <Image
                src="/profile1.png"
                alt="profile img"
                width={0}
                height={0}
                sizes="100vw"
                className="z-10 xl:w-[480px] xl:h-[515px] xl:min-w-[480px] xl:min-h-[515px]
                        lg:w-[430px] lg:h-[470px] lg:min-w-[400px] lg:min-h-[430px]"
              />
            </div>

            <svg
              viewBox="505 72 265 265"
              className="absolute overflow-visible pl-21 pt-4"
            >
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow
                    dx="0"
                    dy="1"
                    stdDeviation="7"
                    floodColor="#e08916"
                  />
                </filter>
              </defs>

              <g className="path-animate-floating">
                <path
                  className="path-animate"
                  d="M636 8c-18-11-38-9-51-1L471 73c-27 12-38 31-40 56V265c-1 18 7 36 21 48l128 75c18 12 38 12 59 0l120-69c13-6 30-28 29-52V132c0-18-7-40-28-50L636 8"
                  fill="none"
                  stroke="#e08916"
                  strokeWidth="5"
                  filter="url(#glow)"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
