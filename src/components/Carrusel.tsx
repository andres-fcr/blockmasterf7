import { Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { Car, CarouselItem, ImgCarousel } from '../styles/CardsStyles'
import type { MediaCard } from '@/models/media'
import { buildImageUrl } from '@/helpers/url'

type Props = {
  data: MediaCard[]
}

const Carrusel = ({ data }: Props) => {
  const navigate = useNavigate()

  return (
    <Car className="mx-auto">
      <Carousel indicators={false} fade className="bg-dark bg-gradient">
        {data.map((i, index) => (
          <Carousel.Item key={index}>
            <CarouselItem>
              <ImgCarousel
                className="d-block w-100 img-fluid"
                src={buildImageUrl({ path: i.backdropPath, type: 'backdrop', size: 'w780' })}
                alt={i.title}
              />
            </CarouselItem>

            <Carousel.Caption className="bg-transparent " title={i.title}>
              <h5 className=" bg-transparent mb-3 text-truncate mx-3 fs-3">{i.title}</h5>
              {/* <p className="bg-transparent text-truncate mx-3">{i.overview}</p> */}
              {/* <Button
                size="sm"
                className="mx-2"
                variant="outline-warning"
                onClick={() => navigate(`/detalle/${i.title}`)}
              >
                Detalles
                </Button> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Car>
  )
}

export default Carrusel
