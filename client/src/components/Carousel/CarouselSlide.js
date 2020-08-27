import React from 'react'

function CarouselSlide({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        height: '420px',
        backgroundRepeat: 'repeat-x',
        objectFit: 'cover',
      }}
    />
  )
}

export default CarouselSlide

// objectFit: 'cover',
