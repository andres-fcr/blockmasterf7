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
import { AxiosError } from 'axios'

import { db } from '../firebase/firebaseConfig'
import { api } from './client'
import type { MediaList, MovieResponse, TVResponse, MediaTypeEnum } from '@/models/media'
import { toMediaList } from '@/helpers/movieTranslator'
import { buildUrl } from '@/helpers/url'

export type ListMediaParams = {
  page?: number
  type: MediaTypeEnum
}

export function isApiError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError === true
}

export const listMedia = async ({ type, page }: ListMediaParams): Promise<MediaList> => {
  try {
    const url = buildUrl(`/${type}`, { page, include_adult: false })

    if (type === 'movie') {
      const response = await api.get<MovieResponse>(url)
      return toMediaList({ ...response.data, type })
    }

    const response = await api.get<TVResponse>(url)
    return toMediaList({ ...response.data, type })
  } catch (error) {
    throw error as AxiosError
  }
}


///////Nueva Pelicula //////////////

export const registerMovieAsync = (newMvoie) => {
  return (dispatch) => {
    addDoc(collection(db, 'movies'), newMvoie)
      .then((resp) => {
        console.log(resp)
        dispatch(registerMovieSync(newMvoie))
        dispatch(listMedia())
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const registerMovieSync = (movie) => {
  return {
    payload: movie,
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
    dispatch(listMedia())
  }
}

export const deleteSync = (title) => {
  return {
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
    dispatch(listMedia())
  }
}
