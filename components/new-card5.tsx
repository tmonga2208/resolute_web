import Image from 'next/image'
import React from 'react'

function ServiceCard5() {
  return (
    <div className='flex flex-col md:flex-row justify-around bg-[url(/bg3.jpg)] bg-cover py-4'>
    <div className='w-full justify-center items-center flex md:w-1/2 p-2 mb-2'>
        <div className='relative justify-center items-center flex flex-col text-left max-w-[550px]'>
                  <div className='flex  items-center justify-center'>
                      <p className='font-mont ml-3'>But <span className='text-orange-400'>The Resolute Mind.</span> was born from something even deeper — the understanding that performance isn &apos;t just about sport. Sometimes, it&apos;s about showing up for yourself when you&apos;re in a slump . When you&apos;re unsure of your direction. When life feels heavy, stuck, or confusing. use tools like <span className='text-orange-400'>Cognitive Behavioural Therapy (CBT)</span>, mindfulness, and biofeedback to help people find their footing again — whether its an athlete preparing for a championship, or someone simply trying to get through a tough season in life. My work blends science with heart — because he align, growth, and clarity begin when you feel safe, heard, and gently challenged.</p>
            </div>
        </div>
       </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative h-[350px]  object-cover">
                <Image src="/logo2.png" className="relative object-cover object-[30%_25%]  h-[350px] z-10" alt="Kriti Monga" width={450} height={600} />
            </div>
        </div>
       
    </div>
  )
}

export default ServiceCard5