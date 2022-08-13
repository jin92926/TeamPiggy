import React from "react";
import { authService, AuthService } from "../../firebase";

const Logout = () => {
    const onLogOutClick = () => authService.signOut();
    return(
        <>
            <button onClick={onLogOutClick}>LogOut</button>
        </>
    )
}
export default Logout;