import { typesSearch } from "../types/types"

export const searchTerm = (value = '') => {
    return {
        type: typesSearch.search,
        payload: value
    }
}

export const listSearch = (value) => {
    return {
        type: typesSearch.listart,
        payload: { value }
    }
}