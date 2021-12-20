import { useState, useEffect, useCallback } from 'react'

export default function useFetchData(dataUrl) {
  const [data, setData] = useState([])

  const handleFetchData = useCallback(async (dataUrl) => {
    const dataListJson = await fetch(dataUrl)
    const dataListData = await dataListJson.json()

    setData(dataListData)
  }, [])

  useEffect(() => {
    handleFetchData(dataUrl)
  }, [dataUrl, handleFetchData])

  return [data, setData]
}
