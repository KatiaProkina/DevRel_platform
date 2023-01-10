import { useContext } from "react";
import { AuthContext } from '../context/auth'
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () =>{
    const isAuth = useContext(AuthContext);

    if(!isAuth){
        return <Navigate to = '/login'/>
    }

    return <Outlet/>
}
export default ProtectedRoutes;