/* eslint-disable */
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Pages/Main';
import Create from './Pages/Create';
import Draw from './Pages/Draw';
import Find from './Pages/Find/Find';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="/find" element={<Find />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
