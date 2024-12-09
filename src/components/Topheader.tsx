
import React from 'react'
import { FaSearch, FaSearchengin } from 'react-icons/fa'
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className='w-full h-[50px] md:h-[70px] lg:h-[70px] flex border-b-2 border-[#FAFAFA]   '>
      <div className='w-full h-full flex justify-between items-center px-4 md:px-8 max-w-[1440px] mx-auto  '>
        <div className='flex items-center' >
            <FaSearch className='w-[16px] h-[16px] text-gray-500 hover:cursor-pointer' />
        </div>
        <h1 className='text-[18px] md:text-[24px] text-[#22202E] font-bold hover:cursor-pointer'>Avion</h1>
        <div className='flex h-[16px]  items-center gap-4 hover:cursor-pointer'>
        <IoCartOutline className='w-[20px] h-[20px] text-gray-600'/>
        <FaRegCircleUser className='w-[20px] h-[20px] text-gray-600' />
      
        </div>
      </div>
    </div>
  )
}

export default TopHeader

