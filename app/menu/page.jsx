import React from 'react'

const data = {
    starters: [
        {
            name: "Raw Scallops from Erquy",
            price: 40
        },
        {
            name: "Spring Roll",
            price: 20
        },
        {
            name: "French Onion Soup",
            price: 25
        },
        {
            name: "Tomato Bruschetta",
            price: 30
        }
    ]
}

export default function page() {
  return (
    <div className='flex flex-col'>
        <section className=''>
                <div className='max-w-[1378px] flex gap-[20px] justify-center items-center m-auto'>
                    <div className='flex-2'>
                        <img src="/images/menu-starters-bg.jpg" alt="" />
                    </div>
                    <div className='flex-1'>
                        <h1>Starters</h1>
                        <div className='flex flex-col justify-center'>
                            {data.starters.map((item,index) => {
                                return (
                                    <div className='flex' key={index}>
                                        <img src={`/images/menu-starter-${index+1}.png`}
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
        </section>
    </div>
  )
}
