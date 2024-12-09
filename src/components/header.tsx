import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-auto flex items-center bg-white shadow-md  mt-7 '>
      <nav className='flex justify-center w-full max-w-[1440px] px-4 md:px-8 mx-auto'>
        <ul className='flex flex-wrap justify-between items-center gap-4 md:gap-6 w-full md:w-auto'>
            <li><Link href={"/#"} className='text-sm md:text-base'>Plant pots</Link></li>
            <li><Link href={"/#"} className='text-sm md:text-base'>Ceramics</Link></li>
            <li><Link href={"/#"} className='text-sm md:text-base'>Tables</Link></li>
            <li><Link href={"/#"} className='text-sm md:text-base'>Chairs</Link></li>
            <li><Link href={"/#"} className='text-sm md:text-base'>Crockery</Link></li>
            <li><Link href={"/#"} className='text-sm md:text-base'>Tableware</Link></li>
            <li><Link href={"/#"} className='text-sm md:text-base'>Cutlery</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
