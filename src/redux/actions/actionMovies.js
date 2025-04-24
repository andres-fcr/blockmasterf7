import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import { typesMovies } from '../types/types'

///////Nueva Pelicula //////////////

export const registerMovieAsync = (newMvoie) => {
  return (dispatch) => {
    addDoc(collection(db, 'movies'), newMvoie)
      .then((resp) => {
        console.log(resp)
        dispatch(registerMovieSync(newMvoie))
        dispatch(listMoviesAsync())
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const registerMovieSync = (movie) => {
  return {
    type: typesMovies.nueva,
    payload: movie,
  }
}

///////////////Listar Peliculas/////////////

export const listMoviesAsync = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, 'movies'))
    const movie = []
    querySnapshot.forEach((doc) => {
      movie.push({
        ...doc.data(),
      })
    })
    dispatch(listMoviesSync(movie))
  }
}

export const listMoviesSync = (movies) => {
  return {
    type: typesMovies.listar,
    payload: movies,
  }
}

/////////////Borrar///////////////

export const deleteMovieAsync = (title) => {
  return async (dispatch) => {
    const estCollection = collection(db, 'movies')
    const q = query(estCollection, where('title', '==', title))

    const datos = await getDocs(q)
    datos.forEach((docu) => {
      deleteDoc(doc(db, 'movies', docu.id))
    })
    dispatch(deleteSync(title))
    dispatch(listMoviesAsync())
  }
}

export const deleteSync = (title) => {
  return {
    type: typesMovies.delete,
    payload: title,
  }
}

//////////Edit Data ///////////////

export const updateDataAsync = (data) => {
  return async (dispatch) => {
    const coleccion = collection(db, 'movies')
    const consulta = query(coleccion, where('id', '==', data.id))
    const datos = await getDocs(consulta)
    datos.forEach((docu) => {
      const nuevosCambios = {
        product: data.product,
        brand: data.brand,
        quantity: data.quantity,
        price: data.price,
      }
      updateDoc(doc(db, 'data', docu.id), nuevosCambios)
    })
    dispatch(listMoviesAsync())
  }
}
