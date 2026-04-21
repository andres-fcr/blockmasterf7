import { useRef, type FormEvent } from 'react'
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'

import { useMediaStore } from '@/store/mediaStore'
import { routes } from '@/routes/constants/routes'

const SearchButton = styled(Button)`
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  padding: 0.5rem 1rem;
  background-color: var(--accent);
  border-color: var(--accent);
  color: #1a1a2e;

  &:hover {
    background-color: var(--accent-hover);
    border-color: var(--accent-hover);
    color: #1a1a2e;
  }
`

const SearchInput = styled(Form.Control)`
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  background-color: var(--bg-color-light);
  border-color: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  transition: all var(--transition-fast);

  &:focus {
    background-color: var(--bg-color-light);
    border-color: var(--accent);
    box-shadow: 0 0 0 2px rgba(254, 217, 65, 0.2);
    color: var(--text-primary);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`

const NavLinkStyled = styled(Nav.Link)`
  color: var(--accent) !important;
  font-weight: 500;
  padding: 0.5rem 1rem !important;
  position: relative;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--accent-hover) !important;
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    height: 2px;
    background-color: var(--accent);
    border-radius: 2px;
  }
`

const NavBar = () => {
  const location = useLocation()

  const inputRef = useRef<HTMLInputElement>(null)

  const setSearchTerm = useMediaStore.use.updateSearchTerm()
  const searchTerm = useMediaStore.use.searchTerm()
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
              <NavLinkStyled
                as={Link}
                className={isLinkActive(routes.movies) ? 'active' : ''}
                to={routes.movies}
              >
                Movies
              </NavLinkStyled>
              <NavLinkStyled
                as={Link}
                className={isLinkActive(routes.series) ? 'active' : ''}
                to={routes.series}
              >
                TV Series
              </NavLinkStyled>
            </Nav>

            <Form className="d-flex mx-lg-2 py-2 py-lg-0 position-relative" onSubmit={handlesubmit}>
              <SearchButton type="submit">
                <BsSearch />
              </SearchButton>
              <SearchInput
                ref={inputRef}
                defaultValue={searchTerm}
                aria-label="Search"
                aria-describedby="search"
                placeholder="Search for a movie, TV show..."
              />
              {searchTerm && (
                <Button
                  className="btn-close position-absolute top-50 end-0 translate-middle-y btn-sm bg-transparent pe-4"
                  aria-label="Clear search"
                  onClick={clearSearch}
                  tabIndex={0}
                  style={{ zIndex: 10 }}
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