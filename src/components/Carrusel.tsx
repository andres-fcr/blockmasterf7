import { Carousel } from 'react-bootstrap'

import { Car, CarouselItem, ImgCarousel } from '../styles/CardsStyles'
import type { MediaCard } from '@/models/media'
import { buildImageUrl } from '@/helpers/url'

type Props = {
  data: MediaCard[]
}

const Carrusel = ({ data }: Props) => {
  return (
    <Car className="mx-auto">
      <Carousel controls={false} fade>
        {data.map((item, index) => (
          <Carousel.Item key={index}>
            <CarouselItem>
              <ImgCarousel
                className="d-block img-fluid ratio ratio-16/9"
                src={buildImageUrl({ path: item.backdropPath!, type: 'backdrop', size: 'w780' })}
                alt={item.title}
              />
            </CarouselItem>

            <Carousel.Caption className="" title={item.title}>
              <h5 className="my-3 text-wrap mx-3 fs-3 fs-sm-6">{item.title}</h5>
              <p className="fs-6 text-truncate">{item.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Car>
  )
}

export default Carrusel
