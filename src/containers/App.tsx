import { useEffect } from 'react'

import AppRoutes from '@/routes/AppRoutes'
import { initAuthListener } from '@/store/authStore'


function App() {
  useEffect(() => {
    initAuthListener()
  }, [])

  return (
    <div className="App vh-100 d-flex flex-column align-items-cente">
      <AppRoutes />
    </div>
  )
}

export default App
