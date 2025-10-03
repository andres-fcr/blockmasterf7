import type { Movie } from '@/models/media'
import { create } from 'zustand'
import { createSelectors } from './utils/createSelectors'

type State = {
  media: Movie[]
  searchTerm: string
}

type Actions = {
  updateMedia: (movies: State['media']) => void
  updateSearchTerm: (term: State['searchTerm']) => void
}

const store = create<State & Actions>()((set) => ({
  media: [],
  searchTerm: '',
  updateMedia: (mediaList) => set(() => ({ media: mediaList })),
  updateSearchTerm: (term) => set(() => ({ searchTerm: term.trim() })),
}))

export const useMediaStore = createSelectors(store)
