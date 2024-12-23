import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 bg-[#2A254B] w-full max-w-[1440px] mx-auto mt-9">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-28">
          <h2 className="text-2xl md:text-4xl font-bold text-[#ffffff] mb-4">
            The furniture brand for the future, with timeless designs
          </h2>
          <button className="px-6 md:px-9 py-3 text-[#ffffff] bg-[#F9F9F926] rounded-lg mt-4 md:mt-6 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer hover:bg-gray-500 hover:text-gray-200 shadow-md hover:shadow-lg">
            View collection
          </button>
          <p className="text-[#ffffff] text-sm md:text-base mt-6 max-w-[500px]">
            A new era in eco-friendly furniture with Avion, the French luxury retail brand
            with nice fonts, tasteful colors, and a beautiful way to display things digitally
            using modern web technologies.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="/chair.png" 
            alt="Chair"
            width={600}
            height={500}
            className="rounded-lg shadow-lg object-cover transition-transform duration-150 hover:scale-105 cursor-pointer"
          />
        </div>
      </section>
    </div>
  )
}

export default Hero

