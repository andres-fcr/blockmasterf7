import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Button1, ImgCard, Text } from '../styles/DetailStyles';
import { Container } from '../styles/DetailStyles'
import { BsHeartFill, BsCalendarPlus, BsArrowLeft } from "react-icons/bs";
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { newFavAsync } from '../redux/actions/actionFavs';

const Details = () => {

    const { movies } = useSelector(store => store.movies);
    const dispatch = useDispatch()

    const params = useParams()
    const { id } = params
    const buscando = movies.find(index => index.title === id)
    console.log(JSON.stringify(buscando));

    const { poster_path, title, overview, release_date, vote_average, video } = buscando

    return (

        <div>
            <Container id='container' className='mx-auto'>
                <ImgCard width="auto" height="500" src={poster_path} alt={title}></ImgCard>
                <Text>
                    <Link to={"/"}>
                        <Button1 size="sm" variant="outline-warning" className=" float-end">
                            <BsArrowLeft className='bg-transparent' />
                        </Button1>
                    </Link>
                    <div className='mt-5 mx-3'>
                        <h3> <strong>{title}</strong></h3>
                        <p>{overview}</p>
                        <div className='row'>

                            <p className="col"><BsCalendarPlus className='bg-transparent' /> {release_date}</p>
                            <p className="col"> <BsHeartFill className='bg-transparent' /> {vote_average}</p>
                        </div>
                    </div>

                    <div>
                        <div className='mx-auto container'>

                            <Modal vid={video} />
                            <Button
                                className='mx-2'
                                variant="outline-warning"
                                onClick={() => {dispatch(newFavAsync({
                                    title: title,
                                    poster_path: poster_path,
                                    vote_average: vote_average
                                }));alert(title+"Ha sido añadida a tus favoritos")}}
                            >
                                <BsHeartFill className='bg-transparent me-2' />Agregar a Favoritos
                            </Button>
                        </div>
                    </div>
                </Text>
            </Container>

        </div>

    )
}

export default Details
