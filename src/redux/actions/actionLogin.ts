import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { google } from "../../firebase/firebaseConfig"
import { typesLogin } from "../types/types"


/////////Hacer el despacho asincrono y llamar el sincrono para que quede tambien en redux////

export const loginGoogleAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(LoginSync(user.uid, user.displayName))
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const loginAsync = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(LoginSync(user.uid, user.displayName))
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
}

/////Sincrono es para guardarlo en redux, que euqede de forma global///////
export const LoginSync = (id, displayname) => {
    return {
        type: typesLogin.login,
        payload: {
            id,
            displayname
        }
    }
}

export const logoutAsync = () => {
    return () => {
        const auth = getAuth()
        signOut(auth)
            .then(( user) => {

            })
            .catch(error => {
                console.log(error);
            })
    }
}

