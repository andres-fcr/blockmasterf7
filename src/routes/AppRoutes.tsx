import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Home from '@/components/Home'
import NavBar from '@/components/NavBar'
import { routes } from '@/routes/constants/routes'
import Details from '@/components/Details'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path={routes.home} element={<Navigate to={routes.movies} replace />} />

        <Route path={routes.movies} element={<Home />} />

        <Route path={routes.series} element={<Home />} />

        <Route path={routes.details} element={<Details />} />

        <Route path="*" element={<Navigate to={routes.movies} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
