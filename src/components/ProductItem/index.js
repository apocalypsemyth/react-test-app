import React, { lazy, Suspense, memo, useState, useCallback } from 'react'

import Card from './Card'

import './ProductItem.css'

const Modal = lazy(() => import('../Modal'))

const ProductItem = (props) => {
  const { id, imgUrl, content, price, date } = props

  const [showModal, setShowModal] = useState(false)

  const handleShowModal = useCallback(() => {
    setShowModal((showModal) => !showModal)
  }, [])

  return (
    <>
      <Card>
        <div className='product-item' onClick={handleShowModal}>
          <div className='product-item__image-container'>
            <img
              src={imgUrl}
              alt={`img-${id}`}
              className='product-item__image'
            />
          </div>
          <p>{`行程：${content}`}</p>
          <p>{`價格：${price}`}</p>
          <p>{`出發日期：${date}`}</p>
        </div>
      </Card>

      <Suspense fallback={<div>載入中...</div>}>
        <Modal
          showModal={showModal}
          handleShowModal={handleShowModal}
          {...props}
        />
      </Suspense>
    </>
  )
}

export default memo(ProductItem)
