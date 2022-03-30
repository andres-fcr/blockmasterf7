import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { registroAsync } from '../redux/actions/actionRegistro'
import { Env } from '../styles/LoginStyles'

const Register = () => {

    const dispatch = useDispatch()

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = register

    const handleInputchange = ({ target }) => {
        setRegister({
            ...register,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registroAsync(name, email, password))
    }

    return (
        <div>
            <Env id='contenedor1' className='mx-auto ps-3 row'>
                <h3 className="text-center col mt-5 "> Registrarme </h3>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-group my-2">
                        <label htmlFor="formName">Nombre Usuario</label>
                        <input
                            name='name'
                            // value={name}
                            onChange={handleInputchange}
                            type="text"
                            className="form-control"
                            id="formName"
                            placeholder="Nombre Usuario"
                        />
                    </div>
                    <div className="form-group  my-2">
                        <label htmlFor="formEmail">Correo Electrónico</label>
                        <input
                            name='email'
                            // value={email}
                            onChange={handleInputchange}
                            type="email"
                            className="form-control"
                            id="formEmail"
                            placeholder="Correo electrónico"
                        />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="formPassword">Contraseña</label>
                        <input
                            name='password'
                            // value={password}
                            onChange={handleInputchange}
                            type="password"
                            className="form-control"
                            id="formPassword"
                            placeholder="Introduce tu contraseña"
                        />
                    </div>
                    <div className=' mx-auto col'>
                        <br />

                        <div className='d-grid gap-2 col-6 mx-auto'>
                            <Button
                                type="submit"
                                variant="outline-warning"
                                className="my-2 "
                            // onClick={() => agregarDatos()}
                            >Guardar</Button>
                        </div>

                        <h4 className="text-center col mt-4 ">Ya tienes una cuenta?</h4>
                        <div className='d-grid gap-2 col-6 mx-auto'>
                            <Button
                                as={Link}
                                to="/login"
                                variant="warning"
                                className="my-2 "
                            >
                                Iniciar Sesión
                            </Button>
                        </div>

                    </div>
                </form>
            </Env></div>
    )
}

export default Register