import React from 'react'
import { InfiniteMoving } from './others/InfiniteMoving'
import TextDrop from './others/textDrop'
import FlipWordsAnimation from './others/flipWordAnimation'

const Banner = () => {
    return (
        <div className='relative'>
            <InfiniteMoving />
            <div className='absolute top-[50%] left-[50%] w-full translate-x-[-50%]'><TextDrop /></div>
            <FlipWordsAnimation/>
        </div>
    )
}

export default Banner
