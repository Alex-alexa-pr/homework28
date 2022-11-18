import { useContext } from "react";

import LoginForm from '.././components/LoginForm';
import AuthContext from ".././contexts/auth/AuthContext";
import UserInfo from ".././components/UserInfo";

const Login = () => {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <>
        {isLoggedIn ? <UserInfo /> : <LoginForm />}
        </>
    )
}

export default Login;