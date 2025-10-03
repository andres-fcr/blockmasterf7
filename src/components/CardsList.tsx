import { BsFillStarFill } from 'react-icons/bs'
import { Button, Card } from 'react-bootstrap'

import { CardTitle, ListCard, Rating } from '@/styles/CardsStyles'
import type { MediaCard } from '@/models/media'
import { buildImageUrl } from '@/helpers/url'

type Props = {
  data: MediaCard[]
  onCardClick: (id: number) => void
}

const CardsList = ({ data, onCardClick }: Props) => {
  return (
    <ListCard className="items">
      {data.map((item, index) => (
        <div className="vstack">
          <Card
            key={index}
            onClick={() => onCardClick(item.id)}
            style={{ cursor: 'pointer' }}
            className="ratio ratio-2x3 border border-0 opacity-75-hover rounded-3"
            title={item.title}
          >
            <Card.Img
              src={buildImageUrl({ path: item.posterPath, type: 'poster', size: 'w342' })}
              alt={item.title}
              width={342}
            />
            <Rating className="text-warning dark-bg">
              <BsFillStarFill size={13} />
              {item.voteAverage}
            </Rating>
            <CardTitle className="text-light bg-dark bg-opacity-75 p-4 w-100 h-100 rounded-bottom"></CardTitle>
          </Card>
          <Button
            variant="link"
            className="p-0 pb-1 mt-2 text-start text-light text-truncate link-underline link-underline-light link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
            onClick={() => onCardClick(item.id)}
          >
            {item.title}
          </Button>
          <span className="text-start text-light ">{item.date.slice(0, 4)}</span>
        </div>
      ))}
    </ListCard>
  )
}

export default CardsList
