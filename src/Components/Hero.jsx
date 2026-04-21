import React from 'react'
import heroImg from '../assets/hero.png'
// import mobileHero from '../assets/mobile-hero.png'

const Hero = () => {
  return (
    <section className='h-screen p-10 bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${heroImg})`}}>
      <div className='flex flex-col h-screen w-full sm:w-1/2 justify-center justify-items-center space-y-10'>
        <h1 className='text-4xl sm:text-6xl font-medium tracking-widest'>Custom Cakes and Event Treats in Lagos</h1>
        <button className='bg-light ease-in-out transition duration-200 self-start hover:bg-accent cursor-pointer text-white font-bold py-2 px-4 rounded-full'>Order Now</button>
      </div>
    </section>
  )
}

export default Hero
