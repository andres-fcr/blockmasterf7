import { useRef, type FormEvent } from 'react'
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'

import { useMediaStore } from '@/store/mediaStore'
import { useAuthStore } from '@/store/authStore'
import { routes } from '@/routes/constants/routes'
import type { MediaTypeEnum } from '@/models/media'

type Section = MediaTypeEnum | undefined

const NavBar = () => {
  const location = useLocation()
  const section = useLocation().pathname.slice(1) as Section

  const inputRef = useRef<HTMLInputElement>(null)

  const user = useAuthStore((state) => state.user)

  const setSearchTerm = useMediaStore.use.updateSearchTerm()
  const searchTerm = useMediaStore.use.searchTerm()
  console.log(searchTerm)
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
  }

  const clearSearch = () => {
    if (inputRef.current) inputRef.current.value = ''
    setSearchTerm('')
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
            <Nav className="me-auto my-lg-0" navbarScroll>
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
                Movies
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
                TV Series
              </Nav.Link>
            </Nav>

            {/* {user && <Nav className=" position-relative end-0"></Nav>} */}

            <Form className="d-flex mx-lg-2 py-2 py-lg-0 position-relative" onSubmit={handlesubmit}>
              <Button className="btn-warning" type="submit">
                <BsSearch className="bg-transparent btn-warning" />
              </Button>
              <Form.Control
                ref={inputRef}
                defaultValue={searchTerm}
                aria-label="Username"
                aria-describedby="search"
                placeholder="Search for a movie, TV show..."
                className="form-control-dark"
              />
              {searchTerm && (
                <Button
                  className="btn-close ts-5 fw-medium position-absolute top-50 end-0 translate-middle-y btn-sm bg-transparent pe-3"
                  aria-label="Clear search"
                  onClick={clearSearch}
                  tabIndex={0}
                ></Button>
              )}
            </Form>

            {/* {!user && (
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
            )} */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavBar
