import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Gallery from '../Components/Gallery'
import Highlights from '../Components/Highlights'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <section id='home'>
    <Navbar />
    <Hero />
    <Highlights />
    <Features />
    <Gallery />
    <Footer />
    <Testimonials />
    </section>
  )
}

export default Home
