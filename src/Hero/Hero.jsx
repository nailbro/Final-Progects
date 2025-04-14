import React from 'react'
import './Hero.scss'
import hero from '../Image/image (2).png'
const Hero = () => {
  return (
    <section className='hero'>
    <img src={hero} alt="hero" />
       <h3>New collection</h3>
       <h1>Menswear 2020</h1>
    </section>
  )
}

export default Hero
