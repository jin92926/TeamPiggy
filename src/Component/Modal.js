import React, { useEffect, useState } from 'react';
import styled from 'styled-components';



const DivContainer = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  background-color: red;

`


const Modal = (props) => {

  const [close, setClose] = useState(true);
  
  useEffect(() => {
    let timer = setTimeout(() => {
      setClose(false)
    }, 2000);
    // 버그 방지 
    return () => {
      clearTimeout(timer);
    };
  })
  
    return(
      <>
        {close === true
        ? 
        <DivContainer>
          <h4>{props.title}</h4>
        </DivContainer>
        : null
        }
      </>
      )
}

export default Modal;