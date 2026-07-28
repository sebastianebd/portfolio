import React from "react";
import AnimatedTitle from "@/components/ui/TitleMotion";
import AnimatedImage from "@/components/ui/ImageMotion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative h-auto bg-black overflow-hidden justify-between lg:px-15
                          flex pb-24"
    >
      <div
        className="relative lg:w-full flex h-full lg:h-full lg:max-w-360 md:max-w-250 max-w-150 mx-auto flex-col
                          lg:flex-row xl:mt-20  "
      >
        <div className="pt-6 md:pt-16 md:px-15 lg:px-0 px-5 pb-10 lg:flex-1 lg:flex-col lg:pr-12 xl:pr-32">
          <h1 className="text-amber-500 text-xl xl:text-2xl font-medium tracking-wide">
            ABOUT ME
          </h1>
          <AnimatedTitle text="Construyendo software que escala y resuelve problemas reales" />
          <div className="flex flex-col gap-10 pt-12 lg:pt-16">
            <div className="flex gap-4">
              <div className="w-12 h-0.5 bg-gray-400 mt-4 hidden lg:block shrink-0"></div>
              <p className="text-gray-400 text-md lg:pt-0 flex lg:max-w-full leading-loose xl:text-lg text-pretty">
                Como Desarrollador Full-Stack, me especializo en el ecosistema
                JavaScript/TypeScript. Disfruto asumiendo la responsabilidad de
                todo el ciclo de vida del producto: desde el diseño de bases de
                datos y la creación de APIs resilientes —capaces de procesar
                grandes volúmenes de datos en segundo plano—, hasta la
                construcción de interfaces seguras y fluidas. Mi mayor
                motivación es construir sistemas altamente disponibles en los
                que los usuarios y las empresas puedan confiar a ciegas.
              </p>
            </div>
          </div>
        </div>

        <div className="relative pt-10 md:pt-15 lg:pt-20 flex justify-center lg:pr-7 lg:ml-auto">
          <div
            className="relative 
                                w-[86vw] h-[110vw] max-w-[356px] max-h-[413px] 
                                md:w-[50vw] md:h-[65vw] md:max-w-[400px] md:max-h-[500px]
                                lg:w-[40vw] lg:h-[48vw] lg:max-w-[410px]  lg:max-h-[491px]  "
          >
            <AnimatedImage
              src="/aboutme.png"
              alt="about img"
              className="relative z-10 object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
