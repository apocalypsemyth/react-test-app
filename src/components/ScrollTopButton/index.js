import React from 'react'

import './ScrollTopButton.css'

export default function ScrollTopButton() {
  const handleScrollTop = (event) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className='top-button' onClick={handleScrollTop}>
      <span className='top-button-icon'>&#8593;</span>
    </div>
  )
}
