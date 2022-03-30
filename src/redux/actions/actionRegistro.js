import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { typesLogin } from "../types/types"


export const registroAsync = (name,email,password) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth,email,password)
            .then(async({ user }) => {
                await updateProfile(auth.currentUser,{displayName:name}) 
                dispatch(registroSync(name,email,password))
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const registroSync = (name,email,password) => {
    return{
        type: typesLogin.registro,
        payload: {
            name,
            email,
            password
        }
    }
}