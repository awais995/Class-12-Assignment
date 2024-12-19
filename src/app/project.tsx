import React from 'react'
import ProjectSection from '@/Components/ProjectSection'

const Project = () => {
  return (
    <div>
      <ProjectSection
        title='Project Management'
        subtitle='Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.'
        buttonText='Get Started'
        buttonLink='/signin'
        imageSrc='/'
        imageAlt='hero-image'
      />
    </div>
  )
}

export default Project;