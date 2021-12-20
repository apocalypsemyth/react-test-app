import React, { useState, useEffect, useMemo, useCallback } from 'react'

import './CountDown.css'

export default function CountDown() {
  const [countDownObj, setCountDownObj] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  })

  const tomorrow = useMemo(() => {
    const date = new Date()
    const today = date.getDate() + 1
    return date.setDate(today)
  }, [])

  const handleCountDown = useCallback(() => {
    setInterval(() => {
      const now = Date.now()
      const next = tomorrow
      const diff = next - now

      const floorTime = (num) => Math.floor(num)

      const second = floorTime((diff % (1000 * 60)) / 1000)
      const minute = floorTime((diff % (1000 * 60 * 60)) / (1000 * 60))
      const hour = floorTime((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

      setCountDownObj({ hour, minute, second })
    }, 1000)
  }, [tomorrow])

  useEffect(() => {
    const intervalCountDown = handleCountDown()

    return () => clearInterval(intervalCountDown)
  }, [handleCountDown])

  return (
    <div className='countdown countdown__text'>
      <h1>剩餘時間：</h1>
      <h2>
        {`${countDownObj.hour} 時`}
        {`${countDownObj.minute} 分`}
        {`${countDownObj.second} 秒`}
      </h2>
    </div>
  )
}
