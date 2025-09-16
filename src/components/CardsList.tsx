import { BsFillStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import { CardS, ListCard, Rating } from '@/styles/CardsStyles'
import type { MediaCard } from '@/models/media'
import { buildImageUrl } from '@/helpers/url'

type Props = {
  data: MediaCard[]
}

const CardsList = ({ data }: Props) => {
  return (
    <ListCard className="items">
      {data.map((movie, index) => (
        <CardS key={index} border="#0E3FA9">
          <Link className="bg-transparent ratio ratio-2x3" to={`/detalle/${movie.title}`}>
            <Card.Img
              src={buildImageUrl({ path: movie.posterPath, type: 'poster', size: 'w342' })}
              alt={movie.title}
              width={342}
            />
            <Rating>
              <div className="mt-1 bg-transparent text-warning align-middle">
                <BsFillStarFill className="mx-1" />
                {movie.voteAverage}
              </div>
            </Rating>
          </Link>
        </CardS>
      ))}
    </ListCard>
  )
}

export default CardsList
