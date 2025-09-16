import { useEffect, useState } from 'react'
import { isApiError, listMedia, type ListMediaParams } from '@/api/media'
import type { MediaList, MediaTypeEnum } from '@/models/media'

export const useMedia = (mediaType?: MediaTypeEnum) => {
  const [media, setMedia] = useState<MediaList | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const LoadMedia = async (params: ListMediaParams) => {
    try {
      setIsLoading(true)
      const data = await listMedia(params)
      setMedia(data)
    } catch (err) {
      if (isApiError(err)) setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!mediaType) return

    LoadMedia({
      type: mediaType,
    })
  }, [mediaType])

  return {
    media,
    isLoading,
    error,
    LoadMedia
  }
}
