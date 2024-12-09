import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'
import { IoLogoSkype } from 'react-icons/io'

const Footer = () => {
  return (
    <>
    <div className='px-6 md:px-12 py-8 bg-[#2A254B] '>
      <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
        {/* Menu Section */}
        <div className="text-[#FAFAFA]   w-full sm:w-auto">
          <h1 className="text-lg md:text-xl font-bold">Menu</h1>
          <div className='space-y-2'>
            <h1><Link href={'/'}>New Arrivals</Link></h1>
            <h1><Link href={'/'}>Best sellers</Link></h1>
            <h1><Link href={'/'}>Recently viewed</Link></h1>
            <h1><Link href={'/'}>Popular this week</Link></h1>
            <h1><Link href={'/Allprodcuts'}>All Products</Link></h1>
          </div>
        </div>

        {/* Categories section */}
        <div className="text-[#FAFAFA]  w-full sm:w-auto">
          <h1 className="text-lg md:text-xl font-bold">Categories</h1>
          <div className='space-y-2'>
            <h1><Link href={'/'}>Crockery</Link></h1>
            <h1><Link href={'/'}>Furniture</Link></h1>
            <h1><Link href={'/'}>Homeware</Link></h1>
            <h1><Link href={'/'}>Plant pots</Link></h1>
            <h1><Link href={'/'}>Chairs</Link></h1>
          </div>
        </div>

        {/* Company section */}
        <div className="text-[#FAFAFA]   w-full sm:w-auto">
          <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
          <div className='space-y-2'>
            <h1><Link href='/about'>About us</Link></h1>
            <h1><Link href={'/'}>Vacancies</Link></h1>
            <h1><Link href={'/'}>Contact us</Link></h1>
            <h1><Link href={'/'}>Privacy</Link></h1>
            <h1><Link href={'/'}>Return policy</Link></h1>
          </div>
        </div>

        {/* Mailing List  */}
        <div className="text-white w-full sm:w-auto">
          <h1 className="text-lg md:text-xl font-bold">Join our mailing list</h1>
          <div className='mt-4'>
            <input
              type="text"
              placeholder="your@email.com"
              className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md'
            />
            <button className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md transition-transform duration-150 hover:scale-105'>
              Sign up
            </button>
          </div>
        </div>
      </div>

      <hr className='bg-[#4E4D93] my-8' />

      {/* Footer Bottom  */}
      <div className='flex flex-wrap justify-between items-center text-white gap-4'>
        <div>
          <h1>Copyright 2022 Avion LTD</h1>
        </div>
     
        <div className="flex flex-wrap justify-center gap-4 mt-4">
  <Link
    href={'/'}
    className="group transition-transform duration-300 hover:scale-125 hover:text-[#0e76a8]"
  >
    <FaLinkedin size={24} className="transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
  </Link>
  <Link
    href={'/'}
    className="group transition-transform duration-300 hover:scale-125 hover:text-[#3b5998]"
  >
    <FaFacebookSquare size={24} className="transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
  </Link>
  <Link
    href={'/'}
    className="group transition-transform duration-300 hover:scale-125 hover:text-[#E1306C]"
  >
    <FaInstagram size={24} className="transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
  </Link>
  <Link
    href={'/'}
    className="group transition-transform duration-300 hover:scale-125 hover:text-[#00aff0]"
  >
    <IoLogoSkype size={24} className="transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
  </Link>
  <Link
    href={'/'}
    className="group transition-transform duration-300 hover:scale-125 hover:text-[#1DA1F2]"
  >
    <FaTwitter size={24} className="transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
  </Link>
  <Link
    href={'/'}
    className="group transition-transform duration-300 hover:scale-125 hover:text-[#bd081c]"
  >
    <FaPinterest size={24} className="transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
  </Link>
</div>

      </div>
    </div>
  </>
  )
}

export default Footer
