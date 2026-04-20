import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button1, ImgCard, Text } from '../styles/DetailStyles'
import { Container } from '../styles/DetailStyles'
import { BsHeartFill, BsCalendarPlus, BsArrowLeft } from 'react-icons/bs'

const Details = () => {
  const poster_path = ''
  const title = ''
  const overview = ''
  const release_date = ''
  const vote_average = ''

  return (
    <div>
      <Container id="container" className="mx-auto">
        <ImgCard width="auto" height="500" src={poster_path} alt={title}></ImgCard>
        <Text>
          <Link to={'/'}>
            <Button1 size="sm" variant="outline-warning" className=" float-end">
              <BsArrowLeft className="bg-transparent" />
            </Button1>
          </Link>
          <div className="mt-5 mx-3">
            <h3>
              <strong>{title}</strong>
            </h3>
            <p>{overview}</p>
            <div className="row">
              <p className="col">
                <BsCalendarPlus className="bg-transparent" />
                {release_date}
              </p>
              <p className="col">
                <BsHeartFill className="bg-transparent" />
                {vote_average}
              </p>
            </div>
          </div>
        </Text>
      </Container>
    </div>
  )
}

export default Details
