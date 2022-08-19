import React from "react";
import { useNavigate } from "react-router";
import { authService, AuthService } from "../../firebase";

const Logout = ({refreshUser}) => {
    let navigate = useNavigate();
    const onLogOutClick = () => {
        authService.signOut();
        navigate('/')
        // refreshUser();
    }
    return(
        <>
            <button onClick={onLogOutClick}>LogOut</button>
        </>
    )
}
export default Logout;