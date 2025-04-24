import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Car, ImgCarousel } from '../styles/CardsStyles'

const Carrusel = ({ video }) => {
  const navigate = useNavigate()

  return (
    <Car className="mx-auto">
      <Carousel indicators={false}>
        {video.map((i, index) => (
          <Carousel.Item key={index}>
            <ImgCarousel className="d-block w-100 img-fluid " src={i.backdrop_path} alt={i.title} />
            <Carousel.Caption className=" bg-dark bg-opacity-75 w-lg-25 rounded" title={i.title}>
              <h5 className=" bg-transparent mb-3 text-truncate mx-3">{i.title}</h5>
              <p className="bg-transparent text-truncate mx-3">{i.overview}</p>
              <Button
                size="sm"
                className="mx-2"
                variant="outline-warning"
                onClick={() => navigate(`/detalle/${i.title}`)}
              >
                Detalles
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Car>
  )
}

export default Carrusel
