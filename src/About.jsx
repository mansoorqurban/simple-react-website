import React from 'react'
import Common from './Common'
import Image  from './image/about2.png'

const About = () => {
    return (

      <Common img={Image}
      title={'Welcome To About Page'} 
            name={"Mansoor Qurban"} 
            team={'we are the team of talented developers making website'} 
            btn={'Get Started'} 
            />
    
       
    )
}

export default About