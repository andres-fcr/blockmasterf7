import { typesLogin } from "../types/types"

export const registroReducer = (state = {}, action) => {
    switch (action.type) {
        case typesLogin.registro:
            return {
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password
            }
        default:
            return state
    }
}