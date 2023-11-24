import React from 'react'
import Menucard from '@/components/Menucard'

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
    ],
    main: [
        {
            name: "Grilled Salmon with Dil Sauce",
            price: 40
        },
        {
            name: "Roast Beef with Vegetable",
            price: 20
        },
        {
            name: "Markesh Vegetarian Curry",
            price: 25
        },
        {
            name: "Spicy Vegan Potato Curry",
            price: 30
        }
    ],
    dessert: [
        {
            name: "Apple Pie with Cream",
            price: 40
        },
        {
            name: "Lemon Meringue Pie",
            price: 20
        },
        {
            name: "Tender Octopus and Fennel",
            price: 50
        },
        {
            name: "Sea Bass Cevich",
            price: 35
        }
    ]
}

export default function page() {
  return (
    <div className='flex flex-col'>
        <section className=''>
                <Menucard props={data.starters} type={false} name="starter"/>
                <div>
                    <img src="/images/menu-splash-1.png" alt="" />
                </div>
                <Menucard props={data.main} type={true} name="main"/>
                <div>
                    <img src="/images/menu-splash-2.png" alt="" />
                </div>
                <Menucard props={data.dessert} type={false} name="dessert"/>
        </section>
    </div>
  )
}
