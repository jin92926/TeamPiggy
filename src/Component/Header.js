import React from "react";
import Logout from "../Pages/Login/Logout";

const Header = ({userObj}) => {
    // console.log(userObj.photoURL);
    return(
        <>
        {userObj.email}
        <Logout />
        </>
    )
}  
export default Header;