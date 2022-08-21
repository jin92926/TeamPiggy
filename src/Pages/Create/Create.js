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
  color: #fcf6f5;
`;

const DivContainer = styled.div`
  width: 414px;
  height: 736px;
  background: linear-gradient(17.56deg, #f6e7fb 0%, #3b6bb7 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

function Create(props) {
  return (
    <Background>
      <DivContainer>
        <Form userObj={props.userObj}/>
        <Nav />
      </DivContainer>
    </Background>
  );
}

export default Create;
