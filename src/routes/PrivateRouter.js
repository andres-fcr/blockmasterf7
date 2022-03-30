import { Navigate } from "react-router-dom"

export const PrivateRouter = ({ isAuthenticated, children }) => {
    return isAuthenticated
    ? children
    : <Navigate to="/home"/>
}