import Footer from '@/components/footer'
import ServiceCard3 from '@/components/new-card3'
import ServiceCard4 from '@/components/new-card4'
import ServiceCard5 from '@/components/new-card5'
import InspirationalQuote from '@/components/quote'
import React from 'react'

function Page() {
  return (
    <div className='flex flex-col gap-12'>
      <section>
      <ServiceCard3 />
      </section>
      <section className='relative flex flex-col items-center justify-center mt-12 gap-6'>
        <div>
          <h1 className='flex flex-col text-3xl text-orange-400 font-mont font-bold'>HI, I AM <span className='text-black font-normal font-mollie'>Kriti Monga</span></h1>
        </div>
        <div>
        <p className='flex flex-col text-orange-400 text-center font-mont'>A Sports and Performance Psychologist, CBT Practitioner, and the founder <span>of The Resolute Mind.</span></p>
        </div>
        <div className='max-w-[80%] md:max-w-[60%] font-mont text-center'>
          <p>For as long as I can remember, I&apos; ve been drawn to the quiet , inner worlds
            people carry — especially the ones that often go unnoticed behind medals, wins, or even
            everyday smiles. Over the past four years, I&apos; ve worked with athletes, performers, and
            individuals navigating the complexities of performance, pressure, and purpose.</p>
        </div>
      </section>
      <section className='my-12 mx-8 p-4 relative bg-gray-200'>
        <ServiceCard4/>
      </section>
      <section>
        <ServiceCard5/>
      </section>
      <section className='flex justify-center items-center'>
        <div className='flex flex-col text-center font-mont'><p>Through <span className='text-orange-400'>The Resolute Mind.</span>, I support not only those chasing podium finishes, but also those </p>
        <p> <span> quietly seeking peace, direction, or just a little more belief in themselves.</span></p></div>
      </section>
      <section>
        <InspirationalQuote/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default Page
