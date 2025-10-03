import { useEffect, useState } from 'react'
import { isApiError, listMedia, type queryParams } from '@/api/media'
import type { MediaList, MediaTypeEnum } from '@/models/media'
import { useMediaStore } from '@/store/mediaStore'

export const useMedia = (mediaType?: MediaTypeEnum) => {
  const [media, setMedia] = useState<MediaList | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const searchTerm = useMediaStore.use.searchTerm()

  const LoadMedia = async (params: queryParams, mediaType: MediaTypeEnum) => {
    const completeParams: queryParams = { ...params, query: searchTerm }

    try {
      setIsLoading(true)
      const data = await listMedia({ params: completeParams, section: mediaType })
      setMedia(data)
    } catch (err) {
      if (isApiError(err)) setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!mediaType) return

    LoadMedia(
      {
        query: searchTerm,
      },
      mediaType
    )
  }, [mediaType, searchTerm])

  return {
    searchTerm,
    media,
    isLoading,
    error,
    LoadMedia,
  }
}
