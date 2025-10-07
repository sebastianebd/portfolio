import React from 'react'
import Image from 'next/image';
import AnimatedTitle from './TitleMotion';
import AnimatedImage from './ImageMotion';

const AboutSection = () => {
  return (
  
      <section className="relative h-auto md:h-auto lg:h-screen bg-black overflow-hidden justify-between lg:px-15
                          flex">

          <div className="relative lg:w-full flex h-full lg:h-full lg:max-w-320 md:max-w-250 max-w-150 mx-auto flex-col
                          lg:flex-row  ">

            <div className='pt-6 md:pt-16 md:px-15 lg:px-0 px-5 pb-10 lg:max-w-150 lg:flex-col lg:pr-3'>
              <h1 className='text-amber-500 text-xl font-medium tracking-wide'>ABOUT ME</h1>
              <AnimatedTitle text="Transformando vision en portafolios digitales" />
              <div className='lg:flex  gap-4 pt-20'>
                <div className=' w-70 max-w-35 h-0.5 bg-gray-400 mb-10 hidden lg:block mt-3'></div>
                <p className='text-gray-400 text-md pt-10 md:pt-15 lg:pt-0 flex lg:max-w-full leading-loose xl:text-lg'>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit 
                  sed thisnquia consequuntur magni dolores eos designer heresm qui ratione</p>
              </div>

            </div>

              <div className="relative pt-10 md:pt-15 lg:pt-20 flex justify-center lg:pr-7 lg:ml-auto">
                <div className="relative 
                                w-[86vw] h-[110vw] max-w-[356px] max-h-[413px] 
                                md:w-[50vw] md:h-[65vw]
                                lg:w-[40vw] lg:h-[48vw] lg:max-w-[410px]  lg:max-h-[491px]  ">

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
}

export default AboutSection 