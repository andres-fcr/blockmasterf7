import { useMediaStore } from '@/store/mediaStore'
import { Titulo } from '../styles/CardsStyles'
import Carrusel from './Carrusel'
import { PaginatedItems } from './PaginatedItems'
import { Spinner } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { MediaTypeEnum } from '@/models/media'

const validPaths = Object.values(MediaTypeEnum)

const Cards = () => {
  const location = useLocation().pathname.slice(1) as MediaTypeEnum | undefined

  const media = useMediaStore.use.media()

  const carouselMovies = media.slice(0, 5)

  useEffect(() => {
    if (!location || !validPaths.includes(location)) return
    // listMedia({
    //   type: location,
    // })
  }, [location])

  return (
    <div className="my-5 flex-grow-1 d-flex flex-column">
      {true ||
        (!carouselMovies.length && (
          <Spinner animation="border" role="status" className="m-auto" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ))}
      {!media.length && carouselMovies.length && (
        <>
          <Carrusel video={carouselMovies} />
          <Titulo>Todas las peliculas</Titulo>
          <PaginatedItems itemsPerPage={20} items={[]} />
        </>
      )}
    </div>
  )
}

export default Cards
