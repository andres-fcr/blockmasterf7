import { typesFavs } from '../types/types'

const initialState = {
    favs: []
}

export const favsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesFavs.nuevo:
            return {
                favs: [action.payload]
            }
        case typesFavs.listar:
            return {
                favs: [...action.payload]
            }
        case typesFavs.borrar:
            return {
                favs: state.favs.filter(rmv => rmv.title !== action.payload)
            }
        default:
            return state;
    }
}