import { use, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { PrivateRouter } from '@/routes/PrivateRoute'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Home from '@/components/Home'
import NavBar from '@/components/NavBar'
import MovieForm from '@/components/MovieForm'
import Favs from '@/components/Favs'
import { routes } from '@/routes/constants/routes'
import { initAuthListener } from '@/store/authStore'
import Details from '@/components/Details'

const AppRoutes = () => {
  useEffect(() => {
    initAuthListener()
  }, [])

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path={routes.home} element={<Navigate to={routes.movies} replace />} />

        <Route path={routes.movies} element={<Home />} />

        <Route path={routes.series} element={<Home />} />

        <Route path={routes.details} element={<Details />} />

        <Route path={routes.login} element={<Login />} />

        <Route path={routes.register} element={<Register />} />

        <Route path="*" element={<Navigate to={routes.movies} replace />} />

        <Route
          path={routes.new}
          element={
            <PrivateRouter>
              <MovieForm />
            </PrivateRouter>
          }
        />

        <Route
          path={routes.favs}
          element={
            <PrivateRouter>
              <Favs />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
