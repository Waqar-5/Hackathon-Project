
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='h-full mt-32'>
      <div className='h-full flex flex-col lg:flex-row justify-center border-b-2 max-w-full mx-auto border-[#FAFAFA]'>
        
        {/* Text Section */}
        <div className='w-full lg:w-[50%] h-auto flex flex-col justify-center items-center px-4 md:px-10 lg:px-12'>
          <div className='w-full p-6'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl leading-tight text-[#2A254B]'>
              From a studio in London to a global brand with <br />
              over 400 outlets
            </h1>
            <p className='text-sm md:text-base lg:text-lg text-[#2A254B] mt-4'>
              When we started Avion, the idea was simple. Make high quality furniture <br /> affordable and available for the mass market.
            </p>
            <p className='text-sm md:text-base lg:text-lg text-[#2A254B] mt-4'>
              Handmade, and lovingly crafted furniture and homeware is what we live, <br /> breathe and design, so our Chelsea boutique became the hotbed for the London <br /> interior design community.
            </p>
          </div>

          {/* Button */}
          <div className='w-full flex justify-center'>
            <button className='w-[220px] h-[56px] bg-[#fafafa] text-black rounded-md text-sm md:text-base lg:text-lg transition-transform duration-200 hover:scale-105 '>
              Get in touch
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full lg:w-[50%] mt-8 lg:mt-0 flex justify-center'>
          <Image
            src='/pic.png'
            alt='image'
            width={630}
            height={803}
            className='object-cover rounded-md cursor-pointer max-w-full lg:max-w-none transition-transform duration-200 hover:scale-105'
          />
        </div>
        
      </div>
    </div>
  )
}

export default Features




