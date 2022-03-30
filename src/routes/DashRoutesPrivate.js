import { Navigate, Route, Routes } from "react-router-dom"
import Details from "../components/Details"
import Favs from "../components/Favs"
import MovieForm from "../components/MovieForm"
// import NavBar from "../components/NavBar"

export const DashRoutesPrivate = () => {
    return (
        <div>
            <Routes>
                <Route path="/detalle/:id" element={<Details />} />
                <Route path="/new" element={<MovieForm />}/>   
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/favoritos" element={<Favs />}/>
            </Routes>
        </div>
    )
}