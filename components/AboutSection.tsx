import React from 'react'
import Image from 'next/image';

const AboutSection = () => {
  return (
  
      <section className="relative h-200 md:h-auto lg:h-screen bg-black overflow-hidden justify-between lg:px-15
                          flex">

          <div className="relative lg:w-full flex h-full lg:h-full lg:max-w-320 md:max-w-250 max-w-150 mx-auto flex-col
                          lg:flex-row justify-between ">

            <div className='pt-6 md:pt-16 md:px-15 lg:px-0 px-5 pb-10 lg:max-w-115 lg:flex-col lg:pr-10'>
              <h1 className='text-amber-500 text-xl font-medium tracking-wide'>ABOUT ME</h1>
              <h2 className='text-white text-3xl md:text-5xl lg:text-4xl font-bold pt-4 lg:leading-relaxed'>Transformando vision en portafolios digitales</h2>
              <p className='text-gray-400 text-md pt-10 md:pt-15'>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit 
                sed thisnquia consequuntur magni dolores eos designer heresm qui ratione</p>
            </div>

              <div className="relative pt-10 md:pt-15 lg:pt-20 flex justify-center">
                <div className="relative 
                                w-[86vw] h-[110vw] max-w-[356px] max-h-[413px] 
                                md:w-[50vw] md:h-[65vw]
                                lg:w-[40vw] lg:h-[48vw] lg:max-w-[410px]  lg:max-h-[491px]  ">

                  <div
                    className="absolute bg-amber-500 z-0 
                              top-[-15px] right-[-15px] w-[90%] h-[95%]
                              lg:top-[-25px] lg:right-[-25px]"
                  ></div>

                  <Image
                    src="/aboutme.png"
                    alt="about img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="relative z-10 object-cover w-full h-full"
                  />
                </div>
              </div>

        </div>
      </section>
      
  );
}

export default AboutSection 