import { useContext } from "react";

import AuthContext from "../contexts/auth/AuthContext";

const UserInfo = () => {
    const { userInfo } = useContext(AuthContext);

    return (
        <div>
            <h4>User</h4>

            <ul>
                <li>ID: {userInfo.id}</li>
                <li>
                    Name: {userInfo.firstName} {userInfo.lastName}
                </li>
                <li>Email: {userInfo.email}</li>
                <li>Gender: {userInfo.gender}</li>
            </ul>
        </div>
    );
};

export default UserInfo;
