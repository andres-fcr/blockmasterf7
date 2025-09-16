import { Titulo } from '../styles/CardsStyles'
import { CardsPagination } from './CardsPagination'
import { Spinner } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { MediaTypeEnum } from '@/models/media'
import { useMedia } from '@/hooks/useMedia'
import CardsList from './CardsList'

type Section = MediaTypeEnum | undefined

const Home = () => {
  const section = useLocation().pathname.slice(1) as Section

  const { media, isLoading, LoadMedia } = useMedia(section)

  // const carouselMovies = media.slice(0, 5)

  const handlePageChange = (page: number) => {
    LoadMedia({
      type: section!,
      page,
    })
  }

  const getTitleText = (section: Section) => {
    if (section === MediaTypeEnum.MOVIE) return 'Movies'
    return 'TV'
  }

  return (
    <div className="my-5 flex-grow-1 d-flex flex-column">
      <Titulo>{getTitleText(section)}</Titulo>

      {isLoading && (
        <Spinner animation="border" role="status" className="m-auto" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!!media?.data.length && !isLoading && (
        <>
          {/* <Carrusel video={carouselMovies} /> */}
          <CardsList data={media?.data} />

          <CardsPagination
            currentPage={media.page}
            totalPages={media.totalPages}
            onPageChange={handlePageChange}
            groupSize={5}
          />
        </>
      )}
    </div>
  )
}

export default Home
