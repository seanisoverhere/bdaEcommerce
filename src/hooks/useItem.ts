import { useState } from 'react'
import bdaApi from '@/services/api/bdaApi'
import { ApiResponse } from 'apisauce'
import { Item } from '@/types/items'

const useItem = () => {
  const [items, setItems] = useState<Array<Item>>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getItems = async () => {
    setIsLoading(true)
    const response: ApiResponse<any> = await bdaApi.getItems()
    if (response.ok) {
      setItems(response.data)
    }
    setIsLoading(false)
  }

  return {
    items,
    isLoading, 
    getItems
  }

}

export default useItem