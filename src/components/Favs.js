import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteFavAsync, listFavsAsync } from '../redux/actions/actionFavs';
import { CardF, ImgCard, ListCard, Rating, Titulo } from '../styles/CardsStyles';

const Favs = () => {

    const navigate= useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(listFavsAsync())
    }, [dispatch])
    
    // const enviar

    const { favs } = useSelector(store => store.favs)

    console.log(favs);

    return (
        <div>
            <Titulo>tus favoritos</Titulo>

            <ListCard>
                {
                    favs.map((mov, index) => (
                        <CardF key={index} >
                            <ImgCard src={mov.poster_path} alt={mov.title}></ImgCard>
                            <Rating className=''>
                                <div className='mt-1 bg-transparent text-warning align-middle'>
                                    <BsFillStarFill className='mx-1' />
                                    {mov.vote_average}
                                </div>
                            </Rating>
                            <Button
                                className='mt-1'
                                variant='outline-warning'
                                onClick={() => {dispatch(deleteFavAsync(mov.title));navigate("/favoritos")}}
                            >
                                Borrar
                            </Button>
                        </CardF>

                    ))

                }
            </ListCard>
        </div>
    )
}

export default Favs