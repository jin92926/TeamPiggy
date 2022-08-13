import React from "react";
import Nav from "../../Component/Nav";
import Form from "./Form";
import styled from "styled-components";


const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color : #FCF6F5;
`;

const DivContainer = styled.div`

  width: 414px;
  height: 736px;
  background: linear-gradient(17.56deg, #F6E7FB 0%, #3B6BB7 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;


function Create() {
  return (
<<<<<<< HEAD
    <>
      <Form />
    </>
=======
    <Background>
      <DivContainer>
        <Form />
        <Nav />
      </DivContainer>
    </Background>
>>>>>>> origin/master
  );
}

export default Create;
