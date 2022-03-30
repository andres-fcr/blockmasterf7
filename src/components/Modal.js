import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { BsFillPlayFill } from 'react-icons/bs';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css';

const Modal = ({ vid }) => {

    const [isOpen, setOpen] = useState(false)

    return (

        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={vid} onClose={() => setOpen(false)} />
            <Button className="btn-primary" onClick={() => setOpen(true)}

                variant="warning">
                <BsFillPlayFill className='bg-transparent' /> Ver Ahora</Button>
        </>

    )
}

export default Modal