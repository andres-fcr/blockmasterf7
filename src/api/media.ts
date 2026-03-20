import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'
import { AxiosError } from 'axios'

import { db } from '../firebase/firebaseConfig'
import { api } from './client'
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

export function isApiError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError === true
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
    params
  )

  const subsection = _params.query ? 'search' : 'discover'
  const url = buildUrl(`/${subsection}/${section}`, _params)

  try {
    if (section === 'movie') {
      const response = await api.get<MovieResponse>(url)
      return toMediaList({ ...response.data, type: section })
    }

    const response = await api.get<TVResponse>(url)
    return toMediaList({ ...response.data, type: section })
  } catch (error) {
    throw error as AxiosError
  }
}

export const getMediaDetails = async (section: MediaTypeEnum, id: string) => {
  const url = `/${section}/${id}`

  try {
    if (section === MediaTypeEnum.MOVIE) {
      const response = await api.get<Movie>(url)
    }

    const response = await api.get<TvShow>(url)
  } catch (error) {}
}
