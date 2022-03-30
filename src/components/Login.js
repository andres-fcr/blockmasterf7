import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginAsync, loginGoogleAsync } from '../redux/actions/actionLogin'
import { Env } from '../styles/LoginStyles'

const Login = () => {

    const dispatch = useDispatch()

    const [register, setRegister] = useState({
        email: '',
        password: ''
    })

    const { email, password } = register

    const handleInputChange = ({ target }) => {
        setRegister({
            ...register,
            [target.name]: target.value
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginAsync(email, password))
    }

    const googleAsync = () => {
        dispatch(loginGoogleAsync())
    }


    return (
        <div>
            <Env id='contenedor1' className='mx-auto ps-3 row'>
                <h3 className="text-center col mt-5 mb-3"> Iniciar Sesión </h3>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-group my-2">
                        <label htmlFor="formEmail">Correo Electrónico</label>
                        <input
                            name='email'
                            onChange={handleInputChange}
                            type="email"
                            className="form-control"
                            id="formEmail"
                            placeholder="Correo electrónico"
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="formPassword">Contraseña</label>
                        <input
                            name='password'
                            onChange={handleInputChange}
                            type="password"
                            className="form-control"
                            id="formPassword"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className='d-grid gap-2 col-6 mx-auto'>
                        <Button
                            variant="warning"
                            className="my-1"
                        // onClick={() => agregarDatos()}
                        >Ingresar</Button>

                    </div>

                    <br />

                    <div className='d-grid col-6 mx-auto'>
                        <Button
                            type='button'
                            variant="outline-warning"
                            onClick={() => googleAsync()}
                        >
                            <img className="google-icon me-3" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            Ingresar con Google
                        </Button>

                        <h4 className="text-center mt-4">No tienes una cuenta?</h4>
                        <Button
                            as={Link}
                            to="/register"
                            variant="warning"
                            className="my-2 row "
                        >
                            Regístrate
                        </Button>
                  
                    </div>
                </form>
            </Env>
        </div>
    )
}

export default Login