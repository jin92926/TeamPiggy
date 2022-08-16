import React from "react";
import { useNavigate } from "react-router";
import { authService, AuthService } from "../../firebase";

const Logout = () => {
    let navigate = useNavigate();
    const onLogOutClick = () => {
        authService.signOut();
        navigate('/')
    }
    return(
        <>
            <button onClick={onLogOutClick}>LogOut</button>
        </>
    )
}
export default Logout;