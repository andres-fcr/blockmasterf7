import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { BsFillPlayFill } from 'react-icons/bs';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css';

const ModalS = ({vid}) => {
    const [isOpen, setOpen] = useState(false)

    return (

        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={vid} onClose={() => setOpen(false)} />
            <Button 
            onClick={() => setOpen(true)}
            size="sm"
                className='mx-2'
                variant="warning">
                <BsFillPlayFill className='bg-transparent' /> Ver Ahora</Button>
        </>

    )
}

export default ModalS