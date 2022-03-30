import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteMovieAsync } from '../redux/actions/actionMovies';
// import { EnvT } from '../styles/LoginStyles';

const MovieList = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { movies } = useSelector(store => store.movies);

    const handleModify = () => {

    }

    return (
        <div >
            <Table responsive striped bordered hover variant="dark" size="sm">
                <thead>
                    <tr className='d-flex'>
                        <th className='col-1'>Titulo</th>
                        <th className='col-4 overflow-auto'>Descripcion</th>
                        <th className='col-2'>Imagen</th>
                        <th className='col-1'>Fecha</th>
                        <th className='col-1'>Puntuacion</th>
                        <th className='col-2'>ID Trailer</th>
                        <th className='col-1'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((movie, index) => (

                            <tr className='d-flex' key={index}>
                                <td className='col-1'>{movie.title}</td>
                                <td className="col-4 overflow-auto" >{movie.overview}</td>
                                <td className='col-2 overflow-auto'>{movie.poster_path}</td>
                                <td className='col-1'>{movie.release_date}</td>
                                <td className='col-1'>{movie.vote_average}</td>
                                <td className='col-2 overflow-auto'>{movie.video}</td>
                                <td className='col-1'>
                                    <Button className='my-3'
                                        variant="danger"
                                        onClick={() => {
                                            dispatch(deleteMovieAsync(movie.title));
                                            navigate("/new")
                                        }}
                                    >
                                        Borrar
                                    </Button>
                                    <Button
                                        variant="warning"
                                        onClick={
                                            () => handleModify(movie)
                                        }
                                    >
                                        Editar
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default MovieList