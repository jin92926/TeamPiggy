import React from "react";
import { useNavigate } from "react-router";
import { authService } from "../../firebase";
import styled from "styled-components";

const Logout = () => {
    let navigate = useNavigate();
    const onLogOutClick = () => {
        authService.signOut();
        navigate('/')
    }
    return(
        <>
            <LogoutBtn onClick={onLogOutClick}>LogOut</LogoutBtn>
        </>
    )
}

const LogoutBtn = styled.button`
    margin: 5px 0;
    padding: 10px 25px;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: skyblue;
    border: none;
    border-radius: 5px;
`;
export default Logout;