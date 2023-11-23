import React from 'react'
import Image from 'next/image'

export default function Chef({index, name, position}) {
  return (
    <div className='text-center flex flex-col justify-end bg-[#A0AEAF]'>
        <div className=''>
            <img
                src={`/images/about-chef-${index}.png`}
            />
        </div>
        <div className='bg-custom-bgLight pt-[27px]'>
            <h1>{name}</h1>
            <h3 className='mt-[8px]'>{position}</h3>
        </div>
    </div>
  )
}
