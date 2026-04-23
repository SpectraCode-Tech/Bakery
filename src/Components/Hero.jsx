import React from 'react'
import heroImg from '../assets/hero.png'
// import mobileHero from '../assets/mobile-hero.png'

const Hero = () => {
  return (
    <section className='h-screen p-10 bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${heroImg})`}}>
      <div className='flex flex-col h-screen w-full sm:w-3/5 justify-center justify-items-center space-y-10'>
        <h1 className='text-4xl sm:text-6xl font-medium font-Cormorant tracking-widest'>Bespoke Cakes Crafted for Unforgettable Moments</h1>
        <button className='bg-light ease-in-out transition duration-200 self-start font-Montserrat hover:bg-accent active:bg-accent/70 cursor-pointer text-white font-bold py-2 px-4 rounded-full'>Request a Cake</button>
      </div>
    </section>
  )
}

export default Hero
