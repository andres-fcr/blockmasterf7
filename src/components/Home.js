import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Env } from '../styles/LoginStyles'

const Home = () => {
    return (
        <div>
            <Env className='mx-auto ps-3 row d-grid gap-2 col-5 mx-auto' >
                <h3 className="text-center col mt-5 mb-5"> Para ver nuestro contenido debes ingresar </h3>

                <Button
                    as={Link}
                    to="/register"
                    variant="warning"
                    className="ps-3 my-2"
                >
                    Registrate
                </Button>
                <h5 className="text-center col">ó</h5>
                <Button
                    as={Link}
                    to="/login"
                    variant="outline-warning"
                    className="ps-3 my-2"
                >
                    Inicia Sesión
                </Button>
            </Env>
        </div>
    )
}

export default Home