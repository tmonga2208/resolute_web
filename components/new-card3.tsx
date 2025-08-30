import Image from 'next/image'
import React from 'react'

function ServiceCard3() {
  return (
    <div className='flex flex-col md:flex-row justify-around bg-[url(/bg1.jpg)] bg-cover py-4'>
          <div className='w-full md:w-1/2 max-h-[400px] p-2 mb-2'>
        <div className='relative justify-center items-center flex flex-col text-left my-6 max-w-[500px] h-[350px] object-cover'>
            <div className='flex flex-col items-baseline'>
                  <h2 className='text-white font-extrabold text-5xl font-mont'>KNOW</h2>
                  <h2 className='text-6xl text-teal-700 font-mollie'>More About Me</h2>
            </div>
        </div>
       </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative h-[350px]  object-cover">
                <Image src="/km.JPG" className="relative object-cover object-[30%_25%]  h-[350px] z-10" alt="Kriti Monga" width={450} height={600} />
                <div className="absolute bg-teal-700 opacity-80 w-full h-full top-3 left-3 -z-0"></div>
            </div>
        </div>
       
    </div>
  )
}

export default ServiceCard3