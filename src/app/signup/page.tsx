import React from 'react'

const SignUp = () => {
  return (
    <div className='h-[500px]  border-[65px] border-[#F9F9F9]  flex justify-center items-center '>
      <div className='bg-[#FFFFFF] '>
        <h1 className='text-[36px] leading-[50px] text-center h-[50px] '>Join the club and get the benefits</h1>
        <p className='text-[16px] leading-6 text-center'>Sign up for our newsletter and receive exclusive offers on new <br /> ranges, sales, pop up stores and more</p>
      
      <div className='w-[372px] h-[56px] flex justify-center items-center ml-[100px] bg-[#F9F9F9] rounded-md mt-16 '>
        <input type="text" className='w-[300px] h-[56px] bg-[#F9F9F9]' placeholder='your@email.com' />
        <button className='w-[100px] h-[56px]  bg-[#4E4D93] text-[#ffffff]'>Signup</button>
      </div>
      </div>
    </div>
  )
}

export default SignUp
