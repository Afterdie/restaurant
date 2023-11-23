import React from 'react'
import Image from 'next/image'

export default function Splash({index, title}) {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
        <img
          src={`/images/about-feature-${index}.svg`}
          alt={title}
        />
        <div className='my-[28px] '>
        <h1>{title}</h1>
        <p className='mt-[14px]'>Professional consider everyone
        probls small niche friendly.</p>
        </div>
        <button className='text-custom-primary'>See More</button>
    </div>
  )
}
