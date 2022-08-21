/* eslint-disable */

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { authService } from "./firebase";

import Main from "./Pages/Main";
import Create from "./Pages/Create/Create";
import Draw from "./Pages/Draw/Draw";
import Find from "./Pages/Find/Find";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";

import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const DivContainer1 = styled.div`
  /* background-color: red;
  width: 1000px;
  height: 1000px; */

`

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

  useEffect(() => {

    authService.onAuthStateChanged((user) =>
    setUserObj(user)
    );
    setInit(true);

  }, []);

  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
      {
        userObj === null
        ?
          init === false 
          ?
          <div>기다려</div>
          : 
          <Routes>
            <Route path="/" element={<Login userObj={userObj} title={title} src={src} vanish={vanish}/>} />
            <Route path="/" element={<Main userObj={userObj} title={title} src={src} vanish={vanish}/>} />
            <Route path="/create" element={<Create userObj={userObj}/>} />
            <Route path="/draw" element={<Draw userObj={userObj} title={title} src={src} vanish={vanish} />} />
            <Route path="/Find" element={<Find userObj={userObj} />} />
            <Route path="/Setting" element={<Profile userObj={userObj}/>} />
          </Routes>
        :
          init === true 
          ?
          <Routes>
            <Route path="/" element={<Main userObj={userObj} title={title} src={src} vanish={vanish}/>} />
            <Route path="/create" element={<Create userObj={userObj}/>} />
            <Route path="/draw" element={<Draw userObj={userObj} title={title} src={src} vanish={vanish} />} />
            <Route path="/Find" element={<Find userObj={userObj} />} />
            <Route path="/Setting" element={<Profile userObj={userObj}/>} />
          </Routes>
          :
          <div>실패</div>
        }
      </BrowserRouter>
    </>
  );
}

export default App;
