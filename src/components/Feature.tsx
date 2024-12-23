import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { TbTruckDelivery } from "react-icons/tb";
import { LuSprout } from "react-icons/lu";
import Image from 'next/image';

const FamousProducts = () => {
  return (
    <div className='h-full mt-12'>
      <div className='flex justify-center items-center pb-12'>
        <h1 className='text-2xl font-normal text-center'>
          What makes our brand different
        </h1>
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 cursor-pointer md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center items-start w-full px-4'>
        {/* Box 1 */}
        <div className='flex flex-col items-center justify-center w-full max-w-[250px] h-[200px] bg-[#F9F9F9] rounded-lg p-4 transition-transform duration-300 hover:scale-105'>
          <TbTruckDelivery className='h-[24px] w-[24px] mb-4' />
          <h2 className='font-normal text-[19px] text-center'>Next day as standard</h2>
          <p className='text-[16px] text-center'>
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        {/* Box 2 */}
        <div className='flex flex-col items-center cursor-pointer justify-center w-full max-w-[250px] h-[200px] bg-[#F9F9F9] rounded-lg p-4 transition-transform duration-300 hover:scale-105'>
          <IoIosCheckmarkCircleOutline className='h-[24px] w-[24px] mb-4' />
          <h2 className='font-normal text-[19px] text-center'>Made by true artisans</h2>
          <p className='text-[16px] text-center'>
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        {/* Box 3 */}
        <div className='flex flex-col items-center cursor-pointer justify-center w-full max-w-[250px] h-[200px] bg-[#F9F9F9] rounded-lg p-4 transition-transform duration-300 hover:scale-105'>
          <Image src="/pur.png" alt="purchase" className='h-[24px] w-[24px] mb-4' width={24} height={24} />
          <h2 className='font-normal text-[19px] text-center'>Unbeatable prices</h2>
          <p className='text-[16px] text-center'>
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>

        {/* Box 4 */}
        <div className='flex flex-col items-center cursor-pointer justify-center w-full max-w-[250px] h-[200px] bg-[#F9F9F9] rounded-lg p-4 transition-transform duration-300 hover:scale-105'>
          <LuSprout className='h-[24px] w-[24px] mb-4' />
          <h2 className='font-normal text-[19px] text-center'>Recycled packaging</h2>
          <p className='text-[16px] text-center'>
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
}

export default FamousProducts;






