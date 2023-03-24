import React from "react";

import photo6 from "../assets/img/portfolio/6.jpg"
import photo7 from "../assets/img/portfolio/7.jpg"
import photo8 from "../assets/img/portfolio/8.jpg"
import 'react-slideshow-image/dist/styles.css'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  
  backgroundPosition: 'bottom',
  height: '400px',
  
}
const slideImages = [
  {
    url: `${photo6}`,
    caption: 'Slide 1'
  },
  {
    url:  `${photo7}`,
    caption: 'Slide 2'
  },
  {
    url: `${photo8}`,
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container mt-10 ">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow