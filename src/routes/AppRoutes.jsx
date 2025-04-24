import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { PublicRoutes } from './PublicRouter'
import { PrivateRouter } from './PrivateRouter'
import { DashRoutesPrivate } from './DashRoutesPrivate'
import Home from '../components/Home'
import Register from '../components/Register'
import Login from '../components/Login'
import Cards from '../components/Cards'
import NavBar from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { listMoviesAsync } from '../redux/actions/actionMovies'
import { GetMoviesByName } from '../helpers/GetMoviesByName'

const AppRoutes = () => {
  const [checking, setChecking] = useState(true)
  const [isLogged, setIsLogged] = useState(false)
  const [mayor, setMayor] = useState(false)
  const [menor, setMenor] = useState(false)

  const dispatch = useDispatch()

  const { term } = useSelector((store) => store.search)

  useEffect(() => {
    dispatch(listMoviesAsync())
  }, [dispatch])

  const resultSearch = GetMoviesByName(term)

  const results = () => {
    if (mayor === true) {
      return resultSearch.sort((a, b) => {
        return b.vote_average - a.vote_average
      })
    } else if (menor === true) {
      return resultSearch.sort((a, b) => {
        return a.vote_average - b.vote_average
      })
    } else {
      return resultSearch
    }
  }

  const datos = results()

  console.log(datos)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
      setChecking(false)
    })
  }, [setIsLogged, setChecking])

  return (
    <BrowserRouter>
      <NavBar isAuthenticated={isLogged} mayor={setMayor} menor={setMenor} />
      <Routes>
        <Route path="/" element={<Cards items={datos} isLoading={checking} />} />

        <Route
          path="/home"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <Home />
            </PublicRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes isAuthenticated={isLogged}>
              <Register />
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRouter isAuthenticated={isLogged}>
              <DashRoutesPrivate />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
