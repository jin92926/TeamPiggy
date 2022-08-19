/* eslint-disable */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authService } from "./firebase";
import Main from "./Pages/Main";
import Create from "./Pages/Create/Create";
import Draw from "./Pages/Draw/Draw";
import Find from "./Pages/Find/Find";
import Login from "./Pages/Login/Login";
import Setting from "./Pages/Setting/Setting";

import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  const [init, setInit] = useState(false);
  
  const [userObj, setUserObj] = useState(null);
  const [title, setTitle] = useState([
    ["행복", "저금통"],
    "행복한 기억이 필요하세요?",
    "저금통을 눌러주세요",
  ]);
  const [src, setSrc] = useState(["/folder.png", "/mainpig.png"]);
  const [vanish, setVanish] = useState(true);

  console.log(authService.currentUser);

  useEffect(() => {
    authService.onAuthStateChanged((user) =>
      setUserObj(user)
    );
    setInit(true);
  }, []);
  const refreshUser = () =>{
    setUserObj(authService.currentUser);
  }
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
      {
        init ? 
        <Routes>
          {
            Boolean(userObj)
            ?
            <>
            <Route path="/main" element={<Main userObj={userObj} title={title} src={src} vanish={vanish}/>} />
            <Route path="/create" element={<Create userObj={userObj}/>} />
            <Route path="/draw" element={<Draw userObj={userObj} title={title} src={src} vanish={vanish} />} />
            <Route path="/Find" element={<Find userObj={userObj} />} />
            <Route path="/Setting" element={<Setting userObj={userObj}/>} />
            </>
            : <Route path="/" element={<Login />} />
          }
        </Routes>
        :
        "init.. "
        }
      </BrowserRouter>
    </>
  );
}

export default App;
