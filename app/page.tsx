import FlipText from "@/components/FlipText";
import NavBar from "@/components/NavBar";
import Image from 'next/image';


export default function Home() {
  return (

    
    <div className="relative lg:width-full h-screen md:h-170 lg:h-screen bg-[var(--color-bg)] overflow-hidden lg:px-20 xl:px-60">
      <NavBar/>

      {/* Fringe BG */}
      <div className="absolute w-[300%] md:w-[200%] h-110 md:h-80 lg:h-110 bg-[var(--color-fringe)] top-1/2 left-[-30%] rotate-120 z-0"></div>


      {/* Contenedor columnas */}
      <div className="relative z-10 flex md:justify-content h-full ">


        {/* Columna izquierda */}
        <div className="text-white lg:flex-1 h-full flex flex-col  lg:justify-center gap-15 lg:gap-15 pt-15 px-5 lg:px-0  
                        pb-15 lg:pb-40">
          
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            HOLA, SOY SEBASTIÁN! <br /> 
            <FlipText/>
          </h1>

          <p className="text-sm md:text-base pr-0 text-gray-500 font-bold">Soy un apasionado diseñador de UI/UX con la misión de crear experiencias digitales atractivas e 
            intuitivas. Con una sólida base en principios de diseño y un ojo para el detalle, 
            me especializo en convertir ideas complejas en interfaces intuitivas que cautivan y enganchan.</p>

          <a 
            href="/CV_Sebastian.pdf" 
            download 
            className="bg-amber-500 hover:bg-[var(--color-navbar)] hover:text-white text-black font-bold 
            transition-colors duration-450 h-16 w-50 flex flex-row justify-center items-center">
            Descargar CV <img src="/download-icon.svg" alt="" width={20} height={20} className="ml-2" />
          </a>
        </div>


        {/* Columna derecha */}
        <div className=" lg:flex-1 h-full hidden lg:flex  pb-50 justify-center ">


          <div className="relative flex items-center">

            <div className="pl-35 pt-20">

            <Image
              src="/profile1.png"
              alt="profile img"
              width={500}
              height={450}
              className="z-10 xl:width-[500px] xl:height-[450px] xl:min-w-[500px] xl:min-h-[450px]
                        lg:width-[400px] lg:height-[350px] lg:min-w-[400px] lg:min-h-[350px]" 

            />
            </div>
            
            <svg viewBox="0 0 360 360" 
                  className="absolute overflow-visible pl-21 pt-4">

              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="1" stdDeviation="6" floodColor="#e08916" />
                </filter>
              </defs>

          <g className="path-animate-floating">
              <path
              className="path-animate"
                d="m230 12 122 71c11 7 27 23 26 48v32l0 77m-206-230c21-11 41-9 58 2m-58-2-120 70c-19 10-29 26-30 49v34l0 74m30 84c38.3333 22 76.6667 44 115 66 21 13 46 14 69-1l116-68c16-10 27-31 26-53v-28m-326 84c-17-10-31-33-30-57v-27"
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
    </div>
  );
}
