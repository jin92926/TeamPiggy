/* eslint-disable */
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Create from "./Pages/Create/Create";
import Draw from "./Pages/Draw/Draw";
import Find from "./Pages/Find/Find";

import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`

function App() {
  const [title, setTitle] = useState([['행복', '저금통'] ,'행복한 기억이 필요하세요?', '저금통을 눌러주세요']);
  const [src, setSrc] = useState(['/folder.png', '/mainpig.png']);
  const [vanish, setVanish] = useState(true);

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<Main title={title} src={src} vanish={vanish}/>} />
            <Route path="/create" element={<Create />} />
            <Route path="/draw" element={<Draw title={title} src={src} vanish={vanish}/>} />
            <Route path="/Find" element={<Find />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
