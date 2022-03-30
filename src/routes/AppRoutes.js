import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PublicRoutes } from './PublicRouter'
import { PrivateRouter } from './PrivateRouter'
import { DashRoutesPrivate } from './DashRoutesPrivate'
import Home from '../components/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import Cards from '../components/Cards';
import NavBar from '../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { listMoviesAsync } from '../redux/actions/actionMovies';
import { searchTerm } from '../redux/actions/actionSearch';
import { GetMoviesByName } from '../helpers/GetMoviesByName';
// import Details from '../components/Details';
// import axios from 'axios';
// import { url } from '../helpers/url';
// import MovieForm from '../components/MovieForm';
// import Favs from '../components/Favs';
// import { registerMovieAsync } from '../redux/actions/actionMovies';



const AppRoutes = () => {

    const [checking, setChecking] = useState(true)
    const [isLogged, setIsLogged] = useState(false)
    const [mayor, setMayor] = useState(false)
    const [menor, setMenor] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listMoviesAsync())
        // dispatch(listSearch())
        dispatch(searchTerm())
    }, [dispatch])

    //   const subir =  [...movie].forEach(data => dispatch(registerMovieAsync(data)))


    const { term } = useSelector(store => store.search)

    const resultSearch = GetMoviesByName(term)

    const results = () => {
        if (mayor === true) {
            return resultSearch.sort((a, b) => {
                return (b.vote_average - a.vote_average)
            })

        } else if (menor === true) {
            return resultSearch.sort((a, b) => {
                return (a.vote_average - b.vote_average)
            })

        } else {
            return resultSearch
        }
    }

    const datos = results()

    console.log(datos);

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLogged(true)
            } else {
                setIsLogged(false)
            }
            setChecking(false)
        })
    }, [setIsLogged, setChecking])


    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }


    return (
        <BrowserRouter>
            <NavBar isAuthenticated={isLogged} mayor={setMayor} menor={setMenor} />
            <Routes>
                <Route path='/' element={<Cards items={datos} />} />

                <Route path="/home" element={
                    <PublicRoutes isAuthenticated={isLogged}>
                        <Home />
                    </PublicRoutes>}
                />
                <Route path="/login" element={
                    <PublicRoutes isAuthenticated={isLogged}>
                        <Login />
                    </PublicRoutes>}
                />
                <Route path="/register" element={
                    <PublicRoutes isAuthenticated={isLogged}>
                        <Register />
                    </PublicRoutes>}
                />
                <Route path='/*' element={
                    <PrivateRouter isAuthenticated={isLogged}>
                        <DashRoutesPrivate />
                    </PrivateRouter>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes