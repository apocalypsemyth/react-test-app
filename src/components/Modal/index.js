import React from 'react'

import './Modal.css'

export default function Modal({
  id,
  imgUrl,
  content,
  price,
  date,
  showModal,
  handleShowModal,
}) {
  return (
    <div
      className={`modal ${showModal ? 'modal--show' : 'modal--hidden'}`}
      onMouseDown={handleShowModal}
    >
      <div className='modal__content'>
        <span className='modal__close' onClick={handleShowModal}>
          &times;
        </span>
        <div className='modal__image-container'>
          <img src={imgUrl} alt={`img-${id}`} className='modal__image' />
        </div>
        <div className='modal__text'>
          <h3>{`行程：${content}`}</h3>
          <p>{`價格：${price}`}</p>
          <p>{`出發日期：${date}`}</p>
        </div>
      </div>
    </div>
  )
}
