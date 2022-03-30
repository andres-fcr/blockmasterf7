import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesFavs } from "../types/types"

///////Nuevo//////

export const newFavAsync = (newFav) => {
    return (dispatch) => {
        addDoc(collection(db, "favs"), newFav)
            .then(resp => {
                console.log(resp);
                dispatch(newFavSync(newFav))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const newFavSync = (newFav) => {
    return {
        type: typesFavs.nuevo,
        payload: newFav
    }
}

///////////////Listar/////////////

export const listFavsAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "favs"));
        const fav = [];
        querySnapshot.forEach((doc) => {
            fav.push({
                ...doc.data()
            })
        });
        dispatch(listFavsSync(fav));
    }
}

export const listFavsSync = (fav) => {
    return {
        type: typesFavs.listar,
        payload: fav
    }
}


/////////////Borrar///////////////

export const deleteFavAsync = (title) => {
    return async (dispatch) => {
        console.log(title);
        const estCollection = collection(db, "favs");
        const q = query(estCollection, where("title", "==", title))

        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db, "favs", docu.id));
        })
        dispatch(deleteSync(title));
    }
}

export const deleteSync = (title) => {
    return {
        type: typesFavs.borrar,
        payload: title
    }
}