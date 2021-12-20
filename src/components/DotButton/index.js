import React, { memo } from 'react'

import './DotButton.css'

const DotButton = ({ getCurrentSlideIndex, currentSlideIndex }) => {
  return (
    <span
      className='dot-button'
      onClick={getCurrentSlideIndex(currentSlideIndex)}
    />
  )
}

export default memo(DotButton)
