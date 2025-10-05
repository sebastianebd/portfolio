import React from 'react'
import Image from 'next/image';

const AboutSection = () => {
  return (
  
      <section className="relative lg:width-full h-screen md:h-170 lg:h-screen bg-black overflow-hidden justify-between lg:px-10">

          <div className="relative lg:min-w-230 flex md:justify-content h-full lg:max-w-320 mx-auto">

            <div className='pt-6 px-4'>
              <h1 className='text-amber-500 text-xl font-medium tracking-wide'>ABOUT ME</h1>
              <h2 className='text-white text-3xl font-bold pt-4'>Transformando vision en portafolio digital</h2>
              <p className='text-gray-400 text-md pt-10'>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit 
                sed thisnquia consequuntur magni dolores eos designer heresm qui ratione</p>
            </div>

            <div className='absolute'>
              <Image
                src="/aboutme.png"
                alt="about img"
                width={0}
                height={0}
                sizes="100vw"
                className="" 
              />
            </div>
          

        </div>

      </section>
      
  );
}

export default AboutSection