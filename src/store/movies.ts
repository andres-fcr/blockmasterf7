import type { Movie } from '@/models/movies'
import { create } from 'zustand'
import { createSelectors } from './createSelectors'

type State = {
  movies: Movie[]
  searchTerm: string
}

type Actions = {
  updateMovies: (movies: State['movies']) => void
  updateSearchTerm: (term: State['searchTerm']) => void
}

const store = create<State & Actions>()((set) => ({
  movies: [],
  searchTerm: '',
  updateMovies: (movieList) => set(() => ({ movies: movieList })),
  updateSearchTerm: (term) => set(() => ({ searchTerm: term })),
}))

export const useMoviesStore = createSelectors(store)
