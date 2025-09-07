import { typesSearch } from "../types/types";

const initialState = {
    term: '',
    result: ''
}

export const searchreducer = (state = initialState, action) => {
    switch (action.type) {
        case typesSearch.search:

            return {
                term: action.payload
            }
        case typesSearch.listart:
            return {
                result: action.payload.value
            }
        default:
            return state
    }
}