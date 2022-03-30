import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutAsync } from '../redux/actions/actionLogin'
import { searchTerm } from '../redux/actions/actionSearch'

const NavBar = ({ isAuthenticated, mayor, menor }) => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutAsync())
  }

  const [search, setSearch] = useState({
    busqueda: ''
  })

  const { busqueda } = search

  const handleInputChange = ({ target }) => {
    setSearch({
      ...search,
      [target.name]: target.value
    })
    dispatch(searchTerm(busqueda))
  }


  const handlesubmit = (e) => {
    e.preventDefault()
  }

  const setOrdenMayor = () => {
    mayor(true)
    menor(false)
  }

  const setOrdenMenor = () => {
    mayor(false)
    menor(true)
  }

  const setOrdenDefault = () => {
    mayor(false)
    menor(false)
  }
  return (
    <Navbar style={{ padding: '10px 90px 0px 90px ' }} expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link
            onClick={() => setOrdenDefault()}
            to="/">
            <img
              src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1638920590/logo-blockBuster_apegqx.png"
              width="auto"
              height="64"
              className="d-inline-block align-top"
              alt="Block master"
            />
          </Link>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto mx-3 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => setOrdenDefault()} as={Link} to="/" style={{ color: '#FED941' }} className=" fs-5" > Todas</Nav.Link>
            <Nav.Link onClick={() => setOrdenMayor()} style={{ color: '#FED941' }} className=" fs-5" > Mas Valoradas </Nav.Link>
            <Nav.Link onClick={() => setOrdenMenor()} style={{ color: '#FED941' }} className=" fs-5" > Menos Valoradas</Nav.Link>

            {
              isAuthenticated &&
              <Nav className=' position-relative end-0'>


              </Nav>
            }
            {/* <Nav.Link style={{ color: '#FED941' }} onClick={() => handleLogout()}>Logout</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/new" style={{ color: '#FED941' }} >Nueva Pelicula</Nav.Link> */}
            {/* <NavLogged isAuthenticated={isAuthenticated} /> */}


          </Nav>
          {
            !isAuthenticated &&
            <Nav className='me-3'>
              <Nav.Link as={Link} to="/register" style={{ color: '#FED941' }} className="fs-5" >Registro</Nav.Link>
              <Nav.Link as={Link} to="/login" style={{ color: '#FED941' }} className="fs-5" >Login</Nav.Link>
            </Nav>
          }
          {
            isAuthenticated &&
            <Nav className='me-3'>

              <NavDropdown className='text-warning fs-5' style={{ color: '#FED941' }} title="Cuenta" id="basic-nav-dropdown">

                <NavDropdown.Item as={Link} to="/favoritos" className="fs-6" >Favoritos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/new" className="fs-6" >Nueva Pelicula </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleLogout()} className="fs-6">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          }
          <Form className="d-flex"
            onSubmit={handlesubmit}
          >
            <FormControl
              variant="outline-warning"
              placeholder="Busca tu pelicula favorita"
              className="me-2 px-3"
              name='busqueda'
              value={busqueda}
              onChange={handleInputChange}
            />
            <Button variant="outline-warning" className="px-3"><BsSearch className='bg-transparent' /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar