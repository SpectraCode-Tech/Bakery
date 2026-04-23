import React from 'react'
import { BsCake } from 'react-icons/bs'
import Fresh from '../assets/fresh.png'
import expressDelivery from '../assets/express.png'

const Reasons = [
    {
        icons: <BsCake size={40} />,
        title: "Custom Designs",
        description: "We create unique and beautiful cakes for every occasion."
    },
    {
        icons: `${Fresh}`,
        title: "Premium Ingredients",
        description: "We use only the freshest ingredients to ensure the best taste."
    },
    {
        icons:`${expressDelivery}`,
        title: "Timely Delivery",
        description: "Get your cakes delivered quickly and safely to your doorstep or event location."
    }
]

const Features = () => {
  return (
    <section className='p-10 bg-light'>
          <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-3">Why Choose Us?</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5 justify-items-center'>
      {Reasons.map((reason, index) => (
        <div key={index} className='flex flex-col items-center w-70 text-center  space-x-4'>
          {typeof reason.icons === 'string' ? <img src={reason.icons} alt={reason.title} className='w-10 h-10' /> : reason.icons}
          <div>
            <h3 className='text-xl font-bold'>{reason.title}</h3>
            <p className='text-gray-600'>{reason.description}</p>
          </div>
        </div>
      ))}
          </div>
    </section>
  )
}

export default Features
