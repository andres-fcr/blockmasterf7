import { Button } from 'react-bootstrap'
import { BsFillStarFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { CardF, ImgCard, ListCard, Rating, Titulo } from '../styles/CardsStyles'

const Favs = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Titulo>tus favoritos</Titulo>

      <ListCard>
        {{}.map((mov, index) => (
          <CardF key={index}>
            <ImgCard src={mov.poster_path} alt={mov.title}></ImgCard>
            <Rating className="">
              <div className="mt-1 bg-transparent text-warning align-middle">
                <BsFillStarFill className="mx-1" />
                {mov.vote_average}
              </div>
            </Rating>
            <Button className="mt-1" variant="outline-warning">
              Borrar
            </Button>
          </CardF>
        ))}
      </ListCard>
    </div>
  )
}

export default Favs
