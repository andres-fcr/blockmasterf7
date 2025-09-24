import { Titulo } from '../styles/CardsStyles'
import { CardsPagination } from './CardsPagination'
import { Spinner } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { MediaTypeEnum } from '@/models/media'
import { useMedia } from '@/hooks/useMedia'
import CardsList from './CardsList'
import Carrusel from './Carrusel'
import { routes } from '@/routes/constants/routes'

type Section = MediaTypeEnum | undefined

const Home = () => {
  const section = useLocation().pathname.slice(1) as Section
  const navigate = useNavigate()

  const { media, isLoading, LoadMedia } = useMedia(section)

  const carouselMovies = media?.data.slice(0, 5) || []

  const handlePageChange = (page: number) => {
    LoadMedia({
      type: section!,
      page,
    })
  }

  const handleCardClick = (id: number) => {
    navigate(`${routes.detailsIndex}/${id}`)
  }

  const getTitleText = (section: Section) => {
    if (section === MediaTypeEnum.MOVIE) return 'Movies'
    return 'TV'
  }

  return (
    <main className="py-5 flex-grow-1 d-flex flex-column container dark-bg">
      {isLoading && (
        <Spinner animation="border" role="status" className="m-auto" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!!media?.data.length && !isLoading && (
        <>
          <Carrusel data={carouselMovies} onMediaClick={handleCardClick} />

          <Titulo>{getTitleText(section)}</Titulo>

          <CardsList data={media?.data} onCardClick={handleCardClick} />

          <CardsPagination
            currentPage={media.page}
            totalPages={media.totalPages}
            onPageChange={handlePageChange}
            groupSize={5}
          />
        </>
      )}
    </main>
  )
}

export default Home
