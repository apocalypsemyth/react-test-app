import React, { useMemo } from 'react'

import './SearchList.css'

export default function SearchList({ filterProductList }) {
  const filterProductListLength = useMemo(() => {
    return filterProductList.length
  }, [filterProductList.length])

  return (
    <ul
      className={`search-list ${
        filterProductListLength ? 'search-list--show' : 'search-list--hidden'
      }`}
    >
      {filterProductListLength
        ? filterProductList.map((product) => (
            <li key={product.id}>
              <a href={`${product.imgUrl}`} target='_blank' rel='noreferrer'>
                {product.content}
              </a>
            </li>
          ))
        : null}
    </ul>
  )
}
