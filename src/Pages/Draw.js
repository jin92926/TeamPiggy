import React, { useState } from 'react';
import Nav from '../Component/Nav'


function Draw() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <>
        <div>행복한 기억이 필요하세요?
          
        </div>
        <Nav/>
    </>
  )
}

export default Draw;