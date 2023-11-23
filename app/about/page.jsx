import React from 'react'
import restaurantImage from "../../public/images/about-1.jpg";
import signature from "../../public/images/about-2.svg";
import pattern from '../../public/images/about-pattern.svg'
import ceo from '../../public/images/about-ceo.png'
import splashBg from '../../public/images/about-splash.png'
import Image from 'next/image'

import Splash from '@/components/Splash';
import Label from '@/components/Label';
import Chef from '@/components/Chef';
import Input from '@/components/Input';

const data = {
  features: [
    {
      key: 'fresh',
      title: 'Fresh Products',
    },
    {
      key: 'skilled',
      title: 'Skilled Chefs',
    },
    {
      key: 'drinks',
      title: 'Drinks & Juices',
    },
    {
      key: 'vegan',
      title: 'Vegan Cuisine',
    },
  ],
  chefs: [
    {
      name: 'Avroko',
      position: 'Master Chef'
    },
    {
      name: 'Evan Mattew',
      position: 'Master Chef'
    },
    {
      name: 'Diane Clarkson',
      position: 'Master Chef'
    },
    {
      name: 'Dan Rafalin',
      position: 'Assistant Chef'
    }
  ]
}

export default function page() {
  return (
    <div className='flex flex-col'>
      <div className='flex max-w-[1378px] m-auto gap-[20px]'>
      <div>
        <Label title="ABOUT US"></Label>
        <h1 className='mt-[24px]'>Quality and Tradition</h1>
        <p className='mt-[20px]'>Lorem Ipsum is that it has a more-or-less normal distribution of<br/> letters, as opposed to using 'Content here, content gfshere making<br/> look like readable English. Many desktop publishing packages.</p>
        <h2 className='mt-[44px]'>JOSEFINE</h2>
        <Image
          className='mt-[28px]'
          src={signature}
        ></Image>
        <button className='px-[68px] py-[20px] border-2 border-custom-primary mt-[65px] text-custom-primary'>See More</button>
      </div>
      <div className='relative'>
        <Image
          src={restaurantImage}
          alt='restaurant image'
          width={553}
          height={639}
          className='rounded-tr-[160px] z-40 relative'
        ></Image>
        <Image
          src={pattern}
          alt='mandala pattern'
          width={282}
          height={275}
          className='absolute top-0 right-0 z-10 transform translate-x-[40%]'
        ></Image>
        <Image
          src={ceo}
          alt="Josefine ceo portrait"
          className='absolute bottom-0 left-0 z-50 transform translate-x-[-50%] translate-y-[40%]'
        ></Image>
      </div>
      
    </div>
    <section className='relative mt-[300px] bg-cover bg-center bg-[url("/images/about-splash.png")] h-[496px] flex justify-center text-custom-bgLight'>
      <div className='flex z-50 relative gap-[28px] max-w-[1378px]'>
      {data.features.map((item, index) => {
        return (
          <Splash key={index} title={item.title} index={index}/>
        )
      })}
      </div>
    </section>
    <section className='py-[187px] bg-custom-bgLight text-center'>
      <Label title="TEAM"></Label>
      <h1 className='mt-[18px] text-custom-'>Meet Our Professional Chefs</h1>
      <div className='flex gap-[14px] justify-center mt-[47px]'>
        {data.chefs.map((item, index) => {
          return (
            <Chef key={index} name={item.name} position={item.position} index={index}/>
          )
        })}
      </div>
    </section>
    <section className='bg-custom-bgDark text-center py-[141px] text-custom-bgLight'>
      <div className='max-w-[60%] flex flex-col justify-center items-center m-auto'>
        <Label title="TESTIMONIAL"/>
        <h1 className='mt-[20px]'>What Our Clients Say</h1>
        <img src="/images/test-comma.svg" alt="" className='mt-[44px]'/>
        <div className='flex justify-between gap-[144px] mt-[34px]'>
          <img src="/images/test-arrow.svg" alt="" />
          <p>"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking  further overall value proposition organicallfriendly.</p>
          <img src="/images/test-arrow.svg" alt="" className='transform rotate-180'/>
        </div>
      </div>
      <div className='flex flex-col items-center mt-[38px]'>
        <img src="/images/test-person.png" alt="" />
        <h1 className='mt-[28px]'>Daniyal Sppra</h1>
        <p className='text-custom-primary mt-[15px]'>Designer</p>
      </div>
    </section>
    <section className='flex flex-col justify-center items-center px-[272px] py-[200px]'>
      <Label title="GALLERY"/>
      <h1>What We Make</h1>
      <div className='flex gap-[15px]'>
        <div className='flex flex-col gap-[15px]'>
          <img src="/images/gallery-1.jpg" alt="" />
          <img src="/images/gallery-2.jpg" alt="" />
        </div>
        <div>
          <img src="/images/gallery-3.jpg" alt="" />
        </div>
        <div className='flex flex-col gap-[15px]'>
          <img src="/images/gallery-4.jpg" alt="" />
          <img src="/images/gallery-5.jpg" alt="" />
        </div>
      </div>
    </section>
    <section className='bg-[url("/images/reservation-bg.png")] bg-center bg-cover py-[197px] px-[432px]'>
      <div className='bg-custom-bgDark p-[156px] m-auto text-custom-bgLight text-center'>
        <Label title="RESERVATION"/>
        <h1>Book your table now</h1>
        <div className='flex flex-col'>
          <div className='flex gap-[29px]'>
            <Input/>
            <Input/>
          </div>
          <div className='flex'>
            <Input/>
            <Input/>
            <Input/>
          </div>
        </div>
        <button className='bg-custom-bgLight text-custom-bgDark py-[20px] px-[51px] flex-shrink'>Book a Table</button>

      </div>
    </section>
    </div>
  )
}
