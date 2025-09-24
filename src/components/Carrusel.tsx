import type { MouseEventHandler } from 'react'
import { Card, CardTitle, Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { Car, CarouselItem, ImgCarousel } from '../styles/CardsStyles'
import type { MediaCard } from '@/models/media'
import { buildImageUrl } from '@/helpers/url'

type Props = {
  data: MediaCard[]
  onMediaClick: (id: number) => void
}

const Carrusel = ({ data, onMediaClick }: Props) => {
  const navigate = useNavigate()

  const onItemClick = (id: number) => {
    console.log(id)
  }

  return (
    <Car className="mx-auto">
      <Carousel indicators={false} fade>
        {data.map((item, index) => (
          <Carousel.Item key={index}>
            <CarouselItem onClick={() => onItemClick(item.id)}>
              <ImgCarousel
                className="d-block img-fluid rounded-4 ratio ratio-16/9"
                src={buildImageUrl({ path: item.backdropPath, type: 'backdrop', size: 'w780' })}
                alt={item.title}
              />
            </CarouselItem>

            <Carousel.Caption className="" title={item.title}>
              <Card
                key={index}
                // onClick={() => onCardClick(item.id)}
                style={{ cursor: 'pointer' }}
                className="ratio ratio-2x3 border border-0 opacity-75-hover rounded-3"
                title={item.title}
              >
                <Card.Img
                  src={buildImageUrl({ path: item.posterPath, type: 'poster', size: 'w342' })}
                  alt={item.title}
                  width={342}
                />
              </Card>
              <h5 className=" mb-3 text-truncate mx-3 fs-3">{item.title}</h5>
              <span>{item.date}</span>
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
