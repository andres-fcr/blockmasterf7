// store/authStore.ts
import { create } from 'zustand'
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth'

type AuthState = {
  user: User | null
  loading: boolean
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
}))

export function initAuthListener() {
  const auth = getAuth()
  const { setUser, setLoading } = useAuthStore.getState()

  onAuthStateChanged(auth, (u) => {
    setUser(u)
    setLoading(false)
  })
}
