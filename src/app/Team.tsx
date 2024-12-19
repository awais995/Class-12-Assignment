import TeamComponent from '@/Components/TeamSection';
import React from 'react'

const Team = () => {
    return (
        <div>
            <TeamComponent
                title='Work together'
                subtitle='With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
'
                buttonText='Try it now'
                buttonLink='/signin'
                imageSrc='/Work-together-Image.png'
                imageAlt='hero-image'
            />
        </div>
    )
}

export default Team;