import { NavLink } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../contexts/auth/AuthContext";

const Button = () => {
    const { logoutUser } = useContext(AuthContext);
    const { isLoggedIn } = useContext(AuthContext);

    if (isLoggedIn) {
        return <button onClick={logoutUser}>Logout</button>;
    }
    else {
        return <button><NavLink to="login" >Login</NavLink></button>
    }
}

export default Button;