import { NavLink } from "react-router-dom";
import { useContext } from "react";

import AuthContext from ".././contexts/auth/AuthContext";
import Button from ".././components/Button";
import Avatar from "@mui/material/Avatar";


const Header = () => {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "")}
                        to="/" end>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "")}
                        to="users" >Users</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "")}
                        to="hotels" >Hotels</NavLink></li>
                </ul>
            </nav>
            {isLoggedIn ? <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> : " "}
            <Button />
        </div>
    )
}

export default Header;