import { Navigate } from 'react-router-dom'

import { useAuthStore } from '@/store/authStore'
import type { JSX } from 'react'
import { routes } from './constants/routes'

export const PrivateRouter = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuthStore()

  if (loading) return <div>Loading...</div>

  if (!user) return <Navigate to={routes.movies} replace />

  return children
}
