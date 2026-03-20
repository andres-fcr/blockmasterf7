export interface MediaBase {
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface Movie extends MediaBase {
  adult: boolean
  original_title: string
  release_date: string
  title: string
  video: boolean
}

export interface TV extends MediaBase {
  first_air_date: string
  name: string
  origin_country: string[]
  original_name: string
}

export enum MediaTypeEnum {
  MOVIE = 'movie',
  TV = 'tv',
}

export type MediaTypes = `${MediaTypeEnum}`

export interface MovieResponse {
  page: number
  type: MediaTypeEnum.MOVIE
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface TVResponse {
  page: number
  type: MediaTypeEnum.TV
  results: TV[]
  total_pages: number
  total_results: number
}

export type MediaResponse = MovieResponse | TVResponse

export interface MediaCard {
  id: number
  title: string
  posterPath: string | null
  backdropPath: string | null
  overview: string
  date: string
  voteAverage: string
}

export type MediaList = {
  page: number
  totalPages: number
  data: MediaCard[]
}
