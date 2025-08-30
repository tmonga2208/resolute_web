import Image from 'next/image'
import React from 'react'

function ServiceCard4() {
  return (
    <div className='flex flex-col md:flex-row justify-around '>
          <div className='w-full md:w-1/2 max-h-[400px] p-2 mb-2 '>
        <div className='relative max-w-[500px] max-h-[340px] object-cover'>
            <Image src="/km2.jpeg" className='relative z-10 max-h-[340px] object-cover' alt='cbt' width={500} height={600} />
            <div className="absolute bg-teal-600 w-full h-full top-3 left-3 -z-0"></div>
        </div>
       </div>
       <div className='w-full md:w-1/2 max-h-[400px] p-2 mb-2'>
        <div className='relative my-6 max-w-[500px] max-h-[340px] object-cover'>
                  <h2 className='text-teal-700 font-extrabold text-3xl font-mont'>MY</h2>
                  <h4 className='text-3xl font-mollie'>Journey</h4>
                  <p className='my-8 mr-4 font-mont'>My journey has taken me through deeply fulfilling experiences at the<span className='text-orange-400'>Gagan Narang Sports Promotion Foundation and Nudge Sports</span>, at the Odisha Naval Tata Hockey High Performance Centre in Bhubaneswar— each athlete, each moment , adding meaning to what I do .</p>   
        </div>
       </div>
    </div>
  )
}

export default ServiceCard4
