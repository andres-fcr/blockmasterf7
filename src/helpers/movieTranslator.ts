import { type MediaResponse, type MediaList, MediaTypeEnum } from '@/models/media'

export function toMediaList(media: MediaResponse): MediaList {
  if (media.type === MediaTypeEnum.MOVIE) {
    return {
      page: media.page,
      totalPages: media.total_pages,
      data: media.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        posterPath: movie.poster_path,
        backdropPath: movie.backdrop_path,
        overview: movie.overview,
        date: movie.release_date,
        voteAverage: movie.vote_average.toFixed(1),
      })),
    }
  }

  return {
    page: media.page,
    totalPages: media.total_pages,
    data: media.results.map((tv) => ({
      id: tv.id,
      title: tv.name,
      posterPath: tv.poster_path,
      backdropPath: tv.backdrop_path,
      overview: tv.overview,
      date: tv.first_air_date,
      voteAverage: tv.vote_average.toFixed(1),
    })),
  }
}
