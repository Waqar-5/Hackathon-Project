import Signup from '@/components/Signup'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaRegCircleUser } from 'react-icons/fa6'
import { IoCartOutline } from 'react-icons/io5'

const AboutMe = () => {
  return (
    <>
    <div className='flex justify-center items-center mt-9 gap-4 '>
      <Link href={'/productlisting'} className='hover:underline hover:cursor-pointer'> Products</Link>
      <Link href={'/shoppingcart'} className='hover:underline hover:cursor-pointer'> Cart</Link>
    </div>
    <div className='h-auto px-4 md:px-10 lg:px-12 py-4 mt-10 md:py-8 md:mt-12'>
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        <p className='text-center lg:text-left mb-4 lg:mb-0'>A brand built on the love of craftmanship, <br />
        quality and outstanding customer service</p>
        <button className=' px-8 py-3 rounded-md bg-[#F9F9F9] hover:bg-slate-400 transition-trasform duration-150 hover:scale-105'>View our products</button>
      </div>
    </div>

  
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between px-2 md:px-10 lg:px-12'>
        {/* Left Section */}
        <div className='w-full lg:w-[50%] bg-[#2A254B] border-2 border-[#F9F9F9] px-1 md:px-10 lg:px-12 py-1 h-[378px] flex flex-col justify-between'>
          <h1 className='text-white text-3xl md:text-4xl font-semibold mb-4'>
            It started with a small idea
          </h1>
          <p className='text-white text-sm md:text-base mb-6'>
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
           <button className='w-[200px] mb-5 md:mb-0 h-[68px]  left-[64px]
px-[12px] py-[36px] rounded-md bg-slate-200 hover:bg-slate-400 transition-trasform duration-150 hover:scale-105 '>View our products</button>
        </div>
 
        {/* Right Section (Image) */}
        <div className='w-full lg:w-[50%] mt-8 lg:mt-0 flex justify-center'>
          <Image
            src='/Image Block.png'
            alt='Image'
            width={600}
            height={300}
            className='object-cover w-full h-full rounded-md transition-trasform duration-150 hover:scale-105'
          />
        </div>
      </div>
    </div>




    




    <div className='h-full mt-32'>
      <div className='h-full flex justify-center max-w-full mx-auto'>
        {/* Image Section */}
        <div className='w-full lg:w-[50%] mt-8 lg:mt-0'>
          <Image
            src='/image.png'
            alt='image'
            width={630}
            height={803}
            layout='responsive'
            className='object-cover rounded-md transition-trasform duration-150 hover:scale-105'
          />
        </div>

        {/* Text Section */}
        <div className='w-full lg:w-[50%] h-auto flex flex-col justify-center items-center px-4 md:px-10 lg:px-12'>
          <div className='w-full'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl leading-tight text-[#2A254B]'>
              Our service isn’t just personal, it’s actually
              hyper personally exquisite
            </h1>
            <p className='text-sm md:text-base lg:text-lg text-[#2A254B] mt-4'>
              When we started Avion, the idea was simple. Make high quality furniture <br /> affordable and available for the mass market.
            </p>
            <p className='text-sm md:text-base lg:text-lg text-[#2A254B] mt-4'>
              Handmade, and lovingly crafted furniture and homeware is what we live, <br /> breathe and design, so our Chelsea boutique became the hotbed for the London <br /> interior design community.
            </p>
          </div>
          {/* Button */}
          <button className='w-[220px] h-[56px] bg-white hover:bg-slate-400 transition-trasform duration-150 hover:scale-105 text-black text-sm md:text-base lg:text-lg ml-64'>
            Get in touch
          </button>
        </div>
      </div>
    </div>

<div>
    <Signup />
</div>

    </>

  )
}

export default AboutMe
