import Image from 'next/image';
import React from 'react';

const Ceramic = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 mb-20 mt-8">
      {/* Heading */}
      <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] h-[39px] flex mb-8  sm:ml-9 md:[40px] ">
        New Ceramics
      </h1>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/chair.png"
            alt="chair"
            width={305}
            height={375}
            className="rounded-sm h-[260px] w-[205px] sm:h-[280px] cursor-pointer sm:w-[225px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <p className="mt-3 text-[16px] sm:text-[18px] lg:text-[20px]">The Dandy Chair</p>
          <span className="mt-1 text-[14px] sm:text-[16px] lg:text-[18px]">£250</span>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/vase.png"
            alt="vase"
            width={305}
            height={375}
            className="rounded-sm h-[260px] w-[205px] cursor-pointer sm:h-[280px] sm:w-[225px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <p className="mt-3 text-[16px] sm:text-[18px] lg:text-[20px]">Rustic Vase Set</p>
          <span className="mt-1 text-[14px] sm:text-[16px] lg:text-[18px]">£155</span>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/silky.png"
            alt="silky"
            width={305}
            height={375}
            className="rounded-sm h-[260px] w-[205px] cursor-pointer sm:h-[280px] sm:w-[225px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <p className="mt-3 text-[16px] sm:text-[18px] lg:text-[20px]">The Silky Vase</p>
          <span className="mt-1 text-[14px] sm:text-[16px] lg:text-[18px]">£125</span>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center">
          <Image
            src="/Lamping.png"
            alt="lamp"
            width={305}
            height={375}
            className="rounded-sm h-[260px] w-[205px] sm:h-[280px] cursor-pointer sm:w-[225px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <p className="mt-3 text-[16px] sm:text-[18px] lg:text-[20px]">The Lucy Lamp</p>
          <span className="mt-1 text-[14px] sm:text-[16px] lg:text-[18px]">£399</span>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8 sm:mt-10 lg:mt-[65px]">
        <button className="text-[16px] sm:text-[18px] lg:text-[20px] px-6 sm:px-8 py-3 sm:py-4 w-[160px] sm:w-[180px] lg:w-[220px] h-[46px] sm:h-[50px] lg:h-[56px] flex justify-center items-center rounded-md bg-[#F9F9F9] transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-slate-300">
          View Collection
        </button>
      </div>
    </div>
  );
};

export default Ceramic;
