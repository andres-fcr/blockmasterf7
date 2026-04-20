import { useRef, type FormEvent } from 'react'
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'

import { useMediaStore } from '@/store/mediaStore'
import { routes } from '@/routes/constants/routes'
const NavBar = () => {
  const location = useLocation()

  const inputRef = useRef<HTMLInputElement>(null)

  const setSearchTerm = useMediaStore.use.updateSearchTerm()
  const searchTerm = useMediaStore.use.searchTerm()
  console.log(searchTerm)
  const isLinkActive = (route: string) => location.pathname.startsWith(route)

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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavBar