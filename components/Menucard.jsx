import React from 'react'

export default function Menucard({props, type, name}) {
    console.log(props)
  return (
    <div className={`max-w-[1378px] flex ${type? " flex-row-reverse " : ""} gap-[20px] justify-center items-center m-auto`}>
                    <div className='flex-2'>
                        <img src={`/images/menu-${name}-bg.jpg`} alt="" />
                    </div>
                    <div className='flex-1'>
                        <h1>Starters</h1>
                        <div className='flex flex-col justify-center'>
                            {props.map((item,index) => {
                                return (
                                    <div className='flex' key={index}>
                                        <img src={`/images/menu-${name}-${index+1}.png`}
                                         alt="" className='rounded-full'/>
                                        <div className='flex flex-col'>
                                            <h2>{item.name}</h2>
                                            <p>Candied Jerusalem artichokes, truffle</p>
                                        </div>
                                        <h1>${item.price}</h1>
                                    </div>
                                )
                            })}
                        </div>
                        <button className='px-[68px] py-[20px] border-2 border-custom-primary mt-[65px] text-custom-primary'>See all dishes</button>
                    </div>
                </div>
  )
}
