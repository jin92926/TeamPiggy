/* eslint-disable */
<<<<<<< HEAD
import React, {useEffect, useState} from "react";
=======
import React, {useEffect, useState} from "react";
>>>>>>> origin/master
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authService } from "./firebase";
import Main from "./Pages/Main";
import Create from "./Pages/Create/Create";
import Draw from "./Pages/Draw/Draw";
import Find from "./Pages/Find/Find";
import Login from "./Pages/Login/Login";
import Nav from "./Component/Nav";
import Header from "./Component/Header";

import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`

function App() {
<<<<<<< HEAD
  const[init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [title, setTitle] = useState([['행복', '저금통'] ,'행복한 기억이 필요하세요?', '저금통을 눌러주세요']);
  const [src, setSrc] = useState(['/folder.png', '/mainpig.png']);
  const [vanish, setVanish] = useState(true);


  console.log(authService.currentUser);

  useEffect(() =>{
    authService.onAuthStateChanged((user) => 
      user ? (      
        setIsLogin(true),
        setUserObj(user)
      ) :
      setIsLogin(false)
    );
    setInit(true);
  }, []);
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
      {isLogin && <Header userObj={userObj}/>}
      {
        init ? 
        <Routes>
          {
            isLogin
            ?
            <>
            <Route path="/" element={<Main userObj={userObj} title={title} src={src} vanish={vanish}/>} />
            <Route path="/create" element={<Create />} />
            <Route path="/draw" element={<Draw title={title} src={src} vanish={vanish} />} />
            <Route path="/Find" element={<Find />} />
            </>
            : <Route path="/" element={<Login />} />
          }
          
=======
  
>>>>>>> origin/master
        </Routes>
        :
        "init.. "
        }
        {isLogin && <Nav />}
      </BrowserRouter>
    </>
  );
}

export default App;
