import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function ServiceCard2() {
  return (
      <div className='flex flex-col-reverse md:flex-row text-white'>
          <div className='w-full md:w-1/2 max-h-[400px] p-2 mb-2'>
        <div className='relative my-6 max-w-[500px] max-h-[340px] object-cover'>
                  <h2 className='text-teal-200 font-extrabold text-3xl font-mont'>SPORTS</h2>
                  <h4 className='text-3xl font-mollie'>and performance</h4>
                  <p className='my-8 mr-4 font-mont'>At <span className='text-orange-400'>The Resolute Mind</span>, a dedicated <span className='text-orange-400'> Sport and Performance Psychologist</span> in India, we specialize in helping athletes and organizations unlock their full potential by cultivating mental resilience and emotional strength.</p>   
                  <Link href="" className='mt-4 text-white font-bold font-mont'>LEARN MORE <span className='text-2xl'> &#8594; </span></Link>
        </div>
       </div>
          <div className='flex justify-around w-full md:w-1/2 max-h-[400px] p-2 mb-2'>
        <div className='relative max-w-[500px] max-h-[340px]'>
            <Image src="/sports.jpeg" className='relative z-10 object-cover overflow-hidden max-h-[340px]' alt='cbt' width={500} height={600} />
            <div className="absolute bg-teal-200 w-full h-full top-3 left-3 -z-0"></div>
        </div>
       </div>
       
    </div>
  )
}

export default ServiceCard2
