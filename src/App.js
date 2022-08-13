/* eslint-disable */
import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authService } from "./firebase";
import Main from "./Pages/Main";
import Create from "./Pages/Create/Create";
import Draw from "./Pages/Draw/Draw";
import Find from "./Pages/Find/Find";
import Login from "./Pages/Login/Login";
import Nav from "./Component/Nav";
import Header from "./Component/Header";

function App() {
  const[init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userObj, setUserObj] = useState(null);
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
      {isLogin && <Header userObj={userObj}/>}
      {
        init ? 
        <Routes>
          {
            isLogin
            ?
            <>
            <Route path="/" element={<Main userObj={userObj}/>} />
            <Route path="/create" element={<Create />} />
            <Route path="/draw" element={<Draw />} />
            <Route path="/Find" element={<Find />} />
            </>
            : <Route path="/" element={<Login />} />
          }
          
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
