import { useRef, type FormEvent } from 'react'
import { Container, Form, InputGroup, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import { useMediaStore } from '@/store/mediaStore'
import { useAuthStore } from '@/store/authStore'
import { routes } from '@/routes/constants/routes'

const NavBar = () => {
  const location = useLocation()

  const inputRef = useRef<HTMLInputElement>(null)

  const user = useAuthStore((state) => state.user)

  const setSearchTerm = useMediaStore.use.updateSearchTerm()

  const isLinkActive = (route: string) => location.pathname.startsWith(route)

  const handleLogout = () => {
    // dispatch(logoutAsync())
  }

  const onItemSelect = (key: string | null, e: React.SyntheticEvent<unknown, Event>) => {
    if (key === routes.register) {
      e.preventDefault()
      // onAuthModal()
    }
  }

  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!inputRef.current) return

    setSearchTerm(inputRef.current.value || '')
    inputRef.current.value = ''
  }

  return (
    <Navbar
      collapseOnSelect
      className="px-4 border-bottom border-dark bg-body-dark dark-bg"
      expand="lg"
      variant="dark"
      onSelect={onItemSelect}
    >
      <Container fluid>
        <Navbar.Brand>
          <Nav.Link
            as={Link}
            to={routes.movies}
            href={routes.movies}
            className="text-warning link-underline-opacity-0 fs-4 pe-4"
            style={{ textDecoration: 'none' }}
          >
            🎞️ BlockMaster
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className="my-1" />

        <Navbar.Offcanvas id="navbarScroll" placement="end">
          <Offcanvas.Header closeButton className="text-white dark-bg"></Offcanvas.Header>

          <Offcanvas.Body className="px-5 px-lg-0 dark-bg">
            <Nav className="me-auto my-lg-0 mx-0" navbarScroll>
              <Nav.Link
                as={Link}
                style={{ color: '#FED941' }}
                className={
                  isLinkActive(routes.movies)
                    ? 'text-decoration-underline link-offset-1 fw-medium'
                    : ''
                }
                to={routes.movies}
                href={routes.movies}
              >
                Peliculas
              </Nav.Link>
              <Nav.Link
                as={Link}
                style={{ color: '#FED941' }}
                className={
                  isLinkActive(routes.series)
                    ? 'text-decoration-underline link-offset-1 fw-medium'
                    : ''
                }
                to={routes.series}
                href={routes.series}
              >
                Series
              </Nav.Link>
            </Nav>

            {user && <Nav className=" position-relative end-0"></Nav>}

            <Form className="d-flex px-lg-2 py-2 py-lg-0" onSubmit={handlesubmit}>
              <InputGroup>
                <InputGroup.Text id="search">
                  <BsSearch className="bg-transparent" />
                </InputGroup.Text>
                <Form.Control
                  ref={inputRef}
                  aria-label="Username"
                  aria-describedby="search"
                  placeholder="Busca tu pelicula favorita"
                  className="form-control-dark"
                />
              </InputGroup>
            </Form>
            {!user && (
              <Nav className="me-3 fs-6">
                <Nav.Link style={{ color: '#FED941' }} className="button" href={routes.register}>
                  Acceder
                </Nav.Link>
              </Nav>
            )}
            {user && (
              <Nav className="me-3">
                <NavDropdown
                  className="text-warning fs-6"
                  style={{ color: '#FED941' }}
                  title="Cuenta"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/favoritos" className="fs-6">
                    Favoritos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/new" className="fs-6">
                    Nueva Pelicula
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleLogout()} className="fs-6">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavBar
