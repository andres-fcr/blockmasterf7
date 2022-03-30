import { typesMovies } from '../types/types'

const initialState = {
    movies: []
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesMovies.nueva:
            return {
                movies: [action.payload]
            }
        case typesMovies.listar:
            return {
                movies: [...action.payload]
            }
        case typesMovies.borrar:
            return {
                movies: state.movies.filter(del => del.title !== action.payload)
            }
        case typesMovies.editar:
            return {
            }
        default:
            return state;
    }
}