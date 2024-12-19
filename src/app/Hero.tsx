import React from 'react'
import HeroSection from '@/Components/HeroSection'

const Hero = () => {
  return (
    <div>
      {/* Render HeroSection and passed props data */}
      <HeroSection
        title='Get More Done with whitepace'
        subtitle='Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks'
        buttonText='Try Whitepace free'
        buttonLink='/signup'
        imageSrc='/'
        imageAlt='hero-image'
      />
    </div>
  )
}

export default Hero