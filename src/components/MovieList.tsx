import { Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useMediaStore } from '@/store/mediaStore'

const MovieList = () => {
  const movies = useMediaStore.use.media()
  const navigate = useNavigate()

  return (
    <div>
      <Table responsive striped bordered hover variant="dark" size="sm">
        <thead>
          <tr className="d-flex">
            <th className="col-1">Titulo</th>
            <th className="col-4 overflow-auto">Descripcion</th>
            <th className="col-2">Imagen</th>
            <th className="col-1">Fecha</th>
            <th className="col-1">Puntuacion</th>
            <th className="col-2">ID Trailer</th>
            <th className="col-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr className="d-flex" key={index}>
              <td className="col-1">{movie.title}</td>
              <td className="col-4 overflow-auto">{movie.overview}</td>
              <td className="col-2 overflow-auto">{movie.poster_path}</td>
              <td className="col-1">{movie.release_date}</td>
              <td className="col-1">{movie.vote_average}</td>
              <td className="col-2 overflow-auto">{movie.video}</td>
              <td className="col-1">
                <Button
                  className="my-3"
                  variant="danger"
                  onClick={() => {
                    navigate('/new')
                  }}
                >
                  Borrar
                </Button>
                <Button variant="warning">Editar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default MovieList
