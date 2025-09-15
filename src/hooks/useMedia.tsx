import { useEffect, useState } from 'react'
import { listMedia, type ListMediaParams } from '@/api/media'
import type { MediaList, MediaTypeEnum } from '@/models/media'

export const useMedia = (mediaType: MediaTypeEnum) => {
  const [media, setMedia] = useState<MediaList | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  const LoadMedia = async (params: ListMediaParams) => {
    try {
      setIsLoading(true)
      const data = await listMedia(params)
      setMedia(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    LoadMedia({
      type: mediaType,
    })
  }, [mediaType])

  return {
    media,
    isLoading,
    error,
  }
}
