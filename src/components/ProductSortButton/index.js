import React from 'react'

import './ProductSortButton.css'

export default function ProductSortButton({
  ascendingPrice,
  descendingPrice,
  ascendingDate,
  descendingDate,
}) {
  return (
    <div className='product-sort-button-container'>
      <button
        onClick={ascendingPrice}
        className='product-sort-button product-sort-button--bgcolor-1'
      >
        價格從低到高
      </button>
      <button
        onClick={descendingPrice}
        className='product-sort-button product-sort-button--bgcolor-2'
      >
        價格從高到低
      </button>
      <button
        onClick={ascendingDate}
        className='product-sort-button product-sort-button--bgcolor-3'
      >
        時間從早到晚
      </button>
      <button
        onClick={descendingDate}
        className='product-sort-button product-sort-button--bgcolor-4'
      >
        時間從晚到早
      </button>
    </div>
  )
}
