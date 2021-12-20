import React, { memo } from 'react'

import './CarouselItem.css'

const CarouselItem = ({ id, imgUrl, content }) => {
  return (
    <div className='carousel__slide'>
      <div className='carousel__number'>{id}</div>
      <div className='carousel__image-container'>
        <img
          src={imgUrl}
          alt={`img-${id}`}
          className={`carousel__image carousel__image--snap`}
        />
      </div>
      <div className='carousel__content'>{content}</div>
    </div>
  )
}

export default memo(CarouselItem)
