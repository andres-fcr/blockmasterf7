import { fetchApi } from './client'
import {
  type MediaList,
  type Movie,
  type MovieResponse,
  type TVResponse,
  MediaTypeEnum,
} from '@/models/media'
import { toMediaList } from '@/helpers/movieTranslator'
import { buildUrl } from '@/helpers/url'
import type { TvShow } from '@/models/tvShow'

export type queryParams = {
  page?: number
  query?: string
  include_adult?: boolean
}

export function isApiError(error: unknown): error is Error {
  return error instanceof Error
}

export const listMedia = async ({
  params,
  section,
}: {
  params: queryParams
  section: MediaTypeEnum
}): Promise<MediaList> => {
  const _params: queryParams = Object.assign(
    {
      page: 1,
      query: '',
      include_adult: false,
    },
    params,
  )

  const subsection = _params.query ? 'search' : 'discover'
  const url = buildUrl(`/${subsection}/${section}`, _params)

  try {
    if (section === 'movie') {
      const data = await fetchApi<MovieResponse>(url)
      return toMediaList({ ...data, type: section })
    }

    const data = await fetchApi<TVResponse>(url)
    return toMediaList({ ...data, type: section })
  } catch (error) {
    throw error as Error
  }
}

export const getMediaDetails = async (section: MediaTypeEnum, id: string) => {
  const url = `/${section}/${id}`

  try {
    if (section === MediaTypeEnum.MOVIE) {
      const data = await fetchApi<Movie>(url)
      return data
    }

    const data = await fetchApi<TvShow>(url)
    return data
  } catch (error) {
    console.error(error)
    throw error as Error
  }
}
