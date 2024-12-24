import Image from 'next/image'
import React from 'react'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-opacity-90 z-50'>
      <div className='max-w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          <Image 
            src='/assets/images/logo.png' 
            alt='logo' 
            width={300} 
            height={200} 
            quality={100} 
            className='w-[13rem]'
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

