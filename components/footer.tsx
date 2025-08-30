import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { MailIcon, MessageCircleMore, PhoneCall } from 'lucide-react'
import Link from 'next/link'

function Footer() {
  return (
        <div className='bg-[#048b8a] flex flex-col md:flex-row justify-center md:justify-between items-center py-4'>
              <div className='ml-4 w-1/4'>
                  <Image className='' src="/logo_only2.png" width={100} height={100} alt='logo'/> 
          </div>    
          <div className='w-1/2 flex items-center justify-center font-mont text-xs font-semibold'>
              <div>
                  <Button className="rounded-4xl bg-white text-black text-xs hover:text-white m-2">SCHEDULE A CONSULTATION</Button>
              <div className='flex text-white m-2'>
                  <PhoneCall className='mx-2'/>
                  <p>+91 80541 08485</p>
              </div>
              <div className='flex text-white m-2'>
                  <MailIcon className='mx-2'/>
                  <p>info.theresolutemind2025@gmail.com</p>
              </div>
              </div>
          </div>
          <div className='flex justify-center md:justify-between gap-9 text-xs font-mont text-white'>
              <div className='flex flex-col gap-1'>
                  <Link href="">About Us</Link>
                  <Link href="">Services</Link>
                  <Link href="">Resources</Link>
                  <Link href="">Contact Us</Link>
              </div>
            <div className='flex flex-col gap-1'>
              <Link href="/cookie-preferences">Cookie Preferences</Link>
              <Link href="/do-not-sell">Do Not Sell or Share</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-conditions">Terms & Conditions</Link>
              <Link href="/copyright">Copyright</Link>
            </div>
              <div className='flex items-center justify-center mr-4'>
                  <Button className="rounded-full cursor-pointer text-6xl bg-teal-200 text-white">
                      <MessageCircleMore fill='white' className=''/>
                  </Button>
              </div>
          </div>
          </div>
  )
}

export default Footer
