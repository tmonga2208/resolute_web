import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function ServiceCard2() {
  return (
      <div className='flex flex-col md:flex-row text-white'>
          <div className='w-full md:w-1/2 max-h-[400px] p-2 mb-2'>
        <div className='relative my-6 max-w-[500px] max-h-[340px] object-cover'>
                  <h2 className='text-teal-200 font-extrabold text-3xl font-mont'>CBT</h2>
                  <h4 className='text-3xl font-mollie'>Cognitive Behavioral Therapy</h4>
                  <p className='my-8 mr-4 font-mont'>At <span className='text-orange-400'>The Resolute Mind</span>, I use <span className='text-orange-400'> Cognitive Behavioral Therapy (CBT)</span> as a structured, science-backed, and deeply human approach to help you make that shift — not just to feel better, but to live and perform with greater clarity, control, and confidence.</p>   
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
