import React from 'react'
import { FlipWords } from '../ui/flip-words'
import Image from 'next/image'

const FlipWordsAnimation = () => {
  const words = ['Schedule Free Call', 'Get Free Answer','Lets Discuss','Schedule Now']
  return (
    <div className='flex justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary mt-[8%] lg:mt-[13%]'>
      <FlipWords words={words} />
    </div>
  )
}

export default FlipWordsAnimation
