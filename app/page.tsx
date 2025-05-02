import SplitCarousel from "@/components/splitCarousel";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import LogoCarousel from "@/components/ui/logo-carousel";
import ServiceCard from "@/components/new-card";
import ServiceCard2 from "@/components/new-card2";
import { SimpleTestimonialCard } from "@/components/test";
import { ClientReviewCard } from "@/components/review";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <div>
      <div>
        <SplitCarousel/>
      </div>
      <div>
        <section className="flex flex-col md:flex-row items-center gap-6 m-12">
          <div className="relative w-full md:w-1/2 flex flex-col text-gray-500 p-6 text-lg">
            <div className="my-4">
              <h1 className="text-orange-400 text-3xl font-bold ">ABOUT</h1>
            <h2 className="text-2xl">Kriti Monga</h2>
            </div>
            <div className={`${montserrat.className} my-8`}>
              <p>At <span className="text-orange-400">The Resolute Mind</span>, we believe that true excellence is achieved by mastering both the mind and body.</p>
              </div>
            <p className={`${montserrat.className}`}>Founded by <span className="text-orange-400">Kriti Monga</span>, a dedicated <span className="text-orange-400">Sport and Performance Psychologist</span> in India, we specialize in helping athletes and organizations unlock their full potential by cultivating mental resilience and emotional strength.</p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative h-[400px]  object-cover">
              <Image src="/km.JPG" className="relative object-cover h-[400px] z-10" alt="Kriti Monga" width={350} height={500} />
              <div className="absolute bg-teal-600 opacity-20 w-full h-full top-3 left-3 -z-0"></div>
             </div>
          </div>
        </section>
      </div>
      <div>
        <section>
          <div className="flex flex-col items-center justify-center py-4">
            <h1 className="text-4xl font-bold text-teal-600">SERVICES</h1>
            <p className="text-3xl">that we offer</p>
          </div>
          <div className="m-4 p-4 relative bg-gray-200">
            <ServiceCard/>
          </div>
          <div className="m-4 p-4 relative bg-teal-600">
            <ServiceCard2/>
          </div>
        </section>
      </div>
      <section>
         <div className="flex flex-col items-center justify-center py-4">
            <h1 className="text-4xl font-bold text-teal-600">CLIENTS</h1>
            <p className="text-3xl">we worked with</p>
          </div>
      <div className="flex items-center justify-center m-4">
        <LogoCarousel/>
      </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row bg-teal-100">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="grid w-[400px] grid-cols-1 gap-3 my-12"> 
          <ClientReviewCard content="This is a sample client review." />
          <ClientReviewCard content="This is a sample client review." />
            <ClientReviewCard content="This is a sample client review." />
            </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:justify-baseline md:items-baseline">
          <h2 className="font-mollie font-normal text-5xl mt-12">Trusted by Clients</h2>
          <div className="my-12">
            <SimpleTestimonialCard imageSrc="" title="Lorem ipsum" content="Lorem ipsum dolor sit amet, menandri urbanitas prodesset ad pro. Ex pri stet eleifend constituto, causae consetetur qui ex. Qui minimum ullamcorper ex. Illud noluisse est id, ne labore iisque eripuit pro.Lorem ipsum dolor sit amet, menandri urbanitas prodesset ad pro. Ex pri stet eleifend constituto, causae consetetur qui ex. Qui minimum ullamcorper ex. Illud noluisse est id, ne labore iisque eripuit pro."/>
          <Link className="mt-4 font-bold font-mont text-teal-600" href="">MORE<span className='text-2xl'> &#8594; </span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}