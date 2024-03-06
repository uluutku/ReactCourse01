import { useContext } from "react";
import authContext from "./context/auth-context";

function Auth() {
    //const authContextResponse = useContext(authContext)
    //console.log(authContextResponse.status);
    const{status, login} = useContext(authContext)
    console.log(status);
    return ( <>
    <h1>Giriş yapıldı mı?</h1>
    {
        status ? <p>Giriş yapıldı.</p> : <p>Giriş yapılmadı.</p>
    }
    <button onClick={login}>Giriş yap.</button>
    </> );
}

export default Auth;