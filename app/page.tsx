import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative h-screen bg-[var(--color-bg)] overflow-hidden">
      <NavBar/>
      <div className="absolute w-[300%] md:w-[200%] h-110 bg-[var(--color-fringe)] top-1/2 left-[-30%] rotate-120 z-0"></div>

      <div className="relative z-10 flex md:justify-center h-full">

        <div className="text-white lg:w-1/2 h-full flex flex-col lg:justify-center gap-15 lg:gap-20 pt-15 px-5 lg:pl-60 lg:pb-40">
          
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            HOLA, SOY SEBASTIÁN! <br /> ANALISTA PROGRAMADOR
          </h1>

          <p className="text-sm md:text-base pr-0 md:pr-35 text-gray-500 font-bold">Soy un apasionado diseñador de UI/UX con la misión de crear experiencias digitales atractivas e 
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

        <div className=" w-1/2 h-full hidden lg:block ">
          
        </div>
      </div>

    </div>
  );
}
