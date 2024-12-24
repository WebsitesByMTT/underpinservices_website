import React from 'react'
import { FlipWords } from '../ui/flip-words'

const FlipWordsAnimation = () => {
  const words = ['Keys', 'Values']
  return (
    <div>
      <FlipWords words={words}
      />
    </div>
  )
}

export default FlipWordsAnimation
