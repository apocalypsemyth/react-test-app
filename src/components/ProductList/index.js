import React, { useCallback } from 'react'

import useFetchData from '../../utils/useFetchData'

import ProductSortButton from '../ProductSortButton'
import ProductItem from '../ProductItem'

import './ProductList.css'

export default function ProductList() {
  const [productList, setProductList] = useFetchData(
    process.env.REACT_APP_PRODUCT_URL
  )

  const sameMethod = useCallback(
    (fn) => {
      setProductList(productList.slice().sort(fn))
    },
    [productList, setProductList]
  )

  const ascendingPrice = useCallback(() => {
    sameMethod((a, b) => a.price - b.price)
  }, [sameMethod])

  const descendingPrice = useCallback(() => {
    sameMethod((a, b) => b.price - a.price)
  }, [sameMethod])

  const ascendingDate = useCallback(() => {
    sameMethod((a, b) => a.date.localeCompare(b.date))
  }, [sameMethod])

  const descendingDate = useCallback(() => {
    sameMethod((a, b) => b.date.localeCompare(a.date))
  }, [sameMethod])

  const formatDate = useCallback((date) => {
    return date.substring(0, 10).replace(/-/g, '/')
  }, [])

  return (
    <div className='product-list'>
      <div className='product-list__left'>
        <ProductSortButton
          ascendingPrice={ascendingPrice}
          descendingPrice={descendingPrice}
          ascendingDate={ascendingDate}
          descendingDate={descendingDate}
        />
      </div>

      <div className='product-list__right'>
        {productList.map((data) => (
          <ProductItem key={data.id} {...data} date={formatDate(data.date)} />
        ))}
      </div>
    </div>
  )
}
