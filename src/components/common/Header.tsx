import Image from 'next/image'
import React from 'react'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className='fixed top-0 w-full bg-opacity-90 z-50'>
      <div className='w-full bg-white shadow-sm lg:bg-transparent lg:shadow-none lg:w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center  justify-between py-4'>
          <Image 
            src='/assets/images/logo.png' 
            alt='logo' 
            width={300} 
            height={200} 
            priority
            quality={100} 
            className='w-[9rem] h-[3.6rem] lg:w-[13rem] lg:h-[5rem]'
          /> 
          <Navigation />
          <Image 
            src='/assets/images/LetsTalk.png' 
            alt='letsTalk' 
            width={300} 
            height={200} 
            quality={100} 
            className='w-[6rem] lg:block hidden cursor-pointer'
          /> 
        </div>
      </div>
    </header>
  )
}

export default Header

