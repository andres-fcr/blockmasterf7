import { useEffect, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { getMediaDetails, isApiError } from '@/api/media'
import { MediaTypeEnum } from '@/models/media'
import type { Movie } from '@/models/movie'
import type { TvShow } from '@/models/tvShow'
import {
  DetailsWrapper,
  HeroSection,
  HeaderOverlay,
  BackButton,
  ContentContainer,
  PosterImg,
  DetailsText,
  Title,
  Tagline,
  MetaRow,
  MetaItem,
  RatingBadge,
  GenresWrapper,
  GenreTag,
  Overview,
  LoadingWrapper,
  ErrorWrapper,
  SimilarSection,
  SimilarGrid,
  SimilarCard,
} from '../styles/DetailStyles'
import { buildImageUrl } from '@/helpers/url'
import {
  BsArrowLeft,
  BsCalendarPlus,
  BsClockHistory,
  BsGlobe,
  BsStarFill,
} from 'react-icons/bs'

interface Genre {
  id: number
  name: string
}

const formatDate = (date: Date | string): string => {
  if (!date) return 'N/A'
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const formatRuntime = (minutes: number): string => {
  if (!minutes) return 'N/A'
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return h > 0 ? `${h}h ${m}m` : `${m}m`
}

const Details = () => {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const mediaType = location.pathname.startsWith('/movie')
    ? MediaTypeEnum.MOVIE
    : MediaTypeEnum.TV

  const [media, setMedia] = useState<Movie | TvShow | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMedia = async () => {
      if (!id) return

      try {
        setIsLoading(true)
        setError(null)
        const data = await getMediaDetails(mediaType, id)
        setMedia(data as Movie | TvShow)
      } catch (err) {
        if (isApiError(err)) setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMedia()
  }, [id, mediaType])

  if (isLoading) {
    return (
      <LoadingWrapper>
        <Spinner animation="border" role="status" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </LoadingWrapper>
    )
  }

  if (error || !media) {
    return (
      <ErrorWrapper>
        <p>Error loading details. Please try again.</p>
        <Link to="/">
          <button className="btn btn-warning">Go Home</button>
        </Link>
      </ErrorWrapper>
    )
  }

  const isMovie = 'title' in media
  const movieData = media as Movie
  const tvData = media as TvShow

  const title = isMovie ? movieData.title : tvData.name
  const overview = media.overview || 'No overview available.'
  const releaseDate = isMovie ? movieData.release_date : String(tvData.first_air_date)
  const posterPath = media.poster_path
    ? buildImageUrl({ path: media.poster_path, size: 'w342', type: 'poster' })
    : ''
  const backdropPath = media.backdrop_path
    ? buildImageUrl({ path: media.backdrop_path, size: 'w780', type: 'backdrop' })
    : ''
  const tagline = isMovie ? movieData.tagline : tvData.tagline
  const genres = isMovie ? movieData.genres : tvData.genres
  const runtime = isMovie ? (movieData.runtime ?? 0) : 0
  const episodeRuntime = isMovie ? 0 : (tvData.episode_run_time?.[0] ?? 0)
  const originalLanguage = media.original_language

  const createdBy = isMovie ? [] : tvData.created_by || []
  const director = isMovie ? 'See full cast' : (createdBy?.[0]?.name ?? 'Unknown')

  return (
    <DetailsWrapper $backdrop={backdropPath}>
      <HeroSection>
        <HeaderOverlay>
          <Link to={'/'}>
            <BackButton className="text-warning">
              <BsArrowLeft className="me-2" />
              Back
            </BackButton>
          </Link>
        </HeaderOverlay>
      </HeroSection>

      <ContentContainer>
        <PosterImg>
          <img src={posterPath} alt={title} />
        </PosterImg>

        <DetailsText>
          <Title>{title}</Title>

          {tagline && <Tagline>"{tagline}"</Tagline>}

          <MetaRow>
            <RatingBadge>
              <BsStarFill />
              {media.vote_average.toFixed(1)}
            </RatingBadge>

            <MetaItem>
              <BsCalendarPlus />
              {formatDate(releaseDate)}
            </MetaItem>

            {(runtime > 0 || episodeRuntime > 0) && (
              <MetaItem>
                <BsClockHistory />
                {formatRuntime(runtime || episodeRuntime)}
              </MetaItem>
            )}

            {originalLanguage && (
              <MetaItem>
                <BsGlobe />
                {originalLanguage.toUpperCase()}
              </MetaItem>
            )}
          </MetaRow>

          <MetaItem>
            {isMovie ? 'Director' : 'Creator'}: {director}
          </MetaItem>

          {genres.length > 0 && (
            <GenresWrapper>
              {genres.map((genre: Genre) => (
                <GenreTag key={genre.id}>{genre.name}</GenreTag>
              ))}
            </GenresWrapper>
          )}

          <Overview>
            <h4>Overview</h4>
            <p>{overview}</p>
          </Overview>
        </DetailsText>
      </ContentContainer>

      <SimilarSection>
        <h3>More Like This</h3>
        <SimilarGrid>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <SimilarCard key={i}>
              <img
                src={buildImageUrl({ path: media.poster_path || '', size: 'w342', type: 'poster' })}
                alt={`Similar ${i}`}
              />
              <p>Similar Movie {i}</p>
            </SimilarCard>
          ))}
        </SimilarGrid>
      </SimilarSection>
    </DetailsWrapper>
  )
}

export default Details
