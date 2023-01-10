import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

const LoginPage = ()=>{
    const { isAuth, setIsAuth}= useContext(AuthContext);


    const handleLogin = ()=>{
        setIsAuth(true)
    }


    if(isAuth){
        return <Navigate to= '/catalog'/>
    }

    return (
        <div>
            LoginPage
            
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default LoginPage;