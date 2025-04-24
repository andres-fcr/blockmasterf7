import React from 'react'
import { Titulo } from '../styles/CardsStyles'
import Carrusel from './Carrusel'
import { useSelector } from 'react-redux'
import { PaginatedItems } from './PaginatedItems'
import { Spinner } from 'react-bootstrap'

const Cards = ({ items, isLoading }) => {
  const { movies } = useSelector((store) => store.movies)

  const video = movies.slice(0, 5)
  console.log({ isLoading })

  return (
    <div className="my-5 flex-grow-1 d-flex flex-column">
      {isLoading && (
        <Spinner animation="border" role="status" className="m-auto" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!isLoading && (
        <>
          <Carrusel video={video} />
          <Titulo>Todas las peliculas</Titulo>
          <PaginatedItems itemsPerPage={20} items={items} />
        </>
      )}
    </div>
  )
}

export default Cards
