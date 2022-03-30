import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Car, ImgCarousel } from '../styles/CardsStyles';
import ModalS from './ModalS';

const Carrusel = ({ video }) => {

    // console.log(video);
    const navigate = useNavigate()

    return (
        <Car className='mx-auto'>
            <Carousel indicators={false}>
                {
                    video.map((i, index) => (

                        <Carousel.Item key={index}>
                            <ImgCarousel
                                className="d-block w-100 img-fluid "
                                src={i.backdrop_path}
                                alt={i.title}
                            />
                            <Carousel.Caption className=' bg-dark bg-opacity-75 w-25 rounded'>
                                <h5 className=' bg-transparent mb-3'>{i.title}</h5>
                                <ModalS
                                    as={Button}
                                    size="sm"
                                    vid={i.video} />
                                <Button
                                    size="sm"
                                    className="mx-2"
                                    variant='outline-warning'
                                    onClick={() => navigate(`/detalle/${i.title}`)}
                                >
                                    Detalles
                                </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </Car>
    )
}

export default Carrusel