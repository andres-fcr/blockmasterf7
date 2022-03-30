import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"
import NavBarPublic from "../components/NavBarPublic"
import Register from "../components/Register"

export const DashRoutesPublic = () => {
    return (
        <div>
            <NavBarPublic/>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    )
}