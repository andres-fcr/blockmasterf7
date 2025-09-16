export const url = 'https://blockmas.herokuapp.com/results'

const baseImgUrl = import.meta.env.VITE_IMAGE_BASE_URL

export type PosterSize = 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original'

export type BackdropSize = 'w300' | 'w780' | 'w1280' | 'original'

type posterParams = {
  type: 'poster'
  size: PosterSize
  path: string
}

type backdropParams = {
  type: 'backdrop'
  size: BackdropSize
  path: string
}

type ImgUrlParams = posterParams | backdropParams

type Filters = Record<string, string | number | boolean | undefined>

export function buildUrl(path: string, filters?: Filters): string {
  const params = new URLSearchParams()

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, String(value))
      }
    })
  }

  const query = params.toString()
  return query ? `${path}?${query}` : `${path}`
}

export const buildImageUrl = ({ path, size }: ImgUrlParams) => {
  return `${baseImgUrl}/${size}${path}`
}
