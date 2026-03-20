import { useMoviesStore } from '@/store/moviesStore'
import { Titulo } from '../styles/CardsStyles'
import Carrusel from './Carrusel'
import { PaginatedItems } from './PaginatedItems'
import { Spinner } from 'react-bootstrap'

const Cards = () => {
  const movies = useMoviesStore.use.movies()

  const carouselMovies = movies.slice(0, 5)

  return (
    <div className="my-5 flex-grow-1 d-flex flex-column">
      {true ||
        (!carouselMovies.length && (
          <Spinner animation="border" role="status" className="m-auto" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ))}
      {!movies.length && carouselMovies.length && (
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
