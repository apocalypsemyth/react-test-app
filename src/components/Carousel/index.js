import React, { useState, useEffect, useCallback } from 'react'

import useFetchData from '../../utils/useFetchData'

import CarouselItem from '../CarouselItem'
import DotButton from '../DotButton'

import './Carousel.css'

export default function Carousel() {
  const [autoSlide, setAutoSlide] = useState(true)
  const [slideIndex, setSlideIndex] = useState(0)

  const [dataList] = useFetchData(process.env.REACT_APP_DATA_URL)

  useEffect(() => {
    const pollAutoSlide = setInterval(() => {
      setAutoSlide(true)
    }, 5000)

    return () => clearInterval(pollAutoSlide)
  }, [autoSlide])

  const nextSlideIndexFn = useCallback(() => {
    setSlideIndex((slideIndex) =>
      slideIndex === dataList.length - 1 ? 0 : slideIndex + 1
    )
  }, [dataList.length])

  useEffect(() => {
    const isAutoSlide = autoSlide
      ? setInterval(nextSlideIndexFn, 2500)
      : setTimeout(() => {})

    return () => clearInterval(isAutoSlide)
  }, [autoSlide, nextSlideIndexFn])

  const prevSlideIndex = () => {
    setSlideIndex((slideIndex) =>
      slideIndex ? slideIndex - 1 : dataList.length - 1
    )
    setAutoSlide(false)
  }

  const nextSlideIndex = () => {
    nextSlideIndexFn()
    setAutoSlide(false)
  }

  const getCurrentSlideIndex = (index) => (event) => {
    setSlideIndex(index)
    setAutoSlide(false)
  }

  return (
    <div className='carousel-container'>
      <div className='carousel'>
        {dataList.map(
          (data, index) =>
            index === slideIndex && <CarouselItem key={data.id} {...data} />
        )}

        <span className='prev-button' onClick={prevSlideIndex}>
          &#10094;
        </span>
        <span className='next-button' onClick={nextSlideIndex}>
          &#10095;
        </span>
      </div>

      <div className='dot-container'>
        {dataList.map((_, index) => (
          <DotButton
            key={index}
            getCurrentSlideIndex={getCurrentSlideIndex}
            currentSlideIndex={index}
          />
        ))}
      </div>
    </div>
  )
}
