import { Carousel } from 'react-bootstrap'

import { Car, CarouselItem, ImgCarousel } from '../styles/CardsStyles'
import type { MediaCard } from '@/models/media'
import { buildImageUrl } from '@/helpers/url'

type Props = {
  data: MediaCard[]
  onMediaClick: (id: number) => void
}

const Carrusel = ({ data, onMediaClick }: Props) => {
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
                className="d-block img-fluid ratio ratio-16/9"
                src={buildImageUrl({ path: item.backdropPath, type: 'backdrop', size: 'w780' })}
                alt={item.title}
              />
            </CarouselItem>

            <Carousel.Caption className="p-0" title={item.title}>
              <h5 className="my-3 text-wrap mx-3 fs-3 fs-sm-6">{item.title}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Car>
  )
}

export default Carrusel
