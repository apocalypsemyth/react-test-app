import React, { useState, useCallback } from 'react'

import useFetchData from '../../utils/useFetchData'

import SearchList from '../SearchList'

import './Navbar.css'

export default function Navbar() {
  const [searchValue, setSearchValue] = useState('')
  const [filterProductList, setFilterProductList] = useState([])

  const [productList] = useFetchData(process.env.REACT_APP_PRODUCT_URL)

  const handleFilterProductList = useCallback(
    (value) => {
      const filterProductList = productList.filter((product) =>
        product.content.toLowerCase().includes(value.toLowerCase())
      )

      return filterProductList
    },
    [productList]
  )

  const handleSearch = useCallback(
    (event) => {
      const { value } = event.target

      const filterProductList = handleFilterProductList(value)

      setSearchValue(value)
      setFilterProductList(filterProductList)
    },
    [handleFilterProductList]
  )

  const handleClickCloseList = useCallback(() => {
    setFilterProductList([])
  }, [])

  const handleKeyCloseList = useCallback((event) => {
    if (event.key === 'Escape') {
      setFilterProductList([])
    }
    return
  }, [])

  return (
    <div className='navbar'>
      <div className='searchbar'>
        <div className='searchbar__magnifier'>
          <span className='searchbar__magnifier-icon' />
        </div>
        <div className='searchbar__search'>
          <input
            type='text'
            placeholder='請輸入要查詢的東西'
            className='searchbar__search-input'
            value={searchValue}
            onChange={handleSearch}
            onKeyDown={handleKeyCloseList}
          />
        </div>
        <div
          className={`searchbar__close ${
            !searchValue ? 'searchbar__close--show' : 'searchbar__close--hidden'
          }`}
          onClick={handleClickCloseList}
        >
          <span className='searchbar__close-icon'>&times;</span>
        </div>

        <SearchList filterProductList={filterProductList} />
      </div>
    </div>
  )
}
